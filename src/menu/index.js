import readlineSync from 'readline-sync'
import fs from "fs"
import { about } from './about.js';

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
                //незаконченно
                return
            case "3":
                //незаконченно
                return
            case "4":
                clearScreen()
                about()
                break
            case "5":
                //незаконченно
                break
            default:
                console.log(1)
                break   
        }   
    }
    
}

console.log(menu())