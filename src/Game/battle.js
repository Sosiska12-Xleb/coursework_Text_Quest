// файл боевой системы
import readlineSync from 'readline-sync'
import fs from 'fs'
import { diceRandomizer } from "../diceRandomizer.js"
import { player } from "./player.js"

let enemiesList = []

// начало битвы
export const battleBegin = (enemies) => {
    // проверка что игрок жив перед началом битвы
    if (player.stats.hits <= 0) {
        console.log(`|  Вы слишком слабы для боя...`)
        return 'Поражение'
    }
    
    enemiesList = []
    
    // отображение случайной картинки битвы
    const battlePicture = diceRandomizer(6)
    const battlePicPath = `assets/battles/battlePic${battlePicture}.txt`
    if (fs.existsSync(battlePicPath)) {
        console.log(fs.readFileSync(battlePicPath, 'utf-8'))
    }
    
    // добавление врагов с описанием появления
    for (const i of enemies) {
        const spawnText = diceRandomizer(6)
        switch(spawnText) {
            case 1:
                console.log(`* ${i.name} преграждает вам путь!`)
                break
            case 2:
                console.log(`* ${i.name} явно недоволен вашим появлением!`)
                break
            case 3:
                console.log(`* ${i.name} оценил вашe появление как вызов!`)
                break
            case 4:
                console.log(`* ${i.name} желает вашей крови!`)
                break
            case 5:
                console.log(`* ${i.name} хочет получить по лицу!`)
                break
            case 6:
                console.log(`* ${i.name} случайно попал в сражение!`)
                break
        }
        // копирование врага, чтобы не изменять оригинал
        const enemyCopy = JSON.parse(JSON.stringify(i))
        enemiesList.push(enemyCopy)
    }
    
    // установка дистанции для каждого врага
    for (const i of enemiesList) {
        i.distance = diceRandomizer(6)
    }
    return playerTurn()
}

// ход игрока
const playerTurn = () => {
    // проверка что игрок жив
    if (player.stats.hits <= 0) {
        console.log(`|  Вы уже мертвы...`)
        return final('Поражение')
    }
    
    // расчёт урона от эффектов
    let totalDamage = player.otherTimeEffects.acid + player.otherTimeEffects.fire
    
    if (player.stats.time_hits > 0) {
        if (player.stats.time_hits >= totalDamage) {
            player.stats.time_hits -= totalDamage
        } else {
            const remainingDamage = totalDamage - player.stats.time_hits
            player.stats.time_hits = 0
            player.stats.hits -= remainingDamage
        }
    } else {
        player.stats.hits -= totalDamage
    }
    
    if (player.otherTimeEffects.time > 0) {
        player.otherTimeEffects.time -= 1
    }
    
    // проверка смерти
    if (player.stats.hits <= 0) {
        console.log(`|  Вы чувствуете сильную боль и падаете без сознания... Вы умерли.`)
        return final('Поражение')
    }
    
    // уменьшение длительности эффектов
    if (player.otherTimeEffects.time > 0) {
        player.otherTimeEffects.time -= 1
    }
    
    // проверка смерти
    if (player.stats.hits <= 0) {
        console.log(`|  Вы чувствуете сильную боль и падаете без сознания... Вы умерли.                                                               |`)
        return final('Поражение')
    }

    // отображение интерфейса боя
    console.log("▪───────────────────────────────────────────────────────────────⚔︎───────────────────────────────────────────────────────────────▪")
    console.log(`|                                                               |                                                                 |`)
    console.log(`|  ᛝ [Имя]: ${player.name}                                             |  1: 🗡 Битва                                                    |`)
    console.log(`|  ♡ [Максимальные хиты]: ${player.stats.max_hits}                                    |  2: ⊕ Предметы                                                 |`)
    console.log(`|  ❤︎ [Хиты]: ${player.stats.hits}                                                |  3: ➤ Скрыться                                                 |`)
    console.log(`|  ⏱︎❤︎ [Временные хиты]: ${player.stats.time_hits}                                     |  4: ⚡︎ Движение                                                |`)    
    console.log(`|  ⛊ [КД]: ${player.stats.ac}                                                  |                                                                 |`)
    console.log(`|  ⚡︎ [Скорость]: ${player.stats.speed}                                              | * Выберете желаемое число для действия.                       |`)
    console.log("|                                                               |                                                                |/")
    
    let action = readlineSync.question('|  Action: ')
    switch(action) {
        case "1":
            return playerAttack()
        case "2":
            return itemsUse()
        case "3":
            return stealthTry()
        case "4":
            return move()
        default:
            console.log("|  Некорректный ввод, введите только желаемое число.                                                                             |")     
            return playerTurn()
    }
}

// выбор оружия для атаки
const playerAttack = () => {
    let firstWeaponStatus = false
    let secondWeaponStatus = false
    console.log("|  * Выберете оружие из списка для атаки (Введите 3 чтобы вернуться):                                                            |/")
    console.log("|                                                                                                                                |")
    
    if (player.inventory.weapon.firstWeapon !== '') {
        firstWeaponStatus = true
        console.log(`|  1. ${player.inventory.weapon.firstWeapon.name}.`)
        console.log("|                                                                                                                                |")
    } else {
        console.log("|  1. Оружие в первом слоте отсутствует.                                                                                         |")
        console.log("|                                                                                                                                |")
    }
    
    if (player.inventory.weapon.secondWeapon !== '') {
        secondWeaponStatus = true
        console.log(`|  2. ${player.inventory.weapon.secondWeapon.name}.`)
        console.log("|                                                                                                                                |")
    } else {
        console.log("|  2. Оружие во втором слоте отсутствует.                                                                                        |")
        console.log("|                                                                                                                                |")
    }

    let action = readlineSync.question('|  Action: ')
    switch(action) {
        case "1":
            if (firstWeaponStatus === true) {
                attack(player.inventory.weapon.firstWeapon)
                return
            } else {
                console.log("|  У вас нет оружия в первом слоте выберете другое.                                                                              |")
                return playerAttack()
            }
        case "2":
            if (secondWeaponStatus === true) {
                attack(player.inventory.weapon.secondWeapon)
                return
            } else {
                console.log("|  У вас нет оружия во втором слоте выберете другое.                                                                              |")
                return playerAttack()
            }
        case "3":
            return playerTurn()
        default:
            console.log("|  Некорректный ввод.                                                                                   |")
            return playerAttack()
    }
}

// основная функция атаки
const attack = (weapon) => {
    if (!weapon || !weapon.class) {
        console.log("|  Ошибка: оружие не выбрано!                                                                                              |")
        return playerAttack()
    }
    
    console.log("|  * Выберете врага, которого вы хотите атаковать(Введите 6 чтобы вернуться):                                                    |")
    console.log("|                                                                                                                                |")
    let enemyNum = 0
    let targetEnemyIndex = ''
    for (let i = 0; i < enemiesList.length; i += 1) {
        enemyNum += 1
        const enemy = enemiesList[i]
        console.log(`|  ${enemyNum}. ${enemy.name} (Дистанция: ${enemy.distance})`)
    }
    enemyNum = 0
    const action = readlineSync.question('|  Action: ')
    const numAction = parseInt(action)
    if (0 < numAction && numAction <= enemiesList.length) {
        targetEnemyIndex = numAction - 1
    } else if (numAction === 6) {
        return playerAttack()
    } else {
        console.log("|  Некорректный ввод, введите число из списка.                                                                                   |")
        return attack(weapon)
    }

    let attackResult = 0
    let damageResult = 0
    
    // определение свойств оружия (для обычного и магического оружия)
    let weaponStats = weapon
    let weaponDamage = weapon.damage || 0
    let weaponProperty = weapon.property || []
    
    // если оружие имеет stats (магическое оружие)
    if (weapon.stats) {
        weaponStats = weapon.stats
        weaponDamage = weaponStats.damage || 0
        weaponProperty = weaponStats.property || []
    }
    
    // расчёт атаки и урона в зависимости от класса оружия
    switch(weapon.class) {
        case 'Оружие': 
            if (enemiesList[targetEnemyIndex].distance > 1 && (!weaponProperty.includes('Досягаемость') || enemiesList[targetEnemyIndex].distance > 2)) {
                console.log("| Вы махаете оружием в воздухе... похоже вы не по кому не попали.")
                return enemiesTurn()
            } else {
                if (weaponProperty.includes('Легкое')) {
                    damageResult += weaponDamage * player.timeEffects.timeDiceX + player.timeEffects.timeDamage
                }
                if (weaponProperty.includes('Фехтовальное')) {
                    damageResult += weaponDamage * player.timeEffects.timeDiceX + player.timeEffects.timeDamage + player.characteristic.dexterity + player.timeEffects.timeDexterity
                    attackResult += diceRandomizer(20) + player.timeEffects.timeAttack + player.characteristic.dexterity
                } else {
                    damageResult += weaponDamage * player.timeEffects.timeDiceX + player.timeEffects.timeDamage + player.characteristic.strenght + player.timeEffects.timeStrenght
                    attackResult += diceRandomizer(20) + player.timeEffects.timeAttack + player.characteristic.strenght
                }
            }
            break
        
        case 'Дальнобойное оружие':
            if (enemiesList[targetEnemyIndex].distance === 1) {
                console.log("|  Вы попытались выстрелить во врага перед собой и промахнулись, может если отойти от него результат будет лучше?                |")
                return enemiesTurn()
            } else {
                if (weaponProperty.includes('Легкое')) {
                    damageResult += weaponDamage * player.timeEffects.timeDiceX + player.timeEffects.timeDamage + player.characteristic.dexterity
                }
                damageResult += weaponDamage * player.timeEffects.timeDiceX + player.timeEffects.timeDamage + player.characteristic.dexterity + player.timeEffects.timeDexterity
                attackResult += diceRandomizer(20) + player.timeEffects.timeAttack + player.characteristic.dexterity  
            }
            break

        case 'Вампирское':
            const vampWeaponStats = weapon.stats || weapon
            const vampWeaponDamage = vampWeaponStats.damage || 0
            const vampWeaponProperty = vampWeaponStats.property || []
            
            if (vampWeaponStats.class === 'Оружие') {
                if (enemiesList[targetEnemyIndex].distance > 1 && (!vampWeaponProperty.includes('Досягаемость') || enemiesList[targetEnemyIndex].distance > 2)) {
                    console.log("| Вы махаете оружием в воздухе... похоже вы не по кому не попали.")
                    return enemiesTurn()
                } else {
                    if (vampWeaponProperty.includes('Легкое')) {
                        damageResult += vampWeaponDamage * player.timeEffects.timeDiceX + player.timeEffects.timeDamage
                        player.stats.hits += weapon.effect
                        if (player.stats.hits > player.stats.max_hits) {
                            player.stats.hits = player.stats.max_hits
                        }
                    }
                    if (vampWeaponProperty.includes('Фехтовальное')) {
                        damageResult += vampWeaponDamage * player.timeEffects.timeDiceX + player.timeEffects.timeDamage + player.characteristic.dexterity + player.timeEffects.timeDexterity
                        player.stats.hits += weapon.effect
                        if (player.stats.hits > player.stats.max_hits) {
                            player.stats.hits = player.stats.max_hits
                        }
                        attackResult += diceRandomizer(20) + player.timeEffects.timeAttack + player.characteristic.dexterity
                    } else {
                        damageResult += vampWeaponDamage * player.timeEffects.timeDiceX + player.timeEffects.timeDamage + player.characteristic.strenght + player.timeEffects.timeStrenght
                        player.stats.hits += weapon.effect
                        if (player.stats.hits > player.stats.max_hits) {
                            player.stats.hits = player.stats.max_hits
                        }
                        attackResult += diceRandomizer(20) + player.timeEffects.timeAttack + player.characteristic.strenght
                    }
                }
            } else if (vampWeaponStats.class === 'Дальнобойное оружие') {
                if (enemiesList[targetEnemyIndex].distance === 1) {
                    console.log("|  Вы попытались выстрелить во врага перед собой и промахнулись, может если отойти от него результат будет лучше?                |")
                    return enemiesTurn()
                } else {
                    if (vampWeaponProperty.includes('Легкое')) {
                        damageResult += vampWeaponDamage * player.timeEffects.timeDiceX + player.timeEffects.timeDamage + player.characteristic.dexterity
                        player.stats.hits += weapon.effect
                        if (player.stats.hits > player.stats.max_hits) {
                            player.stats.hits = player.stats.max_hits
                        }
                    }
                    damageResult += vampWeaponDamage * player.timeEffects.timeDiceX + player.timeEffects.timeDamage + player.characteristic.dexterity + player.timeEffects.timeDexterity
                    player.stats.hits += weapon.effect
                    if (player.stats.hits > player.stats.max_hits) {
                        player.stats.hits = player.stats.max_hits
                    }
                    attackResult += diceRandomizer(20) + player.timeEffects.timeAttack + player.characteristic.dexterity    
                }
            }
            break
            
        case 'Огненное':
            const fireWeaponStats = weapon.stats || weapon
            const fireWeaponDamage = fireWeaponStats.damage || 0
            const fireWeaponProperty = fireWeaponStats.property || []
            
            if (fireWeaponStats.class === 'Оружие') {
                if (enemiesList[targetEnemyIndex].distance > 1 && (!fireWeaponProperty.includes('Досягаемость') || enemiesList[targetEnemyIndex].distance > 2)) {
                    console.log("|  Вы махаете оружием в воздухе... похоже вы не по кому не попали.")
                    return enemiesTurn()
                } else {
                    if (fireWeaponProperty.includes('Легкое')) {
                        damageResult += fireWeaponDamage * player.timeEffects.timeDiceX + player.timeEffects.timeDamage
                        enemiesList[targetEnemyIndex].timeEffects.fire += weapon.effect
                        enemiesList[targetEnemyIndex].timeEffects.time += weapon.time
                    }
                    if (fireWeaponProperty.includes('Фехтовальное')) {
                        damageResult += fireWeaponDamage * player.timeEffects.timeDiceX + player.timeEffects.timeDamage + player.characteristic.dexterity + player.timeEffects.timeDexterity
                        enemiesList[targetEnemyIndex].timeEffects.fire += weapon.effect
                        enemiesList[targetEnemyIndex].timeEffects.time += weapon.time
                        attackResult += diceRandomizer(20) + player.timeEffects.timeAttack + player.characteristic.dexterity
                    } else {
                        damageResult += fireWeaponDamage * player.timeEffects.timeDiceX + player.timeEffects.timeDamage + player.characteristic.strenght + player.timeEffects.timeStrenght
                        enemiesList[targetEnemyIndex].timeEffects.fire += weapon.effect
                        enemiesList[targetEnemyIndex].timeEffects.time += weapon.time
                        attackResult += diceRandomizer(20) + player.timeEffects.timeAttack + player.characteristic.strenght
                    }
                }
            } else if (fireWeaponStats.class === 'Дальнобойное оружие') {
                if (enemiesList[targetEnemyIndex].distance === 1) {
                    console.log("|  Вы попытались выстрелить во врага перед собой и промахнулись, может если отойти от него результат будет лучше?                |")
                    return enemiesTurn()
                } else {
                    if (fireWeaponProperty.includes('Легкое')) {
                        damageResult += fireWeaponDamage * player.timeEffects.timeDiceX + player.timeEffects.timeDamage + player.characteristic.dexterity
                        enemiesList[targetEnemyIndex].timeEffects.fire += weapon.effect
                        enemiesList[targetEnemyIndex].timeEffects.time += weapon.time
                    }
                    damageResult += fireWeaponDamage * player.timeEffects.timeDiceX + player.timeEffects.timeDamage + player.characteristic.dexterity + player.timeEffects.timeDexterity
                    enemiesList[targetEnemyIndex].timeEffects.fire += weapon.effect
                    enemiesList[targetEnemyIndex].timeEffects.time += weapon.time
                    attackResult += diceRandomizer(20) + player.timeEffects.timeAttack + player.characteristic.dexterity    
                }
            }
            break

        case 'Отравленное':
            const poisonWeaponStats = weapon.stats || weapon
            const poisonWeaponDamage = poisonWeaponStats.damage || 0
            const poisonWeaponProperty = poisonWeaponStats.property || []
            
            if (poisonWeaponStats.class === 'Оружие') {
                if (enemiesList[targetEnemyIndex].distance > 1 && (!poisonWeaponProperty.includes('Досягаемость') || enemiesList[targetEnemyIndex].distance > 2)) {
                    console.log("|  Вы махаете оружием в воздухе... похоже вы не по кому не попали.")
                    return enemiesTurn()
                } else {
                    if (poisonWeaponProperty.includes('Легкое')) {
                        damageResult += poisonWeaponDamage * player.timeEffects.timeDiceX + player.timeEffects.timeDamage
                        enemiesList[targetEnemyIndex].timeEffects.acid += weapon.effect
                    }
                    if (poisonWeaponProperty.includes('Фехтовальное')) {
                        damageResult += poisonWeaponDamage * player.timeEffects.timeDiceX + player.timeEffects.timeDamage + player.characteristic.dexterity + player.timeEffects.timeDexterity
                        enemiesList[targetEnemyIndex].timeEffects.acid += weapon.effect
                        attackResult += diceRandomizer(20) + player.timeEffects.timeAttack + player.characteristic.dexterity
                    } else {
                        damageResult += poisonWeaponDamage * player.timeEffects.timeDiceX + player.timeEffects.timeDamage + player.characteristic.strenght + player.timeEffects.timeStrenght
                        enemiesList[targetEnemyIndex].timeEffects.acid += weapon.effect
                        attackResult += diceRandomizer(20) + player.timeEffects.timeAttack + player.characteristic.strenght
                    }
                }
            } else if (poisonWeaponStats.class === 'Дальнобойное оружие') {
                if (enemiesList[targetEnemyIndex].distance === 1) {
                    console.log("|  Вы попытались выстрелить во врага перед собой и промахнулись, может если отойти от него результат будет лучше?                |")
                    return enemiesTurn()
                } else {
                    if (poisonWeaponProperty.includes('Легкое')) {
                        damageResult += poisonWeaponDamage * player.timeEffects.timeDiceX + player.timeEffects.timeDamage + player.characteristic.dexterity
                        enemiesList[targetEnemyIndex].timeEffects.acid += weapon.effect
                    }
                    damageResult += poisonWeaponDamage * player.timeEffects.timeDiceX + player.timeEffects.timeDamage + player.characteristic.dexterity + player.timeEffects.timeDexterity
                    enemiesList[targetEnemyIndex].timeEffects.acid += weapon.effect
                    attackResult += diceRandomizer(20) + player.timeEffects.timeAttack + player.characteristic.dexterity    
                }
            }
            break
        
        case 'Тактическое':
            const tacticWeaponStats = weapon.stats || weapon
            const tacticWeaponDamage = tacticWeaponStats.damage || 0
            const tacticWeaponProperty = tacticWeaponStats.property || []
            
            if (tacticWeaponStats.class === 'Оружие') {
                if (enemiesList[targetEnemyIndex].distance > 1 && (!tacticWeaponProperty.includes('Досягаемость') || enemiesList[targetEnemyIndex].distance > 2)) {
                    console.log("|  Вы махаете оружием в воздухе... похоже вы не по кому не попали.")
                    return enemiesTurn()
                } else {
                    if (tacticWeaponProperty.includes('Легкое')) {
                        damageResult += tacticWeaponDamage * player.timeEffects.timeDiceX + player.timeEffects.timeDamage
                        player.timeEffects.timeSpeed += weapon.effect
                    }
                    if (tacticWeaponProperty.includes('Фехтовальное')) {
                        damageResult += tacticWeaponDamage * player.timeEffects.timeDiceX + player.timeEffects.timeDamage + player.characteristic.dexterity + player.timeEffects.timeDexterity
                        player.timeEffects.timeSpeed += weapon.effect
                        attackResult += diceRandomizer(20) + player.timeEffects.timeAttack + player.characteristic.dexterity
                    } else {
                        damageResult += tacticWeaponDamage * player.timeEffects.timeDiceX + player.timeEffects.timeDamage + player.characteristic.strenght + player.timeEffects.timeStrenght
                        player.timeEffects.timeSpeed += weapon.effect
                        attackResult += diceRandomizer(20) + player.timeEffects.timeAttack + player.characteristic.strenght
                    }
                }
            } else if (tacticWeaponStats.class === 'Дальнобойное оружие') {
                if (enemiesList[targetEnemyIndex].distance === 1) {
                    console.log("|  Вы попытались выстрелить во врага перед собой и промахнулись, может если отойти от него результат будет лучше?                |")
                    return enemiesTurn()
                } else {
                    if (tacticWeaponProperty.includes('Легкое')) {
                        damageResult += tacticWeaponDamage * player.timeEffects.timeDiceX + player.timeEffects.timeDamage + player.characteristic.dexterity
                        player.timeEffects.timeSpeed += weapon.effect
                    }
                    damageResult += tacticWeaponDamage * player.timeEffects.timeDiceX + player.timeEffects.timeDamage + player.characteristic.dexterity + player.timeEffects.timeDexterity
                    player.timeEffects.timeSpeed += weapon.effect
                    attackResult += diceRandomizer(20) + player.timeEffects.timeAttack + player.characteristic.dexterity    
                }
            }
            break

        case 'Магический посох':
            console.log("|  Выберете заклинание для каста (Для выхода введите 1).                                                                         |")
            console.log(`|  Заряд посоха: ${weapon.charge}.                                                                                                              |`)
            console.log("|                                                                                                                                |")
            let spellNum = 1
            for (let i = 0; i < weapon.spalls.length; i += 1) {
                spellNum += 1
                const spell = weapon.spalls[i]
                console.log(`|  ${spellNum}. ${spell.name} (Цена использования: ${spell.price} заряда)(Описание: ${spell.explanation})`)
            }
            spellNum = 1
            const spellAction = readlineSync.question('|  Action: ')
            const numSpellAction = parseInt(spellAction)
            if (1 < numSpellAction && numSpellAction <= weapon.spalls.length + 1) {
                const spelll = weapon.spalls[numSpellAction - 2]
                if (spelll.price > weapon.charge) {
                    console.log("|  У вас недостаточно заряда на посохе                                                                                           |")
                    return attack(weapon)
                }
                switch(weapon.spalls[numSpellAction - 2].class) {
                    case 'Атакующее заклинание':
                        attackResult += diceRandomizer(20) + player.timeEffects.timeAttack + weapon.baseCharacteristic + player.timeEffects.timeIntelligence
                        damageResult += spelll.effect * player.timeEffects.timeDiceX + player.timeEffects.timeDamage + weapon.baseCharacteristic + player.timeEffects.timeIntelligence
                        weapon.charge -= spelll.price
                        break
                    case 'Заклинание характеристик':
                        if (spelll.target === 'ac') {
                            player.timeEffects.timeAc += spelll.effect
                        } else if (spelll.target === 'hits') {
                            player.stats.hits += spelll.effect + weapon.baseCharacteristic + player.timeEffects.timeCharisma
                            if (player.stats.hits > player.stats.max_hits) {
                                player.stats.hits = player.stats.max_hits
                            }
                        } else if (spelll.target === 'time_hits') {
                            player.stats.time_hits += spelll.effect + weapon.baseCharacteristic + player.timeEffects.timeCharisma
                        } else if (spelll.target === 'speed') {
                            player.stats.speed += spelll.effect
                        } else if (spelll.target === 'strength') {
                            player.timeEffects.timeStrenght += spelll.effect
                        } else if (spelll.target === 'dexterity') {
                            player.timeEffects.timeDexterity += spelll.effect
                        } else if (spelll.target === 'physique') {
                            player.timeEffects.timePhysique += spelll.effect
                        } else if (spelll.target === 'intelligence') {
                            player.timeEffects.timeIntelligence += spelll.effect
                        } else if (spelll.target === 'wisdom') {
                            player.timeEffects.timeWisdom += spelll.effect
                        } else if (spelll.target === 'charisma') {
                            player.timeEffects.timeCharisma += spelll.effect
                        }
                        break
                    case 'Огненное заклинание':
                        enemiesList[targetEnemyIndex].timeEffects.fire += spelll.effect
                        enemiesList[targetEnemyIndex].timeEffects.time += spelll.time
                        break
                    case 'Вампирское заклинание':
                        damageResult += spelll.effect * player.timeEffects.timeDiceX + player.timeEffects.timeDamage + weapon.baseCharacteristic + player.timeEffects.timeCharisma
                        player.stats.hits += weapon.effect + weapon.baseCharacteristic + player.timeEffects.timeCharisma
                        if (player.stats.hits > player.stats.max_hits) {
                            player.stats.hits = player.stats.max_hits
                        }
                        attackResult += diceRandomizer(20) + player.timeEffects.timeAttack + player.characteristic.dexterity
                        break
                    case 'Токсичное заклинание':
                        damageResult += spelll.effect * player.timeEffects.timeDiceX + player.timeEffects.timeDamage + weapon.baseCharacteristic + player.timeEffects.timeWisdom
                        enemiesList[targetEnemyIndex].timeEffects.acid += spelll.effect
                        attackResult += diceRandomizer(20) + player.timeEffects.timeAttack + player.characteristic.dexterity
                        break
                    case 'Заклинание активатор':
                        if (spelll.target === 'resistance') {
                            player.otherTimeEffects.resistance = true
                        } else if (spelll.target === 'invulnerability') {
                            player.otherTimeEffects.invulnerability = true
                        }
                        break
                    case 'Заклинание атаки':
                        if (spelll.target === 'timeAttack') {
                            player.timeEffects.timeAttack = spelll.effect
                        } else if (spelll.target === 'timeDamage') {
                            player.timeEffects.timeDamage = spelll.effect
                        } else if (spelll.target === 'timeDiceX') {
                            player.timeEffects.timeDiceX = spelll.effect
                        }
                        break
                }
            } else if (numSpellAction === 1) {
                return attack(weapon)
            } else {
                console.log("|  Некорректный ввод, введите число из списка.                                                                                   |")
                return attack(weapon)
            }
            break
    }
    
    // проверка попадания и нанесение урона
    if (attackResult >= enemiesList[targetEnemyIndex].ac) {
        enemiesList[targetEnemyIndex].hits -= damageResult
        if (enemiesList[targetEnemyIndex].hits <= 0) {
            enemiesList.splice(targetEnemyIndex, 1)
            console.log("|  Цель побежденна!                                                                                                              |")
        }
    } else {
        console.log('|  Вы не сумели нанести урон цели.                                                                                               |')
    }
    return enemiesTurn()
}

// использование предметов в бою
const itemsUse = () => {
    if (player.inventory.storageItemsStats.length === 0) {
        console.log("|  У вас нет вещей в инвентаре.                                                                                   |")
        return playerTurn()
    }
    console.log("|  Список ваших вещей:                                                                                                           |")
    let orderNum = 0
    let prices = []
    for (let i = 0; i < player.inventory.storageItemsStats.length; i += 1) {
        const item = player.inventory.storageItemsStats[i]
        orderNum += 1
        console.log(`|  ${orderNum}. ${item.name} (Описание: ${item.explanation || 'нет описания'})`)
        prices.push({ price: item.price, index: i })
    }
    console.log("|  Введите номер вещи, которую вы хотите использовать. Для выхода введите 0.                                                     |")
    const action = readlineSync.question('|  Action: ')
    const numAction = parseInt(action)
    
    if (numAction >= 1 && numAction <= prices.length) {
        const item = player.inventory.storageItemsStats[numAction - 1]
        switch(item.class) {
            case 'Зелье характеристик':
                switch(item.target) {
                    case 'hits':
                        player.stats.hits += item.effect
                        if (player.stats.hits > player.stats.max_hits) {
                            player.stats.hits = player.stats.max_hits
                        }
                        break
                    case 'time_hits':
                        player.stats.time_hits += item.effect
                        break
                    case 'ac':
                        player.timeEffects.timeAc += item.effect
                        break
                    case 'strengh':
                        player.timeEffects.timeStrenght += item.effect
                        break
                    case 'dexterity':
                        player.timeEffects.timeDexterity += item.effect
                        break
                    case 'physique':
                        player.timeEffects.timePhysique += item.effect
                        break
                    case 'intelligence':
                        player.timeEffects.timeIntelligence += item.effect
                        break
                    case 'wisdom':
                        player.timeEffects.timeWisdom += item.effect
                        break
                    case 'charisma':
                        player.timeEffects.timeCharisma += item.effect
                        break
                }
                player.inventory.storageItemsStats.splice(numAction - 1, 1)
                break
            case 'Мега зелье':
                player.timeEffects = Object.fromEntries(Object.keys(player.timeEffects).map(i => [i, player.timeEffects[i] + item.effect]))
                player.inventory.storageItemsStats.splice(numAction - 1, 1)
                break
            case 'Зелье активатор':
                switch(item.target) {
                    case 'resistance':
                        player.otherTimeEffects.resistance = true
                        break
                    case 'invulnerability':
                        player.otherTimeEffects.invulnerability = true
                        break
                    case 'spikes':
                        player.otherTimeEffects.spikes = true
                        break
                    case 'fireAttack':
                        player.otherTimeEffects.fireAttack = true
                        break
                }
                player.inventory.storageItemsStats.splice(numAction - 1, 1)
                break
            case 'Пиво':
                console.log("|  Выберете врага для нанесения урона (Введите 0 чтобы вернуться):                                                              |")
                console.log("|                                                                                                                                |")
                let enemyNum = 0
                for (let i = 0; i < enemiesList.length; i += 1) {
                    enemyNum += 1
                    const enemy = enemiesList[i]
                    console.log(`|  ${enemyNum}. ${enemy.name}`)
                }
                enemyNum = 0
                const beerAction = readlineSync.question('|  Action: ')
                const numBeerAction = parseInt(beerAction)
                if (numBeerAction >= 1 && numBeerAction <= enemiesList.length) {
                    const targetEnemyIndex = numBeerAction - 1
                    enemiesList[targetEnemyIndex].hits -= item.effect
                    if (enemiesList[targetEnemyIndex].hits <= 0) {
                        enemiesList.splice(targetEnemyIndex, 1)
                    }
                    player.inventory.storageItemsStats.splice(numAction - 1, 1)
                } else if (numBeerAction === 0) {
                    return itemsUse()
                } else {
                    console.log("|  Некорректный ввод, введите число из списка.                                                                                   |")
                    return itemsUse()
                }
                break
            default:
                console.log('|  Вы не можете использовать это во время битвы.                                                                                 |')
                return playerTurn()
        }
        return enemiesTurn()
    } else if (numAction === 0) {
        return playerTurn()
    } else {
        console.log("|  Некорректный ввод, введите число из списка.                                                                                   |")
        return itemsUse()
    }
}

// попытка скрыться
const stealthTry = () => {
    if (player.stats.stealth === true) {
        const stealthDice = diceRandomizer(20) + player.characteristic.dexterity + player.timeEffects.timeDexterity
        if (stealthDice >= 18 + enemiesList.length) {
            console.log("|  Вам удалось скрыться!                                                                                                           |")
            return final('Скрылся')
        } else {
            console.log("|  У вас не получилось скрыться!                                                                                                     |")
            return enemiesTurn()
        }
    } else {
        console.log('|  Пытаясь скрыться вы издали много шума, похоже ваши доспехи слишком шумные для побега.                                         |')
        return enemiesTurn()
    }
}

// движение в бою
const move = () => {
    console.log("|  В какое направление двигаться?                                                                                                |")
    console.log("|                                                                                                                                |")
    console.log("|  1. Вперед                                                                                                                     |")
    console.log("|  2. Назад                                                                                                                      |")
    console.log("|  3. Вернуться                                                                                                                  |")
    console.log("|                                                                                                                                |")
    let action = readlineSync.question('|  Action: ')
    switch(action) {
        case "1":
            let movePossibility = false
            for (const i of enemiesList) {
                if (i.distance > 1) {
                    movePossibility = true
                }
            }
            if (movePossibility === true) {
                for (let i = 0; i < enemiesList.length; i++) {
                    let newDistance = enemiesList[i].distance - player.stats.speed - player.timeEffects.timeSpeed
                    if (newDistance < 1) {
                        newDistance = 1
                    }
                    enemiesList[i].distance = newDistance
                }
                console.log("|  Вы двигаетесь вперёд.                                                                                                          |")
                return enemiesTurn()
            } else {
                console.log("|  Вы врезались в противника, он стоит слишком близко чтобы двигаться вперед.                                                     |")
                return enemiesTurn()
            }
        case "2":
            for (let i = 0; i < enemiesList.length; i++) {
                enemiesList[i].distance += player.stats.speed + player.timeEffects.timeSpeed
            }
            console.log("|  Вы отступаете назад.                                                                                                          |")
            return enemiesTurn()
        case "3":
            return playerTurn()
        default:
            console.log("|  Некорректный ввод, введите число из списка.                                                                                   |")
            return move()
    }
}
// ==============================================================================================================================
// ==============================================================================================================================
// ход врагов
const enemiesTurn = () => {
    if (enemiesList.length === 0) {
        return final('Победа')
    }

    for (let i = 0; i < enemiesList.length; i += 1) {
        // применение эффектов к врагам
        enemiesList[i].hits -= enemiesList[i].timeEffects.acid
        enemiesList[i].hits -= enemiesList[i].timeEffects.fire
        enemiesList[i].timeEffects.time -= 1
        if (enemiesList[i].timeEffects.time <= 0) {
            enemiesList[i].timeEffects.fire = 0
            enemiesList[i].timeEffects.acid = 0
        }
        
        if (player.otherTimeEffects.fireAttack) {
            enemiesList[i].hits -= player.characteristic.intelligence + player.timeEffects.timeIntelligence
        }

        // проверка смерти врага от эффектов
        if (enemiesList[i].hits <= 0) {
            console.log(`|  ${enemiesList[i].name} погиб из-за эффектов.`)
            enemiesList.splice(i, 1)
            i--
            continue
        }
        
        if (enemiesList.length === 0) {
            return final('Победа')
        }
        if (i >= enemiesList.length) {
            break
        }
        
        const enemyAction = diceRandomizer(2)
    
        // функция атаки врага
        const enemyAttackFunc = () => {
            let attackResult = 0
            let damageResult = 0
            
            // фильтрация атаки, исключая свойства типа multiAttack
            const attackList = Object.values(enemiesList[i].attack).filter(attack => {
                return attack && typeof attack === 'object' && attack.class
            })
            
            if (attackList.length === 0) {
                return
            }
            
            const attackWay = diceRandomizer(attackList.length)
            const selectedAttack = attackList[attackWay - 1]
            
            switch(selectedAttack.class) {
                case 'Дальний':
                    if (enemiesList[i].distance === 1) {
                        return enemyMoveFunc("back")
                    }
                    attackResult += diceRandomizer(20) + (selectedAttack.attack || 0)
                    damageResult += selectedAttack.damage || 0
                    break
                case 'Ближний':
                    if (enemiesList[i].distance !== 1) {
                        return enemyMoveFunc("go")
                    }
                    attackResult += diceRandomizer(20) + (selectedAttack.attack || 0)
                    damageResult += selectedAttack.damage || 0
                    break
                case 'Заклинание характеристик':
                    const spellCharacteristic = selectedAttack.SpellEffect
                    if (spellCharacteristic && spellCharacteristic.target) {
                        switch(spellCharacteristic.target) {
                            case 'speed':
                                enemiesList[i].speed += spellCharacteristic.effect || 0
                                break
                            case 'ac':
                                enemiesList[i].ac += spellCharacteristic.effect || 0
                                break
                        }
                    }
                    return
            }

            // проверка наличия эффекта у атаки
            if (selectedAttack.effect && typeof selectedAttack.effect === 'object') {
                switch(selectedAttack.effect.class) {
                    case 'Отравление':
                        player.otherTimeEffects.acid += selectedAttack.effect.subEffect || 0
                        break
                    case 'Снижение скорости':
                        player.timeEffects.timeSpeed -= selectedAttack.effect.subEffect || 0
                        if (player.timeEffects.timeSpeed < player.stats.speed - (player.stats.speed * 2)) {
                            player.timeEffects.timeSpeed = player.stats.speed - (player.stats.speed * 2)
                        }
                        break
                    case 'Возгарание':
                        player.otherTimeEffects.fire += diceRandomizer(6, 2)
                        player.otherTimeEffects.time += selectedAttack.effect.time || 0
                        break
                }
            }

            // проверка попадания
            if (attackResult > player.stats.ac && player.otherTimeEffects.invulnerability === false) {
                
                if (player.otherTimeEffects.resistance) {
                    player.stats.hits -= Math.floor(damageResult / 2) 
                } else {
                    player.stats.hits -= damageResult
                }
                
                if (player.otherTimeEffects.spikes) {
                    enemiesList[i].hits -= Math.floor(damageResult / 3)
                    if (enemiesList[i].hits <= 0) {
                        console.log(`|  ${enemiesList[i].name} погиб из-за шипов.`)
                        enemiesList.splice(i, 1)
                        i--
                        return 'enemy_died'
                    }
                }
                
                if (player.otherTimeEffects.acid > 0 && (player.characteristic.physique + 9 > diceRandomizer(20))) {
                    player.otherTimeEffects.acid = 0
                } else if (player.otherTimeEffects.acid > 0) {
                    console.log(`|  Вы отравлены, хиты будут отниматься до конца боя!`)
                }
                
                if (player.otherTimeEffects.fire > 0) {
                    console.log(`|  Вы горите, хиты будут отниматься определенное время!`)
                }
                
                console.log(`|  ${enemiesList[i].name} успешно нанес вам урон ${selectedAttack.name}!`)
            } else if (selectedAttack.class !== 'Заклинание характеристик') {
                console.log(`|  ${enemiesList[i].name} не смог нанести вам урон ${selectedAttack.name}!`)
            }

            // проверка смерти игрока
            if (player.stats.hits <= 0) {
                console.log("|  Этот удар был последним... Вы умерли.")
                return 'player_dead'
            }
            return
        }

        // функция движения врага
        const enemyMoveFunc = (request = 'stand') => {
            if (!enemiesList[i]) {
                return
            }
            
            switch(request) {
                case 'stand':
                    if (enemiesList[i].distance === 1) {
                        return enemyAttackFunc()
                    } else {
                        enemiesList[i].distance -= enemiesList[i].speed
                        if (enemiesList[i].distance < 1) {
                            enemiesList[i].distance = 1
                        }
                    }
                    break
                case 'go':
                    enemiesList[i].distance -= enemiesList[i].speed
                    if (enemiesList[i].distance < 1) {
                        enemiesList[i].distance = 1
                    }
                    break
                case 'back':
                    enemiesList[i].distance += enemiesList[i].speed
                    break
            }
            return
        }
        
        // выполнение действия врага
        let attackResult = null
        if (enemyAction === 1) {
            attackResult = enemyAttackFunc()
            
            // проверка смерти игрока
            if (attackResult === 'player_dead') {
                return final('Поражение')
            }
            
            // если враг умер во время атаки
            if (attackResult === 'enemy_died') {
                i--
                continue
            }
        } else {
            enemyMoveFunc()
        }
        
        // повторная проверка смерти игрока
        if (player.stats.hits <= 0) {
            return final('Поражение')
        }
    }
    return playerTurn()
}

// завершение битвы
const final = (result) => {
    switch(result) {
        case 'Поражение':
            console.log('|  Игра окончена.')
            return 'Поражение'
        case 'Победа':
            resetTimeEffects()
            console.log('|  Битва окончена.')
            return 'Победа'
        case 'Скрылся':
            resetTimeEffects()
            console.log('|  Вы скрылись.')
            return 'Скрылся'
    }
}

// функция сброса временных эффектов
const resetTimeEffects = () => {
    // сброс timeEffects
    player.timeEffects = {
        timeStrenght: 0,
        timeDexterity: 0,
        timePhysique: 0,
        timeIntelligence: 0,
        timeWisdom: 0,
        timeCharisma: 0,
        timeSpeed: 0,
        timeAc: 0,
        timeAttack: 0,
        timeDamage: 0,
        timeDiceX: 1
    }
    
    // сброс otherTimeEffects
    player.otherTimeEffects = {
        resistance: false,
        invulnerability: false,
        spikes: false,
        fireAttack: false,
        time: 0,
        fire: 0,
        acid: 0
    }
}