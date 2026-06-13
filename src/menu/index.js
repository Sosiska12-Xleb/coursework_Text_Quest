import readlineSync from 'readline-sync'
import fs from 'fs'
import { about } from './about.js'
import { achievements } from './achievements.js'
import { characteristicChoose } from './newGame.js'

export function clearScreen() {
  process.stdout.write('\u001B[2J\u001B[0f')
}

const menu = () => {
  clearScreen()
  const content = fs.readFileSync('assets/MEGA_DUNGEON.txt', 'utf-8')
  console.log(content)
  let action = ''
  while (action !== '1' || action !== '2' || action !== '3') {
    action = readlineSync.question('Action: ')
    switch (action) {
      case '1':
        // незаконченно
        return
      case '2':
        clearScreen()
        return characteristicChoose()
      case '3':
        // незаконченно
        return
      case '4':
        clearScreen()
        return about()
      case '5':
        console.log('Инициализация выхода...')
        return
      default:
        console.log('Некорректный ввод команды, пожалуйста введите только число из меню')
        break
    }
  }
}

export { menu }
