import readlineSync from 'readline-sync'
import fs from "fs"
import clear from "clear-screen"

function clearScreen() {
    process.stdout.write('\u001B[2J\u001B[0f');
}


const menu = () => {
    clearScreen()
    const content = fs.readFileSync('../../assets/MEGA_DUNGEON.txt', 'utf-8')
    const content1 = fs.readFileSync('../../assets/about.txt', 'utf-8')
    console.log(content)
    const action = 0
    while (action === "1" || action === "2" || action === "3") {
        action = readlineSync.question('Action: ')
        switch (action) {
            case "1":
                //незаконченно
                break
            case "2":
                //незаконченно
                break
            case "3":
                //незаконченно
                break
            case "4":
                clearScreen()
                console.log(content1)
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