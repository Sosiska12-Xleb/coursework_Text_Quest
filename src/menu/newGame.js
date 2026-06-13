import readlineSync from 'readline-sync'
import fs from 'fs'
import { menu } from './index.js'
import { player } from '../Game/player.js'
import { gameState } from '../Game/game.js'
import { armors } from '../items/armor.js'
import { arms } from '../items/arms.js'
import { potions, magicstaffs, artifacts } from '../items/magicItems.js'

const characteristicChecker = (characteristics) => {
  let characteristicPoints = 11
  if (characteristics.length !== 6) {
    console.log('|  Некорректный ввод, напишите 6 чисел без пробелов и через запятую                                                              |')
    return false
  }

  for (const i of characteristics) {
    const numI = Number(i)
    if (numI > 5 || numI < -5) {
      console.log(`|  Некорректный ввод, значение '${numI}' выходит из диапозона (-5; 5), введите число в этом диапозоне.                           |`)
      return false
    } else if (Number.isNaN(numI)) {
      console.log("|  Некорректный ввод, введите за место сторонних символов и букв нужные вам числа.                                               |")
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

export const characteristicChoose = () => {
  const content = fs.readFileSync('assets/newGame_images/newGameMenu1.txt', 'utf-8')
  console.log(content)
  let action = ''
  while (action !== '1') {
    action = readlineSync.question('|  Action: ')
    switch (action) {
      case '1':
        return menu()
      default:
        let characteristics = action.split(',')

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
        console.log('|  Ваши характеристики успешно записанны!                                                                                        |')
        return inventoryChoose()
    }
  }
}

const inventoryChoose = () => {
  const content = fs.readFileSync('assets/newGame_images/newGameMenu2.txt', 'utf-8')
  console.log(content)
  const action = readlineSync.question('|  Action: ')
  switch (action) {
    case '1':
      return characteristicChoose()
    case '2':
      player.inventory.armors.armor = armors.lightArmor.quiltedArmor
      player.stats.ac = armors.lightArmor.quiltedArmor.ac
      player.inventory.weapon.firstWeapon = arms.simpleHandWeapons.baton
      player.inventory.storageItemsStats.push(potions.healingPotion, potions.healingPotion, potions.healingPotion, potions.resistancePotion)
      break
    case '3':
      player.inventory.armors.armor = armors.lightArmor.quiltedArmor
      player.stats.ac = armors.lightArmor.quiltedArmor.ac
      player.inventory.weapon.firstWeapon = arms.simpleHandWeapons.knife
      player.inventory.weapon.secondWeapon = arms.simpleRangeWeapon.sling
      player.inventory.storageItemsStats.push(potions.healingPotion, potions.healingPotion, potions.dexterityPotion)
      break
    case '4':
      player.inventory.weapon.firstWeapon = magicstaffs.basicMagicStaff
      player.inventory.storageItemsStats.push(artifacts.tacticCrystal, potions.healingPotion, potions.healingPotion, potions.intelligencePotion)
      break
    case '5':
      player.inventory.weapon.firstWeapon = magicstaffs.basicHealStaff
      player.inventory.storageItemsStats.push(artifacts.amuletDrunkard, potions.healingPotion, potions.healingPotion, potions.healingPotion, potions.healingPotion)
      break
    default:
      console.log("|  Некорректный ввод, выберете число из списка                                                                                   |")
      return inventoryChoose()
  }
 
  return finalPlayerChoose()
}

const finalPlayerChoose = async () => {
    const content = fs.readFileSync('assets/newGame_images/newGameMenu3.txt', 'utf-8')
    console.log(content)
    player.name = readlineSync.question('|  Action: ')

    const content2 = fs.readFileSync('assets/newGame_images/newGameMenu4.txt', 'utf-8')
    console.log(content2)
    const locationChoice = readlineSync.question('|  Action: ')
    
    if (locationChoice === '1') {
        gameState.currentLocation = 'catacombs'
    } else if (locationChoice === '2') {
        gameState.currentLocation = 'tunnels'
    } else if (locationChoice === '3') {
        gameState.currentLocation = 'temple'
    } else {
        gameState.currentLocation = 'catacombs'
    }
    
    console.log('\n|  Персонаж создан!')
    console.log(player)
    
    const { game } = await import('../Game/game.js')
    return game()
}