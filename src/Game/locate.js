import { addHistory } from './history.js'
import { diceRandomizer } from '../diceRandomizer.js'
import { enemies } from './enemy.js'
import { battleBegin } from './battle.js'
import { player } from './player.js'
import { 
    storeLight1, storeLight2, storeLight3,
    storeMedium1, storeMedium2, storeMedium3,
    storeHard1, storeHard2, storeHard3 
} from './store.js'
import { arms } from '../items/arms.js'
import { armors } from '../items/armor.js'
import { magicWeapon, magicArmor, magicstaffs, artifacts, potions } from '../items/magicItems.js'
import readlineSync from 'readline-sync'

const allItems = {
    ...arms.simpleHandWeapons,
    ...arms.simpleRangeWeapon,
    ...arms.militaryHandWeapons,
    ...arms.militaryRangeWeapon,
    ...armors.lightArmor,
    ...armors.mediumArmor,
    ...armors.heavyArmor,
    shield: armors.shield,
    ...magicWeapon,
    ...magicArmor,
    ...magicstaffs,
    ...artifacts,
    ...potions
}

const getRandomItemByRarity = (itemList, onlyFromList = null) => {
    const pool = []
    const itemsToUse = onlyFromList ? onlyFromList : Object.values(itemList)
    
    for (const item of itemsToUse) {
        if (item.rerity && item.rerity > 0) {
            for (let i = 0; i < item.rerity; i++) {
                pool.push(item)
            }
        }
    }
    
    if (pool.length === 0) {
        return null
    }
    const randomIndex = Math.floor(Math.random() * pool.length)
    return { ...pool[randomIndex] }
}

const battleLootItems = [
    ...Object.values(arms.simpleHandWeapons),
    ...Object.values(arms.simpleRangeWeapon),
    ...Object.values(potions).filter(p => p.price <= 100),
    artifacts.amuletHits,
    artifacts.stylusDexterity,
    artifacts.stonePhysique,
    artifacts.bookmarkIntelligence,
    artifacts.lensWisdom,
    artifacts.flowerCharisma
].filter(item => item && item.rerity)

const treasureItems = [
    ...Object.values(arms.militaryHandWeapons),
    ...Object.values(arms.militaryRangeWeapon),
    ...Object.values(armors.mediumArmor),
    ...Object.values(armors.heavyArmor),
    ...Object.values(magicWeapon).filter(mw => mw.rerity >= 3),
    ...Object.values(magicArmor).filter(ma => ma.rerity >= 3),
    ...Object.values(magicstaffs).filter(ms => ms.rerity >= 3),
    ...Object.values(artifacts).filter(a => a.rerity >= 5),
    ...Object.values(potions).filter(p => p.price > 100 && p.price <= 500)
].filter(item => item && item.rerity)

const exclusiveTreasureItems = [
    magicWeapon.lifeStealerTwoHandedSword,
    magicWeapon.bloodTwoHandedSword,
    magicWeapon.sizzlingLongBow,
    magicWeapon.acidicHalberd,
    magicstaffs.higherMagicStaff,
    magicstaffs.higherFireStaff,
    magicstaffs.higherVampirStaff,
    magicArmor.strenghtPlateArmor,
    magicArmor.stealthPlateArmor,
    artifacts.ultraGem,
    potions.invulnerabilityPotion,
    potions.pmegaPotion
].filter(item => item && item.rerity)

const eventItems = [
    ...Object.values(potions).filter(p => p.price <= 200),
    artifacts.tacticCrystal,
    artifacts.protectionRing,
    magicWeapon.sparklingLightHammer,
    magicWeapon.poisonedSling,
    magicWeapon.vampirKnife
].filter(item => item && item.rerity)

export const locations = {
    catacombs: {
        name: 'Верховные катакомбы',
        difficulty: 'easy',
        events: [
            { type: 'battle', name: 'Схватка с крысами', enemies: [enemies[0], enemies[0]] },
            { type: 'battle', name: 'Ядовитая многоножка', enemies: [enemies[2]] },
            { type: 'battle', name: 'Разбойники', enemies: [enemies[5]] },
            { type: 'battle', name: 'Гигантский паук', enemies: [enemies[3]] },
            { type: 'battle', name: 'Крысиный король', enemies: [enemies[0], enemies[0], enemies[1]] },
            
            { type: 'shop', name: 'Торговец-призрак', shop: storeLight1 },
            { type: 'shop', name: 'Слепой алхимик', shop: storeLight2 },
            { type: 'shop', name: 'Голос из стены', shop: storeLight3 },
            
            { type: 'exit', name: 'Спуск в туннели', nextLocation: 'tunnels' },
            { type: 'exit', name: 'Вернуться в катакомбы', nextLocation: 'catacombs' },
            
            { type: 'event', name: 'Заброшенный алтарь', execute: () => {
                console.log('|  Перед вами древний алтарь. Кто-то оставил здесь подношение.')
                console.log('|  1. Взять подношение')
                console.log('|  2. Оставить монету в надежде на благословение')
                console.log('|  3. Пройти мимо')
                
                const choice = readlineSync.question('|  Action: ')
                if (choice === '1') {
                    const coins = diceRandomizer(50, 2)
                    player.inventory.coins += coins
                    console.log(`|  Вы забрали ${coins} монет. Алтарь наполнился тьмой.`)
                } else if (choice === '2') {
                    if (player.inventory.coins >= 30) {
                        player.inventory.coins -= 30
                        player.stats.time_hits += 10
                        console.log('|  Вы оставили 30 монет. Странное тепло разлилось по телу. +10 временных хитов.')
                    } else {
                        console.log('|  У вас недостаточно монет. Алтарь игнорирует вас.')
                    }
                } else {
                    console.log('|  Вы проходите мимо, но чувствуете чей-то взгляд в спину.')
                }
            }},
            { type: 'event', name: 'Родник здоровья', execute: () => {
                console.log('|  Вы нашли источник чистой воды.')
                console.log('|  1. Напиться')
                console.log('|  2. Набрать воду с собой')
                console.log('|  3. Игнорировать')
                
                const choice = readlineSync.question('|  Action: ')
                if (choice === '1') {
                    player.stats.hits = player.stats.max_hits
                    player.stats.time_hits = 0
                    console.log('|  Вы полностью восстановили здоровье.')
                } else if (choice === '2') {
                    console.log('|  Вода испарилась, как только вы коснулись её.')
                } else {
                    console.log('|  Вы проходите мимо, источник тихо журчит в темноте.')
                }
            }},
            { type: 'event', name: 'Старая карта', execute: () => {
                console.log('|  На стене висит древняя карта.')
                console.log('|  1. Изучить карту')
                console.log('|  2. Сорвать карту')
                console.log('|  3. Пройти мимо')
                
                const choice = readlineSync.question('|  Action: ')
                if (choice === '1') {
                    const coins = diceRandomizer(40, 2)
                    player.inventory.coins += coins
                    console.log(`|  В карте был тайник с ${coins} монетами.`)
                } else if (choice === '2') {
                    const damage = diceRandomizer(4, 2)
                    player.stats.hits -= damage
                    console.log(`|  Карта рассыпалась в прах, вы вдохнули пыль. -${damage} здоровья.`)
                    if (player.stats.hits <= 0) {
                        return 'death'
                    }
                } else {
                    console.log('|  Вы проходите мимо, карта шелестит вам вслед.')
                }
            }},
            { type: 'event', name: 'Ловушка', execute: () => {
                console.log('|  Вы слышите щелчок механизма под ногами.')
                console.log('|  1. Прыгнуть вперёд')
                console.log('|  2. Замереть')
                console.log('|  3. Отпрыгнуть назад')
                
                const choice = readlineSync.question('|  Action: ')
                const dice = diceRandomizer(6)
                if (choice === '1') {
                    if (dice > 3) {
                        console.log('|  Вы успешно избежали ловушки.')
                    } else {
                        const damage = diceRandomizer(6, 2)
                        player.stats.hits -= damage
                        console.log(`|  Вы прыгнули прямо в ловушку! -${damage} здоровья.`)
                        if (player.stats.hits <= 0) {
                            return 'death'
                        }
                    }
                } else if (choice === '2') {
                    if (dice > 4) {
                        console.log('|  Ловушка не сработала. Вам повезло.')
                    } else {
                        const damage = diceRandomizer(6)
                        player.stats.hits -= damage
                        console.log(`|  Пол под вами провалился. -${damage} здоровья.`)
                        if (player.stats.hits <= 0) {
                            return 'death'
                        }
                    }
                } else {
                    console.log('|  Вы отступили. Ловушка осталась позади.')
                }
            }},
            { type: 'event', name: 'Странный шёпот', execute: () => {
                console.log('|  Из темноты доносится шёпот, зовущий вас.')
                console.log('|  1. Пойти на голос')
                console.log('|  2. Позвать в ответ')
                console.log('|  3. Игнорировать')
                
                const choice = readlineSync.question('|  Action: ')
                if (choice === '1') {
                    const item = getRandomItemByRarity(null, eventItems)
                    if (item) {
                        console.log(`|  Шёпот привёл вас к ${item.name}.`)
                        player.inventory.storageItemsStats.push(item)
                    } else {
                        console.log('|  Шёпот завёл вас в тупик.')
                    }
                } else if (choice === '2') {
                    console.log('|  Тишина. Слишком громкая тишина.')
                } else {
                    console.log('|  Шёпот стих, но чувство тревоги осталось.')
                }
            }},
            
            { type: 'treasure', name: 'Гробница древнего воина', execute: () => {
                console.log('|  Вы открыли каменный саркофаг.')
                const coins = diceRandomizer(150, 3) + 100
                player.inventory.coins += coins
                console.log(`|  Внутри вы нашли ${coins} монет.`)
                
                const normalItem = getRandomItemByRarity(null, treasureItems)
                if (normalItem) {
                    console.log(`|  Также вы нашли ${normalItem.name}.`)
                    player.inventory.storageItemsStats.push(normalItem)
                }
                
                if (diceRandomizer(100) <= 30) {
                    const rareItem = getRandomItemByRarity(null, exclusiveTreasureItems)
                    if (rareItem) {
                        console.log(`|  В руке скелета зажат ${rareItem.name}.`)
                        player.inventory.storageItemsStats.push(rareItem)
                    }
                }
                return 'continue'
            }}
        ]
    },
    
    tunnels: {
        name: 'Техно-туннели',
        difficulty: 'medium',
        events: [
            { type: 'battle', name: 'Бандитская засада', enemies: [enemies[5], enemies[5]] },
            { type: 'battle', name: 'Берсерк', enemies: [enemies[7]] },
            { type: 'battle', name: 'Ассасин', enemies: [enemies[9]] },
            { type: 'battle', name: 'Отряд модронов', enemies: [enemies[26], enemies[27], enemies[28]] },
            { type: 'battle', name: 'Капитан бандитов', enemies: [enemies[6], enemies[5], enemies[5]] },
            
            { type: 'shop', name: 'Торговый автомат', shop: storeMedium1 },
            { type: 'shop', name: 'Теневой рынок', shop: storeMedium2 },
            { type: 'shop', name: 'Голограмма', shop: storeMedium3 },
            
            { type: 'exit', name: 'Вход в храм', nextLocation: 'temple' },
            { type: 'exit', name: 'Подъём в катакомбы', nextLocation: 'catacombs' },
            
            { type: 'event', name: 'Сломанный терминал', execute: () => {
                console.log('|  Экран терминала мерцает красным.')
                console.log('|  1. Взломать терминал')
                console.log('|  2. Ударить по терминалу')
                console.log('|  3. Пройти мимо')
                
                const choice = readlineSync.question('|  Action: ')
                if (choice === '1') {
                    const dice = diceRandomizer(20)
                    if (dice > 10) {
                        const coins = diceRandomizer(150, 2)
                        player.inventory.coins += coins
                        console.log(`|  Терминал выдал ${coins} монет.`)
                    } else {
                        const damage = diceRandomizer(8, 2)
                        player.stats.hits -= damage
                        console.log(`|  Система безопасности активировалась. -${damage} здоровья.`)
                        if (player.stats.hits <= 0) {
                            return 'death'
                        }
                    }
                } else if (choice === '2') {
                    const damage = diceRandomizer(6, 2)
                    player.stats.hits -= damage
                    console.log(`|  Терминал взорвался. -${damage} здоровья.`)
                    if (player.stats.hits <= 0) {
                        return 'death'
                    }
                } else {
                    console.log('|  Вы проходите мимо, терминал продолжает мерцать.')
                }
            }},
            { type: 'event', name: 'Утечка пара', execute: () => {
                console.log('|  Из труб валит горячий пар.')
                console.log('|  1. Переждать')
                console.log('|  2. Бежать через пар')
                console.log('|  3. Найти обход')
                
                const choice = readlineSync.question('|  Action: ')
                if (choice === '1') {
                    console.log('|  Вы ждёте, пока пар рассеется. Потеряно время, но вы целы.')
                } else if (choice === '2') {
                    const damage = diceRandomizer(12, 2)
                    player.stats.hits -= damage
                    console.log(`|  Пар обжёг вас. -${damage} здоровья.`)
                    if (player.stats.hits <= 0) {
                        return 'death'
                    }
                } else {
                    const dice = diceRandomizer(6)
                    if (dice > 3) {
                        console.log('|  Вы нашли безопасный путь.')
                    } else {
                        const damage = diceRandomizer(8)
                        player.stats.hits -= damage
                        console.log(`|  Обход привёл вас в тупик с ловушкой. -${damage} здоровья.`)
                        if (player.stats.hits <= 0) {
                            return 'death'
                        }
                    }
                }
            }},
            { type: 'event', name: 'Экспериментальная сыворотка', execute: () => {
                console.log('|  На столе стоит колба с мерцающей жидкостью.')
                console.log('|  1. Выпить сыворотку')
                console.log('|  2. Вылить сыворотку')
                console.log('|  3. Забрать с собой')
                
                const choice = readlineSync.question('|  Action: ')
                if (choice === '1') {
                    const dice = diceRandomizer(6)
                    if (dice > 3) {
                        console.log('|  Сыворотка усилила вас. +2 ко всем характеристикам на бой.')
                        player.timeEffects.timeStrenght += 2
                        player.timeEffects.timeDexterity += 2
                        player.timeEffects.timePhysique += 2
                        player.timeEffects.timeIntelligence += 2
                        player.timeEffects.timeWisdom += 2
                        player.timeEffects.timeCharisma += 2
                    } else {
                        console.log('|  Сыворотка отравила вас. -2 ко всем характеристикам на бой.')
                        player.timeEffects.timeStrenght -= 2
                        player.timeEffects.timeDexterity -= 2
                        player.timeEffects.timePhysique -= 2
                        player.timeEffects.timeIntelligence -= 2
                        player.timeEffects.timeWisdom -= 2
                        player.timeEffects.timeCharisma -= 2
                    }
                } else if (choice === '2') {
                    console.log('|  Жидкость зашипела и испарилась.')
                } else {
                    console.log('|  Колба разбилась в вашей сумке.')
                    const damage = diceRandomizer(6)
                    player.stats.hits -= damage
                    console.log(`|  Осколки поранили вас. -${damage} здоровья.`)
                    if (player.stats.hits <= 0) {
                        return 'death'
                    }
                }
            }},
            { type: 'event', name: 'Аварийный протокол', execute: () => {
                console.log('|  Сирена ревёт по всему туннелю.')
                console.log('|  1. Бежать вперёд')
                console.log('|  2. Спрятаться')
                console.log('|  3. Приготовиться к бою')
                
                const choice = readlineSync.question('|  Action: ')
                if (choice === '1') {
                    const dice = diceRandomizer(6)
                    if (dice > 2) {
                        console.log('|  Вы успешно скрылись от опасности.')
                    } else {
                        console.log('|  Дрон перехватил вас.')
                        return { type: 'battle', enemies: [enemies[26], enemies[27]] }
                    }
                } else if (choice === '2') {
                    const dice = diceRandomizer(20)
                    if (dice > 10) {
                        console.log('|  Охрана прошла мимо.')
                    } else {
                        console.log('|  Вас обнаружили.')
                        return { type: 'battle', enemies: [enemies[26], enemies[27], enemies[28]] }
                    }
                } else {
                    console.log('|  Вы готовитесь к бою.')
                    return { type: 'battle', enemies: [enemies[26], enemies[27]] }
                }
            }},
            { type: 'event', name: 'Теневой силуэт', execute: () => {
                console.log('|  В конце коридора мелькнула тень.')
                console.log('|  1. Преследовать тень')
                console.log('|  2. Позвать')
                console.log('|  3. Игнорировать')
                
                const choice = readlineSync.question('|  Action: ')
                if (choice === '1') {
                    const dice = diceRandomizer(6)
                    if (dice > 4) {
                        const coins = diceRandomizer(100, 2)
                        player.inventory.coins += coins
                        console.log(`|  Тень привела вас к тайнику с ${coins} монетами.`)
                    } else if (dice > 2) {
                        console.log('|  Тень завела вас в ловушку.')
                        const damage = diceRandomizer(10, 2)
                        player.stats.hits -= damage
                        if (player.stats.hits <= 0) {
                            return 'death'
                        }
                    } else {
                        console.log('|  Тень обернулась врагом.')
                        return { type: 'battle', enemies: [enemies[9]] }
                    }
                } else if (choice === '2') {
                    console.log('|  Тишина. Тень исчезла.')
                } else {
                    console.log('|  Вы проходите мимо, но чувствуете, что за вами наблюдают.')
                }
            }},
            
            { type: 'treasure', name: 'Секретная лаборатория', execute: () => {
                console.log('|  Вы взломали дверь в секретную комнату.')
                const coins = diceRandomizer(300, 3) + 200
                player.inventory.coins += coins
                console.log(`|  На столах разбросано ${coins} монет.`)
                
                const normalItem = getRandomItemByRarity(null, treasureItems)
                if (normalItem) {
                    console.log(`|  В шкафу вы нашли ${normalItem.name}.`)
                    player.inventory.storageItemsStats.push(normalItem)
                }
                
                if (diceRandomizer(100) <= 40) {
                    const rareItem = getRandomItemByRarity(null, exclusiveTreasureItems)
                    if (rareItem) {
                        console.log(`|  В сейфе лежал ${rareItem.name}.`)
                        player.inventory.storageItemsStats.push(rareItem)
                    }
                }
                return 'continue'
            }}
        ]
    },
    
    temple: {
        name: 'Храм',
        difficulty: 'hard',
        events: [
            { type: 'battle', name: 'Друид', enemies: [enemies[14]] },
            { type: 'battle', name: 'Маг-ученик', enemies: [enemies[15]] },
            { type: 'battle', name: 'Культист смерти', enemies: [enemies[18]] },
            { type: 'battle', name: 'Кристаллический дракон', enemies: [enemies[21]] },
            { type: 'battle', name: 'Железный голем', enemies: [enemies[22]] },
            
            { type: 'shop', name: 'Торговец-скелет', shop: storeHard1 },
            { type: 'shop', name: 'Шепчущий жрец', shop: storeHard2 },
            { type: 'shop', name: 'Пустота', shop: storeHard3 },
            
            { type: 'exit', name: 'Спуск в туннели', nextLocation: 'tunnels' },
            { type: 'exit', name: 'Остаться в храме', nextLocation: 'temple' },
            
            { type: 'event', name: 'Древний свиток', execute: () => {
                console.log('|  На пьедестале лежит светящийся свиток.')
                console.log('|  1. Прочитать свиток')
                console.log('|  2. Сжечь свиток')
                console.log('|  3. Пройти мимо')
                
                const choice = readlineSync.question('|  Action: ')
                if (choice === '1') {
                    const dice = diceRandomizer(20)
                    if (dice > 15) {
                        console.log('|  Свиток даровал вам мудрость. +3 к мудрости на бой.')
                        player.timeEffects.timeWisdom += 3
                    } else if (dice > 8) {
                        console.log('|  Свиток обжёг вам руки. -8 здоровья.')
                        player.stats.hits -= 8
                        if (player.stats.hits <= 0) {
                            return 'death'
                        }
                    } else {
                        console.log('|  Свиток призвал демона.')
                        return { type: 'battle', enemies: [enemies[18], enemies[18]] }
                    }
                } else if (choice === '2') {
                    const damage = diceRandomizer(20, 2)
                    player.stats.hits -= damage
                    console.log(`|  Взрывной волной вас отбросило к стене. -${damage} здоровья.`)
                    if (player.stats.hits <= 0) {
                        return 'death'
                    }
                } else {
                    console.log('|  Вы проходите мимо, но свиток продолжает светиться.')
                }
            }},
            { type: 'event', name: 'Жертвенник', execute: () => {
                console.log('|  Чёрный алтарь ждёт подношений.')
                console.log('|  1. Принести 500 монет')
                console.log('|  2. Принести своё здоровье')
                console.log('|  3. Осквернить алтарь')
                
                const choice = readlineSync.question('|  Action: ')
                if (choice === '1') {
                    if (player.inventory.coins >= 500) {
                        player.inventory.coins -= 500
                        player.stats.time_hits += 20
                        player.otherTimeEffects.resistance = true
                        console.log('|  Алтарь принял жертву. Вы чувствуете защиту.')
                    } else {
                        console.log('|  У вас недостаточно монет. Алтарь требует больше.')
                        const damage = diceRandomizer(15, 2)
                        player.stats.hits -= damage
                        if (player.stats.hits <= 0) {
                            return 'death'
                        }
                    }
                } else if (choice === '2') {
                    const sacrifice = Math.floor(player.stats.hits / 2)
                    player.stats.hits -= sacrifice
                    player.timeEffects.timeStrenght += 5
                    player.timeEffects.timeDexterity += 5
                    console.log(`|  Вы отдали ${sacrifice} здоровья. Алтарь усилил вас.`)
                    if (player.stats.hits <= 0) {
                        return 'death'
                    }
                } else {
                    console.log('|  Алтарь задрожал от ярости.')
                    return { type: 'battle', enemies: [enemies[18], enemies[19]] }
                }
            }},
            { type: 'event', name: 'Глаз хранителя', execute: () => {
                console.log('|  Огромный каменный глаз смотрит на вас.')
                console.log('|  1. Смотреть в ответ')
                console.log('|  2. Закрыть глаза')
                console.log('|  3. Атаковать глаз')
                
                const choice = readlineSync.question('|  Action: ')
                const dice = diceRandomizer(20)
                if (choice === '1') {
                    if (dice > 14) {
                        console.log('|  Глаз моргнул. Вы нашли 200 монет.')
                        player.inventory.coins += 200
                    } else if (dice > 6) {
                        console.log('|  Глаз парализовал вас.')
                        return { type: 'battle', enemies: [enemies[21]] }
                    } else {
                        console.log('|  Глаз испепелил вас.')
                        return 'death'
                    }
                } else if (choice === '2') {
                    if (dice > 8) {
                        console.log('|  Глаз потерял интерес.')
                    } else {
                        console.log('|  Глаз нашёл вас даже со закрытыми глазами.')
                        return { type: 'battle', enemies: [enemies[21]] }
                    }
                } else {
                    if (dice > 12) {
                        console.log('|  Ваша атака разбила глаз. Вы нашли артефакт.')
                        const rareItem = getRandomItemByRarity(null, exclusiveTreasureItems)
                        if (rareItem) {
                            player.inventory.storageItemsStats.push(rareItem)
                        }
                    } else {
                        console.log('|  Глаз разозлился.')
                        return { type: 'battle', enemies: [enemies[21], enemies[22]] }
                    }
                }
            }},
            { type: 'event', name: 'Ловушка-маятник', execute: () => {
                console.log('|  Огромный маятник раскачивается над проходом.')
                console.log('|  1. Бежать под маятником')
                console.log('|  2. Ждать момент')
                console.log('|  3. Искать обход')
                
                const choice = readlineSync.question('|  Action: ')
                const dice = diceRandomizer(20)
                if (choice === '1') {
                    if (dice > 12) {
                        console.log('|  Вы проскочили в последний момент.')
                    } else {
                        const damage = diceRandomizer(20, 2)
                        player.stats.hits -= damage
                        console.log(`|  Маятник рассёк вас. -${damage} здоровья.`)
                        if (player.stats.hits <= 0) {
                            return 'death'
                        }
                    }
                } else if (choice === '2') {
                    if (dice > 8) {
                        console.log('|  Вы выбрали идеальный момент и прошли.')
                    } else {
                        const damage = diceRandomizer(15, 2)
                        player.stats.hits -= damage
                        console.log(`|  Вы ошиблись с моментом. -${damage} здоровья.`)
                        if (player.stats.hits <= 0) {
                            return 'death'
                        }
                    }
                } else {
                    if (dice > 10) {
                        console.log('|  Обходной путь был безопасен.')
                    } else {
                        console.log('|  Обход привёл вас в засаду.')
                        return { type: 'battle', enemies: [enemies[30], enemies[31]] }
                    }
                }
            }},
            { type: 'event', name: 'Призрачный воин', execute: () => {
                console.log('|  Прозрачная фигура в доспехах преграждает путь.')
                console.log('|  1. Сразиться с призраком')
                console.log('|  2. Предложить монеты')
                console.log('|  3. Прочитать молитву')
                
                const choice = readlineSync.question('|  Action: ')
                if (choice === '1') {
                    console.log('|  Призрак принимает вызов.')
                    return { type: 'battle', enemies: [enemies[30], enemies[31]] }
                } else if (choice === '2') {
                    if (player.inventory.coins >= 300) {
                        player.inventory.coins -= 300
                        console.log('|  Призрак взял монеты и исчез.')
                        const item = getRandomItemByRarity(null, treasureItems)
                        if (item) {
                            console.log(`|  На месте призрака остался ${item.name}.`)
                            player.inventory.storageItemsStats.push(item)
                        }
                    } else {
                        console.log('|  Призрак оскорбился подачкой.')
                        return { type: 'battle', enemies: [enemies[30], enemies[31]] }
                    }
                } else {
                    const dice = diceRandomizer(20)
                    if (dice > 12) {
                        console.log('|  Призрак услышал молитву и пропустил вас.')
                    } else {
                        console.log('|  Молитва разозлила призрака.')
                        return { type: 'battle', enemies: [enemies[30], enemies[31]] }
                    }
                }
            }},
            
            { type: 'treasure', name: 'Сокровищница храма', execute: () => {
                console.log('|  Золотая дверь открывается перед вами.')
                const coins = diceRandomizer(800, 3) + 500
                player.inventory.coins += coins
                console.log(`|  Гор золота: ${coins} монет.`)
                
                const normalItem = getRandomItemByRarity(null, treasureItems)
                if (normalItem) {
                    console.log(`|  Среди сокровищ вы нашли ${normalItem.name}.`)
                    player.inventory.storageItemsStats.push(normalItem)
                }
                
                const rareItem = getRandomItemByRarity(null, exclusiveTreasureItems)
                if (rareItem) {
                    console.log(`|  На постаменте лежал ${rareItem.name}.`)
                    player.inventory.storageItemsStats.push(rareItem)
                }
                return 'continue'
            }}
        ]
    }
}

const battleReward = (locationKey) => {
    const location = locations[locationKey]
    let baseCoins = 0
    
    if (location.difficulty === 'easy') {
        baseCoins = diceRandomizer(30, 2) + 10
    } else if (location.difficulty === 'medium') {
        baseCoins = diceRandomizer(60, 2) + 30
    } else {
        baseCoins = diceRandomizer(100, 2) + 50
    }
    
    player.inventory.coins += baseCoins
    console.log(`|  Вы получили ${baseCoins} монет за победу.`)
    
    let itemChance = 0
    if (location.difficulty === 'easy') {
        itemChance = 25
    } else if (location.difficulty === 'medium') {
        itemChance = 35
    } else {
        itemChance = 45
    }
    
    if (diceRandomizer(100) <= itemChance) {
        const item = getRandomItemByRarity(null, battleLootItems)
        if (item) {
            console.log(`|  Вы нашли ${item.name} на теле врага.`)
            player.inventory.storageItemsStats.push(item)
        }
    }
}

export const getRandomEvent = (locationKey) => {
    const location = locations[locationKey]
    if (!location) {
        return null
    }
    
    const eventIndex = diceRandomizer(location.events.length) - 1
    const event = location.events[eventIndex]
    
    console.log(`\n|  ${event.name}`)
    
    return event
}

export const executeEvent = async (event, locationKey) => {
// обработка битвы
if (event.type === 'battle') {
    addHistory(`Начало битвы: ${event.name}`)
    const result = await battleBegin(event.enemies)
    
    if (result === 'Поражение') {
        addHistory(`Поражение в битве: ${event.name}`)
        return 'death'
    }
    
    if (result === 'Победа') {
        addHistory(`Победа в битве: ${event.name}`)
        battleReward(locationKey)
        return 'continue'
    }
    
    if (result === 'Скрылся') {
        addHistory(`Успешное скрытие в битве: ${event.name}`)
        console.log('|  Вы скрылись в темноте.')
        return 'continue'
    }
    
    return 'continue'
}
    
    // обработка магазина
    if (event.type === 'shop') {
        addHistory(`Посещение магазина: ${event.name}`)
        event.shop()
        return 'continue'
    }
    
    // обработка выхода из локации
    if (event.type === 'exit') {
        addHistory(`Найден выход: ${event.name} -> ${event.nextLocation}`)
        console.log(`|  ${event.name}. Вы переходите в новую локацию.`)
        return { type: 'exit', nextLocation: event.nextLocation }
    }
    
    // обработка обычных событий и сокровищниц
    if (event.type === 'event' || event.type === 'treasure') {
        addHistory(`Начало события: ${event.name}`)
        const eventResult = event.execute()
        
        // смерть во время события
        if (eventResult === 'death') {
            addHistory(`Смерть во время события: ${event.name}`)
            console.log('|  Событие оказалось смертельным...')
            return 'death'
        }
        
        // событие привело к битве
        if (eventResult && eventResult.type === 'battle') {
            addHistory(`Событие привело к битве: ${event.name}`)
            const battleResult = await battleBegin(eventResult.enemies)
            
            // проверка на поражение в битве из события
            if (battleResult === 'Поражение') {
                addHistory(`Поражение в битве из события: ${event.name}`)
                return 'death'
            }
            
            // победа в битве из события
            if (battleResult === 'Победа') {
                addHistory(`Победа в битве из события: ${event.name}`)
                battleReward(locationKey)
                return 'continue'
            }
            
            return 'continue'
        }
        
        addHistory(`Завершение события: ${event.name}`)
        return 'continue'
    }
    
    return 'continue'
}