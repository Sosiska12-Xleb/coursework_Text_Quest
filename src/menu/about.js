import readlineSync from 'readline-sync'
import fs from 'fs'
import { menu } from './index.js'

const about = () => {
  const content = fs.readFileSync('assets/aboutProject.txt', 'utf-8')
  console.log(content)
  let action = readlineSync.question('Action: ')
  switch (action) {
    case '1':
      return menu()
    default:
      console.log('Некорректный ввод команды, пожалуйста введите только число')
      break
  }
}

export { about }
