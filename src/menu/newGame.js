import readlineSync from 'readline-sync'
import fs from "fs"
import { menu } from './index.js'
import { player } from '../player.js'
import { armors } from '../items/armor.js'

const characteristicChoose = () => {
    const content = fs.readFileSync('assets/newGame_images/newGameMenu1.txt', 'utf-8')
    console.log(content)
    let action = ""
    while (action !== "1") {
        action = readlineSync.question('|  Action: ')
        switch (action) {
            case "1":
                return menu()
            default:
                let characteristics = action.split(",")
                const characteristicChecker = (characteristics) => {
                    let characteristicPoints = 11
                    if (characteristics.length !== 6) {
                        console.log("|  Некорректный ввод, напишите 6 чисел без пробелов и через запятую                                                              |")
                        return false
                    }

                    for (const i of characteristics) {
                        const numI = Number(i)
                        if (numI > 5 || numI < -5) {
                            console.log(`|  Некорректный ввод, значение '${numI}' выходит из диапозона (-5; 5), введите число в этом диапозоне.                                |`)
                            return false
                        }
                        characteristicPoints -= numI
                    }

                    if (characteristicPoints < 0) {
                        console.log(`|  Некорректный ввод, ваши значения характеристик превышают ваш баланс очков. Напоминание: у вас 11 очков, отрицательные         |`)
                        console.log(`|  значения повышают ваш баланс очков.                                                                                           |`)
                        return false
                    }
                    return true
                }

                const result = characteristicChecker(characteristics)
                if (result === false) {
                    break 
                }
                player.characteristic.strenght = Number(characteristics[0])
                player.characteristic.dexterity = Number(characteristics[1])
                player.characteristic.physique = Number(characteristics[2])
                player.characteristic.intelligence = Number(characteristics[3])
                player.characteristic.wisdom = Number(characteristics[4])
                player.characteristic.charisma = Number(characteristics[5])
                console.log("|  Ваши характеристики успешно записанны!                                                                                        |")
                return statsChoose()
        }
    }         
}


const statsChoose = () => {
    const content = fs.readFileSync('assets/newGame_images/newGameMenu2.txt', 'utf-8')
    console.log(content)
    let action = ""
    while (action !== "1") {
        action = readlineSync.question('|  Action: ')
        switch (action) {
            case "1":
                return menu()
            case "2":
                console.log("|  Вводим всякое от БАРДА в лист персонажа...                                                                                    |")
                player.savingThrow.strenght = player.characteristic.strenght
                player.savingThrow.dexterity = player.characteristic.dexterity + player.skillBonus
                player.savingThrow.physique = player.characteristic.physique
                player.savingThrow.intelligence = player.characteristic.intelligence
                player.savingThrow.wisdom = player.characteristic.wisdom
                player.savingThrow.charisma = player.characteristic.charisma + player.skillBonus
                player.inventory.armors.armor = armors.leatherArmor.name
                player.inventory.defaultStorage.push("Лютня")
                player.inventory.secondWeapon = "Кинжал"
                player.stats.ac = armors.leatherArmor.ac
                player.stats.initiative = player.characteristic.dexterity
                player.stats.class = "Бард"
                player.stats.hits_dice = 8
                player.stats.max_hits = player.stats.hits_dice + player.characteristic.physique
                player.stats.hits = player.stats.max_hits
                player.otherHoldings.armor.push("Стеганный доспех", "Кожанный доспех", "Проклепанный кожанный доспех")
                player.otherHoldings.weapon.push("Простое оружие", "Длинный меч", "Короткий меч", "Рапира", "Ручной арбалет")
                player.skillsAndAbilities.push("Вдохновение барда")
                player.baseSpellcastingCharacteristic = "ХАРИЗМА"
                player.savingThrowDifficulty = 8 + player.characteristic.charisma + player.skillBonus
                player.spellAttackBonus = player.characteristic.charisma + player.skillBonus
                player.cells.conspiracy = 2
                player.cells.famousSpells = 4
                player.cells.circle1 = 2
            
            default:
                console.log("|  Некорректный ввод, напишите толко число желаемого класса                                                                      |")
                break

        }
    }
}


export { characteristicChoose }