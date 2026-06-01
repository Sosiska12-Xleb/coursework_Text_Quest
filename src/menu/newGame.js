import readlineSync from 'readline-sync'
import fs from "fs"
import { menu } from './index.js'
import { player } from '../player.js'
import { newGameclassEnter } from './newGameclassEnter.js'

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
        if (Number(action) === 1) {
            return menu()
        } else if (Number(action) <= 14) {
            newGameclassEnter(Number(action))
            return 
        } else {
            console.log("|  Некорректный ввод, напишите толко число желаемого класса                                                                      |")
        }
    }
}


export { characteristicChoose }