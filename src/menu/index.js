// главное меню игры
import readlineSync from 'readline-sync'
import fs from 'fs'
import { about } from './about.js'
import { achievements } from './achievements.js'
import { characteristicChoose } from './newGame.js'
import { checkSaveExists, loadGame } from '../Game/save.js'
import { game } from '../Game/game.js'
import { clearHistory } from '../Game/history.js'

// функция очистки экрана
export function clearScreen() {
    process.stdout.write('\u001B[2J\u001B[0f')
}

// главная функция меню
const menu = () => {
    clearScreen()
    const content = fs.readFileSync('assets/MEGA_DUNGEON.txt', 'utf-8')
    console.log(content)
    
    let action = ''
    while (action !== '1' || action !== '2' || action !== '3' || action !== '4' || action !== '5') {
        action = readlineSync.question('Action: ')
        switch (action) {
            case '1': // продолжить игру (загрузка последнего сохранения)
                clearScreen()
                const hasSave = checkSaveExists()
                if (hasSave) {
                    console.log('|  Загрузка последнего сохранения...')
                    const loaded = loadGame()
                    if (loaded) {
                        console.log('|  Игра загружена!')
                        game()
                    } else {
                        console.log('|  Ошибка загрузки сохранения. Начните новую игру.')
                        menu()
                    }
                } else {
                    console.log('|  Файл сохранения не найден. Начните новую игру.')
                    menu()
                }
                return
            case '2': // новая игра
                clearScreen()
                clearHistory() // очистка истории при новой игре
                return characteristicChoose()
            case '3': // достижения (заглушка)
                clearScreen()
                console.log('|  Достижения временно недоступны.')
                return menu()
            case '4': // об игре
                clearScreen()
                return about()
            case '5': // выход из игры
                console.log('|  Инициализация выхода...')
                console.log('|  До свидания!')
                process.exit(0)
            default:
                console.log('|  Некорректный ввод команды, пожалуйста введите только число из меню')
                break
        }
    }
}

export { menu }