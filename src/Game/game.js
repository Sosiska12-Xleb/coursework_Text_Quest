// импорт необходимых модулей
import readlineSync from 'readline-sync'
import { player } from './player.js'
import { locations, getRandomEvent, executeEvent } from './locate.js'
import { saveGame, loadGame } from './save.js'
import { addHistory, showHistory, clearHistory } from './history.js'
import { menu } from '../menu/index.js'
import { calculateArmorAc, dexterityRangeChecker } from '../items/armor.js'

// состояние игры (текущая локация, флаг работы, количество шагов)
export let gameState = {
    currentLocation: 'catacombs',
    isRunning: true,
    stepsInLocation: 0
}

// функция использования предмета из инвентаря
const useItem = (item) => {
    // обработка зелий и временных предметов
    if (item.class === 'Зелье характеристик' || item.class === 'Мега зелье' || item.class === 'Зелье активатор' || item.class === 'Пиво') {
        // лечение здоровья
        if (item.target === 'hits') {
            const healAmount = item.effect
            player.stats.hits += healAmount
            if (player.stats.hits > player.stats.max_hits) {
                player.stats.hits = player.stats.max_hits
            }
            console.log(`|  Вы использовали ${item.name}. Восстановлено ${healAmount} здоровья.`)
            addHistory(`Использовал ${item.name} - восстановлено ${healAmount} здоровья`)
        } 
        // временные хиты
        else if (item.target === 'time_hits') {
            player.stats.time_hits += item.effect
            console.log(`|  Вы использовали ${item.name}. +${item.effect} временных хитов.`)
            addHistory(`Использовал ${item.name} - получено ${item.effect} временных хитов`)
        } 
        // временная защита
        else if (item.target === 'ac') {
            player.timeEffects.timeAc += item.effect
            console.log(`|  Вы использовали ${item.name}. +${item.effect} к классу брони до конца боя.`)
            addHistory(`Использовал ${item.name} - защита увеличена на ${item.effect}`)
        } 
        // временная сила
        else if (item.target === 'strengh') {
            player.timeEffects.timeStrenght += item.effect
            console.log(`|  Вы использовали ${item.name}. +${item.effect} к силе до конца боя.`)
            addHistory(`Использовал ${item.name} - сила увеличена на ${item.effect}`)
        } 
        // временная ловкость
        else if (item.target === 'dexterity') {
            player.timeEffects.timeDexterity += item.effect
            console.log(`|  Вы использовали ${item.name}. +${item.effect} к ловкости до конца боя.`)
            addHistory(`Использовал ${item.name} - ловкость увеличена на ${item.effect}`)
        } 
        // временное телосложение
        else if (item.target === 'physique') {
            player.timeEffects.timePhysique += item.effect
            console.log(`|  Вы использовали ${item.name}. +${item.effect} к телосложению до конца боя.`)
            addHistory(`Использовал ${item.name} - телосложение увеличено на ${item.effect}`)
        } 
        // временный интеллект
        else if (item.target === 'intelligence') {
            player.timeEffects.timeIntelligence += item.effect
            console.log(`|  Вы использовали ${item.name}. +${item.effect} к интеллекту до конца боя.`)
            addHistory(`Использовал ${item.name} - интеллект увеличен на ${item.effect}`)
        } 
        // временная мудрость
        else if (item.target === 'wisdom') {
            player.timeEffects.timeWisdom += item.effect
            console.log(`|  Вы использовали ${item.name}. +${item.effect} к мудрости до конца боя.`)
            addHistory(`Использовал ${item.name} - мудрость увеличена на ${item.effect}`)
        } 
        // временная харизма
        else if (item.target === 'charisma') {
            player.timeEffects.timeCharisma += item.effect
            console.log(`|  Вы использовали ${item.name}. +${item.effect} к харизме до конца боя.`)
            addHistory(`Использовал ${item.name} - харизма увеличена на ${item.effect}`)
        } 
        // сопротивление урону
        else if (item.target === 'resistance') {
            player.otherTimeEffects.resistance = true
            console.log(`|  Вы использовали ${item.name}. Вы получили сопротивление урону.`)
            addHistory(`Использовал ${item.name} - получено сопротивление урону`)
        } 
        // неуязвимость
        else if (item.target === 'invulnerability') {
            player.otherTimeEffects.invulnerability = true
            console.log(`|  Вы использовали ${item.name}. Вы стали неуязвимы!`)
            addHistory(`Использовал ${item.name} - получена неуязвимость`)
        } 
        // шипы
        else if (item.target === 'spikes') {
            player.otherTimeEffects.spikes = true
            console.log(`|  Вы использовали ${item.name}. Вас окружили шипы.`)
            addHistory(`Использовал ${item.name} - активированы шипы`)
        } 
        // огненная атака
        else if (item.target === 'fireAttack') {
            player.otherTimeEffects.fireAttack = true
            console.log(`|  Вы использовали ${item.name}. Вокруг вас загорелось пламя.`)
            addHistory(`Использовал ${item.name} - активирована огненная аура`)
        }
        
        // удаление использованного предмета из инвентаря
        const itemIndex = player.inventory.storageItemsStats.findIndex(i => i.name === item.name)
        if (itemIndex !== -1) {
            player.inventory.storageItemsStats.splice(itemIndex, 1)
        }
        return
    }
    
    // обработка артефактов (постоянные улучшения)
    if (item.class === 'Артефакт' || item.class === 'Мега-артефакт' || item.class === 'Артефакт способностей' || item.class === 'Артефакт характеристик') {
        // постоянное увеличение защиты
        if (item.target === 'ac') {
            player.stats.ac += item.effect
            console.log(`|  Вы использовали ${item.name}. Класс брони увеличен на ${item.effect} навсегда.`)
            addHistory(`Использовал артефакт ${item.name} - защита увеличена на ${item.effect} навсегда`)
        } 
        // постоянное увеличение здоровья
        else if (item.target === 'hits') {
            player.stats.max_hits += item.effect
            player.stats.hits += item.effect
            console.log(`|  Вы использовали ${item.name}. Максимальное здоровье увеличено на ${item.effect}.`)
            addHistory(`Использовал артефакт ${item.name} - здоровье увеличено на ${item.effect} навсегда`)
        } 
        // постоянное увеличение силы
        else if (item.target === 'strenght') {
            player.characteristic.strenght += item.effect
            console.log(`|  Вы использовали ${item.name}. Сила увеличена на ${item.effect} навсегда.`)
            addHistory(`Использовал артефакт ${item.name} - сила увеличена на ${item.effect} навсегда`)
        } 
        // постоянное увеличение ловкости
        else if (item.target === 'dexterity') {
            player.characteristic.dexterity += item.effect
            console.log(`|  Вы использовали ${item.name}. Ловкость увеличена на ${item.effect} навсегда.`)
            addHistory(`Использовал артефакт ${item.name} - ловкость увеличена на ${item.effect} навсегда`)
        } 
        // постоянное увеличение телосложения
        else if (item.target === 'physique') {
            player.characteristic.physique += item.effect
            console.log(`|  Вы использовали ${item.name}. Телосложение увеличено на ${item.effect} навсегда.`)
            addHistory(`Использовал артефакт ${item.name} - телосложение увеличено на ${item.effect} навсегда`)
        } 
        // постоянное увеличение интеллекта
        else if (item.target === 'intelligence') {
            player.characteristic.intelligence += item.effect
            console.log(`|  Вы использовали ${item.name}. Интеллект увеличен на ${item.effect} навсегда.`)
            addHistory(`Использовал артефакт ${item.name} - интеллект увеличен на ${item.effect} навсегда`)
        } 
        // постоянное увеличение мудрости
        else if (item.target === 'wisdom') {
            player.characteristic.wisdom += item.effect
            console.log(`|  Вы использовали ${item.name}. Мудрость увеличена на ${item.effect} навсегда.`)
            addHistory(`Использовал артефакт ${item.name} - мудрость увеличена на ${item.effect} навсегда`)
        } 
        // постоянное увеличение харизмы
        else if (item.target === 'charisma') {
            player.characteristic.charisma += item.effect
            console.log(`|  Вы использовали ${item.name}. Харизма увеличена на ${item.effect} навсегда.`)
            addHistory(`Использовал артефакт ${item.name} - харизма увеличена на ${item.effect} навсегда`)
        } 
        // получение способности пьяницы
        else if (item.target === 'drunkard') {
            player.stats.drunkard = true
            console.log(`|  Вы использовали ${item.name}. Алкоголь теперь лечит вас.`)
            addHistory(`Использовал артефакт ${item.name} - получена способность "Пьяница"`)
        }
        
        // удаление использованного артефакта
        const itemIndex = player.inventory.storageItemsStats.findIndex(i => i.name === item.name)
        if (itemIndex !== -1) {
            player.inventory.storageItemsStats.splice(itemIndex, 1)
        }
        return
    }
    
    console.log('|  Этот предмет нельзя использовать сейчас.')
}

// функция надевания брони

const equipArmor = (armor) => {
    // снятие текущей брони
    if (player.inventory.armors.armor !== '') {
        const currentArmor = player.inventory.armors.armor
        // используем calculateArmorAc для получения правильного КД
        const currentAc = calculateArmorAc(currentArmor)
        player.stats.ac -= currentAc
        
        // снятие бонусов от магической брони
        if (currentArmor.target === 'strenght') {
            player.characteristic.strenght -= currentArmor.effect || 0
        } else if (currentArmor.target === 'dexterity') {
            player.characteristic.dexterity -= currentArmor.effect || 0
        } else if (currentArmor.target === 'physique') {
            player.characteristic.physique -= currentArmor.effect || 0
        } else if (currentArmor.target === 'intelligence') {
            player.characteristic.intelligence -= currentArmor.effect || 0
        } else if (currentArmor.target === 'wisdom') {
            player.characteristic.wisdom -= currentArmor.effect || 0
        } else if (currentArmor.target === 'charisma') {
            player.characteristic.charisma -= currentArmor.effect || 0
        }
        
        player.inventory.storageItemsStats.push(currentArmor)
        addHistory(`Снял броню ${currentArmor.name}`)
    }
    
    // надевание новой брони - рассчитываем КД правильно
    let armorAc = 0
    
    // для обычной брони
    if (armor.baseAc !== undefined) {
        if (armor.useDexterity === true) {
            // лёгкая и средняя броня - добавляем модификатор ловкости
            let dexBonus = player.characteristic.dexterity
            if (dexBonus > 2) {
                dexBonus = 2
            } else if (dexBonus < -2) {
                dexBonus = -2
            }
            armorAc = armor.baseAc + dexBonus
            console.log(`|  База брони: ${armor.baseAc} + модификатор ловкости (${dexBonus}) = ${armorAc}`)
        } else {
            // тяжёлая броня - без модификатора ловкости
            armorAc = armor.baseAc
            console.log(`|  База брони: ${armor.baseAc}`)
        }
    } 
    // для магической брони
    else if (armor.stats && armor.stats.baseAc !== undefined) {
        if (armor.stats.useDexterity === true) {
            let dexBonus = player.characteristic.dexterity
            if (dexBonus > 2) {
                dexBonus = 2
            } else if (dexBonus < -2) {
                dexBonus = -2
            }
            armorAc = armor.stats.baseAc + dexBonus
        } else {
            armorAc = armor.stats.baseAc
        }
    }
    // старый формат брони (для совместимости)
    else {
        armorAc = armor.ac || 10
    }
    
    // сохраняем рассчитанный КД в предмете для последующего снятия
    armor.currentAc = armorAc
    
    player.inventory.armors.armor = armor
    player.stats.ac += armorAc
    player.stats.stealth = armor.stealth !== undefined ? armor.stealth : true
    
    // применение бонусов от магической брони
    if (armor.target === 'strenght') {
        player.characteristic.strenght += armor.effect || 0
    } else if (armor.target === 'dexterity') {
        player.characteristic.dexterity += armor.effect || 0
    } else if (armor.target === 'physique') {
        player.characteristic.physique += armor.effect || 0
    } else if (armor.target === 'intelligence') {
        player.characteristic.intelligence += armor.effect || 0
    } else if (armor.target === 'wisdom') {
        player.characteristic.wisdom += armor.effect || 0
    } else if (armor.target === 'charisma') {
        player.characteristic.charisma += armor.effect || 0
    }
    
    // удаление брони из инвентаря
    const armorIndex = player.inventory.storageItemsStats.findIndex(i => i.name === armor.name)
    if (armorIndex !== -1) {
        player.inventory.storageItemsStats.splice(armorIndex, 1)
    }
    
    console.log(`|  Вы надели ${armor.name}. Класс брони: ${player.stats.ac}.`)
    addHistory(`Надел броню ${armor.name}, класс брони ${player.stats.ac}`)
}

// функция надевания щита
const equipShield = (shield) => {
    // снятие текущего щита
    if (player.inventory.armors.shield !== '') {
        const currentShield = player.inventory.armors.shield
        const currentAc = currentShield.baseAc || currentShield.ac || 2
        player.stats.ac -= currentAc
        player.inventory.storageItemsStats.push(currentShield)
        addHistory(`Снял щит ${currentShield.name}`)
    }
    
    // надевание нового щита
    const shieldAc = shield.baseAc || shield.ac || 2
    player.inventory.armors.shield = shield
    player.stats.ac += shieldAc
    
    // удаление щита из инвентаря
    const shieldIndex = player.inventory.storageItemsStats.findIndex(i => i.name === shield.name)
    if (shieldIndex !== -1) {
        player.inventory.storageItemsStats.splice(shieldIndex, 1)
    }
    
    console.log(`|  Вы надели ${shield.name}. Класс брони: ${player.stats.ac}.`)
    addHistory(`Надел щит ${shield.name}, класс брони ${player.stats.ac}`)
}

// функция экипировки оружия
const equipWeapon = (weapon, slot) => {
    // экипировка в первый слот
    if (slot === 'first') {
        // снятие текущего оружия
        if (player.inventory.weapon.firstWeapon !== '') {
            const currentWeapon = player.inventory.weapon.firstWeapon
            player.inventory.storageItemsStats.push(currentWeapon)
            addHistory(`Снял оружие ${currentWeapon.name} из первого слота`)
        }
        player.inventory.weapon.firstWeapon = weapon
    } 
    // экипировка во второй слот
    else if (slot === 'second') {
        // снятие текущего оружия
        if (player.inventory.weapon.secondWeapon !== '') {
            const currentWeapon = player.inventory.weapon.secondWeapon
            player.inventory.storageItemsStats.push(currentWeapon)
            addHistory(`Снял оружие ${currentWeapon.name} из второго слота`)
        }
        player.inventory.weapon.secondWeapon = weapon
    }
    
    // удаление оружия из инвентаря
    const weaponIndex = player.inventory.storageItemsStats.findIndex(i => i.name === weapon.name)
    if (weaponIndex !== -1) {
        player.inventory.storageItemsStats.splice(weaponIndex, 1)
    }
    
    console.log(`|  Вы экипировали ${weapon.name} в ${slot === 'first' ? 'первый' : 'второй'} слот оружия.`)
    addHistory(`Экипировал оружие ${weapon.name} в ${slot === 'first' ? 'первый' : 'второй'} слот`)
}

// функция снятия брони
const unequipArmor = () => {
    if (player.inventory.armors.armor !== '') {
        const currentArmor = player.inventory.armors.armor
        const currentAc = calculateArmorAc(currentArmor)
        player.stats.ac -= currentAc
        
        // снятие бонусов от магической брони
        if (currentArmor.target === 'strenght') {
            player.characteristic.strenght -= currentArmor.effect || 0
        } else if (currentArmor.target === 'dexterity') {
            player.characteristic.dexterity -= currentArmor.effect || 0
        } else if (currentArmor.target === 'physique') {
            player.characteristic.physique -= currentArmor.effect || 0
        } else if (currentArmor.target === 'intelligence') {
            player.characteristic.intelligence -= currentArmor.effect || 0
        } else if (currentArmor.target === 'wisdom') {
            player.characteristic.wisdom -= currentArmor.effect || 0
        } else if (currentArmor.target === 'charisma') {
            player.characteristic.charisma -= currentArmor.effect || 0
        }
        
        player.inventory.storageItemsStats.push(currentArmor)
        player.inventory.armors.armor = ''
        player.stats.stealth = true
        console.log(`|  Вы сняли ${currentArmor.name}. Класс брони: ${player.stats.ac}.`)
        addHistory(`Снял броню ${currentArmor.name}, класс брони ${player.stats.ac}`)
    } else {
        console.log('|  На вас нет брони.')
    }
}

// функция снятия щита
const unequipShield = () => {
    if (player.inventory.armors.shield !== '') {
        const currentShield = player.inventory.armors.shield
        const currentAc = calculateArmorAc(currentShield)
        player.stats.ac -= currentAc
        player.inventory.storageItemsStats.push(currentShield)
        player.inventory.armors.shield = ''
        console.log(`|  Вы сняли ${currentShield.name}. Класс брони: ${player.stats.ac}.`)
        addHistory(`Снял щит ${currentShield.name}, класс брони ${player.stats.ac}`)
    } else {
        console.log('|  У вас нет щита.')
    }
}

// функция снятия оружия
const unequipWeapon = (slot) => {
    // снятие из первого слота
    if (slot === 'first' && player.inventory.weapon.firstWeapon !== '') {
        const currentWeapon = player.inventory.weapon.firstWeapon
        player.inventory.storageItemsStats.push(currentWeapon)
        player.inventory.weapon.firstWeapon = ''
        console.log(`|  Вы сняли ${currentWeapon.name} из первого слота.`)
        addHistory(`Снял оружие ${currentWeapon.name} из первого слота`)
    } 
    // снятие из второго слота
    else if (slot === 'second' && player.inventory.weapon.secondWeapon !== '') {
        const currentWeapon = player.inventory.weapon.secondWeapon
        player.inventory.storageItemsStats.push(currentWeapon)
        player.inventory.weapon.secondWeapon = ''
        console.log(`|  Вы сняли ${currentWeapon.name} из второго слота.`)
        addHistory(`Снял оружие ${currentWeapon.name} из второго слота`)
    } else {
        console.log('|  В этом слоте нет оружия.')
    }
}

// отображение инвентаря
const showInventory = () => {
    console.log('==================== ИНВЕНТАРЬ ====================')
    console.log(`|  Монеты: ${player.inventory.coins}`)
    console.log('  --- Экипировка ---')
    
    // отображение брони с правильным КД
    if (player.inventory.armors.armor !== '') {
        const armor = player.inventory.armors.armor
        const armorAc = calculateArmorAc(armor)
        console.log(`|  Броня: ${armor.name} (КД: ${armorAc})`)
    } else {
        console.log(`|  Броня: пусто`)
    }
    
    console.log(`|  Щит: ${player.inventory.armors.shield !== '' ? player.inventory.armors.shield.name + ' (КД: +' + (player.inventory.armors.shield.baseAc || 2) + ')' : 'пусто'}`)
    console.log(`|  Оружие (1 слот): ${player.inventory.weapon.firstWeapon !== '' ? player.inventory.weapon.firstWeapon.name : 'пусто'}`)
    console.log(`|  Оружие (2 слот): ${player.inventory.weapon.secondWeapon !== '' ? player.inventory.weapon.secondWeapon.name : 'пусто'}`)
    
    if (player.inventory.storageItemsStats.length > 0) {
        console.log('  --- Предметы ---')
        for (let i = 0; i < player.inventory.storageItemsStats.length; i++) {
            const item = player.inventory.storageItemsStats[i]
            console.log(`|  ${i + 1}. ${item.name} - ${item.class || 'Предмет'}`)
        }
    } else {
        console.log('|  У вас нет предметов в инвентаре.')
    }
    console.log('==================================================')
}

// отображение характеристик персонажа
const showStats = () => {
    // проверка смерти перед показом статистики
    if (!checkPlayerDeath()) {
        return
    }
    console.log('==================== ХАРАКТЕРИСТИКИ ====================')
    console.log(`|  Имя: ${player.name}`)
    console.log(`|  Сила: ${player.characteristic.strenght}`)
    console.log(`|  Ловкость: ${player.characteristic.dexterity}`)
    console.log(`|  Телосложение: ${player.characteristic.physique}`)
    console.log(`|  Интеллект: ${player.characteristic.intelligence}`)
    console.log(`|  Мудрость: ${player.characteristic.wisdom}`)
    console.log(`|  Харизма: ${player.characteristic.charisma}`)
    console.log(`|  Здоровье: ${player.stats.hits}/${player.stats.max_hits}`)
    console.log(`|  Временные хиты: ${player.stats.time_hits}`)
    console.log(`|  Класс брони: ${player.stats.ac}`)
    console.log(`|  Скорость: ${player.stats.speed}`)
    console.log(`|  Скрытность: ${player.stats.stealth ? 'да' : 'нет'}`)
    console.log('========================================================')
}

// меню управления инвентарём
const inventoryManagement = () => {
    // проверка смерти перед входом в инвентарь
    if (!checkPlayerDeath()) {
        return
    }
    while (true) {
        showInventory()
        console.log('|  Действия с инвентарём:')
        console.log('|  1. Использовать предмет')
        console.log('|  2. Надеть броню')
        console.log('|  3. Надеть щит')
        console.log('|  4. Экипировать оружие (1 слот)')
        console.log('|  5. Экипировать оружие (2 слот)')
        console.log('|  6. Снять броню')
        console.log('|  7. Снять щит')
        console.log('|  8. Снять оружие (1 слот)')
        console.log('|  9. Снять оружие (2 слот)')
        console.log('|  10. Вернуться')
        
        const action = readlineSync.question('|  Action: ')
        
        // обработка выбора действия
        if (action === '10') {
            break
        } 
        // использование предмета
        else if (action === '1') {
            if (player.inventory.storageItemsStats.length === 0) {
                console.log('|  У вас нет предметов для использования.')
                continue
            }
            
            console.log('|  Выберите предмет для использования:')
            for (let i = 0; i < player.inventory.storageItemsStats.length; i++) {
                const item = player.inventory.storageItemsStats[i]
                console.log(`|  ${i + 1}. ${item.name}`)
            }
            console.log(`|  ${player.inventory.storageItemsStats.length + 1}. Отмена`)
            
            const itemChoice = parseInt(readlineSync.question('|  Action: '))
            if (itemChoice >= 1 && itemChoice <= player.inventory.storageItemsStats.length) {
                const item = player.inventory.storageItemsStats[itemChoice - 1]
                useItem(item)
                addHistory(`Посещение инвентаря - использование предмета ${item.name}`)
            }
        } 
        // надевание брони
        else if (action === '2') {
            const armorsList = player.inventory.storageItemsStats.filter(item => item.class === 'Доспех' || item.class === 'Доспех характеристик')
            if (armorsList.length === 0) {
                console.log('|  У вас нет брони в инвентаре.')
                continue
            }
            
            console.log('|  Выберите броню для надевания:')
            for (let i = 0; i < armorsList.length; i++) {
                console.log(`|  ${i + 1}. ${armorsList[i].name} (КБ: ${armorsList[i].ac})`)
            }
            console.log(`|  ${armorsList.length + 1}. Отмена`)
            
            const armorChoice = parseInt(readlineSync.question('|  Action: '))
            if (armorChoice >= 1 && armorChoice <= armorsList.length) {
                equipArmor(armorsList[armorChoice - 1])
                addHistory(`Посещение инвентаря - экипировка брони`)
            }
        } 
        // надевание щита
        else if (action === '3') {
            const shieldsList = player.inventory.storageItemsStats.filter(item => item.class === 'Щит' || item.class === 'Щит характеристик')
            if (shieldsList.length === 0) {
                console.log('|  У вас нет щитов в инвентаре.')
                continue
            }
            
            console.log('|  Выберите щит для надевания:')
            for (let i = 0; i < shieldsList.length; i++) {
                console.log(`|  ${i + 1}. ${shieldsList[i].name} (КБ: +${shieldsList[i].ac})`)
            }
            console.log(`|  ${shieldsList.length + 1}. Отмена`)
            
            const shieldChoice = parseInt(readlineSync.question('|  Action: '))
            if (shieldChoice >= 1 && shieldChoice <= shieldsList.length) {
                equipShield(shieldsList[shieldChoice - 1])
                addHistory(`Посещение инвентаря - экипировка щита`)
            }
        } 
        // экипировка оружия в первый слот
        else if (action === '4') {
            const weaponsList = player.inventory.storageItemsStats.filter(item => item.class === 'Оружие' || item.class === 'Дальнобойное оружие' || item.class === 'Магический посох' || item.class === 'Вампирское' || item.class === 'Огненное' || item.class === 'Отравленное' || item.class === 'Тактическое')
            if (weaponsList.length === 0) {
                console.log('|  У вас нет оружия в инвентаре.')
                continue
            }
            
            console.log('|  Выберите оружие для экипировки в первый слот:')
            for (let i = 0; i < weaponsList.length; i++) {
                const weapon = weaponsList[i]
                let damage = weapon.damage || (weapon.stats ? weapon.stats.damage : '?')
                console.log(`|  ${i + 1}. ${weapon.name} (Урон: ${damage})`)
            }
            console.log(`|  ${weaponsList.length + 1}. Отмена`)
            
            const weaponChoice = parseInt(readlineSync.question('|  Action: '))
            if (weaponChoice >= 1 && weaponChoice <= weaponsList.length) {
                equipWeapon(weaponsList[weaponChoice - 1], 'first')
                addHistory(`Посещение инвентаря - экипировка оружия в первый слот`)
            }
        } 
        // экипировка оружия во второй слот
        else if (action === '5') {
            const weaponsList = player.inventory.storageItemsStats.filter(item => item.class === 'Оружие' || item.class === 'Дальнобойное оружие' || item.class === 'Магический посох' || item.class === 'Вампирское' || item.class === 'Огненное' || item.class === 'Отравленное' || item.class === 'Тактическое')
            if (weaponsList.length === 0) {
                console.log('|  У вас нет оружия в инвентаре.')
                continue
            }
            
            console.log('|  Выберите оружие для экипировки во второй слот:')
            for (let i = 0; i < weaponsList.length; i++) {
                const weapon = weaponsList[i]
                let damage = weapon.damage || (weapon.stats ? weapon.stats.damage : '?')
                console.log(`|  ${i + 1}. ${weapon.name} (Урон: ${damage})`)
            }
            console.log(`|  ${weaponsList.length + 1}. Отмена`)
            
            const weaponChoice = parseInt(readlineSync.question('|  Action: '))
            if (weaponChoice >= 1 && weaponChoice <= weaponsList.length) {
                equipWeapon(weaponsList[weaponChoice - 1], 'second')
                addHistory(`Посещение инвентаря - экипировка оружия во второй слот`)
            }
        } 
        // снятие брони
        else if (action === '6') {
            unequipArmor()
            addHistory(`Посещение инвентаря - снятие брони`)
        } 
        // снятие щита
        else if (action === '7') {
            unequipShield()
            addHistory(`Посещение инвентаря - снятие щита`)
        } 
        // снятие оружия из первого слота
        else if (action === '8') {
            unequipWeapon('first')
            addHistory(`Посещение инвентаря - снятие оружия из первого слота`)
        } 
        // снятие оружия из второго слота
        else if (action === '9') {
            unequipWeapon('second')
            addHistory(`Посещение инвентаря - снятие оружия из второго слота`)
        } else {
            console.log('|  Некорректный ввод.')
        }
    }
}

// движение вперёд (генерация и выполнение случайного события)
const moveForward = async () => {
    // проверка смерти перед действием
    if (!checkPlayerDeath()) {
        return
    }
    
    gameState.stepsInLocation++
    addHistory(`Переход на шаг ${gameState.stepsInLocation} в локации ${locations[gameState.currentLocation].name}`)
    
    const event = getRandomEvent(gameState.currentLocation)
    if (!event) {
        console.log('|  Ошибка получения события.')
        return
    }
    
    addHistory(`Встреча с событием: ${event.name} (${event.type})`)
    const result = await executeEvent(event, gameState.currentLocation)
    
    if (result && typeof result === 'object' && result.type === 'exit') {
        addHistory(`Переход из ${locations[gameState.currentLocation].name} в ${locations[result.nextLocation].name}`)
        gameState.currentLocation = result.nextLocation
        gameState.stepsInLocation = 0
        console.log(`|  Вы в локации: ${locations[gameState.currentLocation].name}`)
    }
    
    //  проверка смерти
    checkPlayerDeath()
}

// функция проверки смерти игрока
const checkPlayerDeath = () => {
    if (player.stats.hits <= 0) {
        addHistory(`Смерть персонажа в локации ${locations[gameState.currentLocation].name}`)
        console.log('==================== ВЫ УМЕРЛИ ====================')
        console.log('|  1. Загрузить последнее сохранение')
        console.log('|  2. Выйти в главное меню')
        
        const choice = readlineSync.question('|  Action: ')
        if (choice === '1') {
            const loaded = loadGame()
            if (loaded) {
                addHistory(`Загрузка сохранения после смерти`)
                return true
            } else {
                console.log('|  Не удалось загрузить сохранение.')
                gameState.isRunning = false
                return false
            }
        } else {
            return menu()
        }
    }
    return true
}

// отображение главного меню игры
const showMainMenu = () => {
    console.log('==================== ГЛАВНОЕ МЕНЮ ====================')
    console.log(`|  Текущая локация: ${locations[gameState.currentLocation].name}`)
    console.log('|  1. Идти вперёд')
    console.log('|  2. Инвентарь')
    console.log('|  3. Характеристики')
    console.log('|  4. История действий')
    console.log('|  5. Сохранить игру')
    console.log('|  6. Загрузить игру')
    console.log('|  7. Выйти в главное меню')
    console.log('======================================================')
}

// основная функция игры
export const game = async () => {
    gameState.isRunning = true
    
    // проверка что игрок жив после загрузки
    if (player.stats.hits <= 0) {
        console.log('==================== ВЫ УМЕРЛИ ====================')
        console.log('|  1. Загрузить последнее сохранение')
        console.log('|  2. Выйти в главное меню')
        
        const choice = readlineSync.question('|  Action: ')
        if (choice === '1') {
            const loaded = loadGame()
            if (loaded) {
                addHistory(`Загрузка сохранения`)
            } else {
                console.log('|  Не удалось загрузить сохранение.')
                gameState.isRunning = false
                return
            }
        } else {
            gameState.isRunning = false
            return
        }
    }
    
    console.log('==================== НАЧАЛО ИГРЫ ====================')
    console.log(`|  Добро пожаловать, ${player.name}!`)
    console.log(`|  Вы находитесь в ${locations[gameState.currentLocation].name}`)
    console.log(`|  Здоровье: ${player.stats.hits}/${player.stats.max_hits}`)
    console.log('======================================================')
    
    addHistory(`Начало игры. Персонаж ${player.name} появился в локации ${locations[gameState.currentLocation].name}`)
    
    while (gameState.isRunning) {
        showMainMenu()
        const action = readlineSync.question('|  Action: ')
        
        if (action === '1') {
            await moveForward()
        } else if (action === '2') {
            inventoryManagement()
        } else if (action === '3') {
            showStats()
        } else if (action === '4') {
            showHistory()
        } else if (action === '5') {
            saveGame()
            addHistory(`Сохранение игры`)
        } else if (action === '6') {
            const loaded = loadGame()
            if (loaded) {
                addHistory(`Загрузка игры. Текущая локация: ${locations[gameState.currentLocation].name}`)
                console.log(`|  Вы в локации: ${locations[gameState.currentLocation].name}`)
                console.log(`|  Здоровье: ${player.stats.hits}/${player.stats.max_hits}`)
            }
        } else if (action === '7') {
            console.log('|  Возврат в главное меню...')
            addHistory(`Выход в главное меню`)
            return menu()
        } else {
            console.log('|  Некорректный ввод.')
        }
        
        // после каждого действия проверяем смерть
        if (!checkPlayerDeath()) {
            break
        }
    }
}