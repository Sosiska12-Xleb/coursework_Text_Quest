import readlineSync from 'readline-sync'
import { menu } from './index.js'

const achievements = () => {
  console.log('|  ==================== ДОСТИЖЕНИЯ ====================')
  console.log('|  Раздел достижений находится в разработке.')
  console.log('|  ===================================================')
  
  let action = readlineSync.question('|  Нажмите Enter для возврата в меню...')
  return menu()
}

export { achievements }