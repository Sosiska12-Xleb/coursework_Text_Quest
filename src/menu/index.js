import readlineSync from 'readline-sync'
import fs from "fs"
import { about } from './about.js'
import { achievements } from './achievements.js'
import { newGame } from './newGame.js'

function clearScreen() {
    process.stdout.write('\u001B[2J\u001B[0f');
}


const menu = () => {
    clearScreen()
    const content = fs.readFileSync('../../assets/MEGA_DUNGEON.txt', 'utf-8')
    console.log(content)
    let action = ""
    while (action !== "1" || action !== "2" || action !== "3") {
        action = readlineSync.question('Action: ')
        switch (action) {
            case "1":
                //незаконченно
                return
            case "2":
                clearScreen()
                return newGame()
            case "3":
                //незаконченно
                return
            case "4":
                clearScreen()
                return about()
            case "5":
                clearScreen()
                return achievements()
            case "6":
                return "Иницализация выхода..."
            default:
                console.log("Некорректный ввод команды, пожалуйста введите только число")
                break   
        }   
    }
    
}

console.log(menu())

export { menu }