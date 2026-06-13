// файл для системы достижений (заглушка, будет реализована позже)
import readlineSync from 'readline-sync'
import { menu } from './index.js'

// функция отображения достижений
const achievements = () => {
  console.log('\n|  ==================== ДОСТИЖЕНИЯ ====================')
  console.log('|  Раздел достижений находится в разработке.')
  console.log('|  Следите за обновлениями!')
  console.log('|  ===================================================')
  
  let action = readlineSync.question('\n|  Нажмите Enter для возврата в меню...')
  return menu()
}

export { achievements }