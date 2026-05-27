import readlineSync from 'readline-sync'
import fs from "fs"
import { menu } from './index.js'
import { player } from '../player.js'

const newGame = () => {
    const content = fs.readFileSync('assets/newGame_images/newGameMenu.txt', 'utf-8')
    console.log(content)
    console.log("Выберете значение вашей Силы.")
    console.log("Значение Силы на данный момент: ", characteristic.strenght)
    action = readlineSync.question('Action: ')
}

export { newGame }