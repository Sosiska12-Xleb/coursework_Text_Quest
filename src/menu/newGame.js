import readlineSync from 'readline-sync'
import fs from 'fs'
import { menu } from './index.js'
import { player } from '../player.js'
import { armors } from '../items/armor.js'
import { arms } from '../items/arms.js'
import { potions, magicstaffs, artifacts } from '../items/magicItems.js'

const characteristicChoose = () => {
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
        const characteristicChecker = (characteristics) => {
          let characteristicPoints = 11
          if (characteristics.length !== 6) {
            console.log('|  Некорректный ввод, напишите 6 чисел без пробелов и через запятую                                                              |')
            return false
          }

          for (const i of characteristics) {
            const numI = Number(i)
            if (numI > 5 || numI < -5) {
              console.log(`|  Некорректный ввод, значение '${numI}' выходит из диапозона (-5; 5), введите число в этом диапозоне.                                |`)
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
  const content = fs.readFileSync('assets/newGame_images/newGameMenu1.txt', 'utf-8')
  console.log(content)
  action = readlineSync.question('|  Action: ')
  switch (action) {
    case '1':
      return characteristicChoose()
    case '2':
      player.inventory.armors.armor = armors.lightArmor.quiltedArmor
      player.stats.ac = armors.lightArmor.quiltedArmor.ac
      player.inventory.weapon.firstWeapon = arms.simpleHandWeapons.baton
      player.inventory.storageItemsStats.push(potions.healingPotion, potions.healingPotion, potions.healingPotion, potions.resistancePotion)
      player.inventory.storageNames.push(potions.healingPotion.name, potions.healingPotion.name, potions.healingPotion.name, potions.resistancePotion.name)
    case '3':
      player.inventory.armors.armor = armors.lightArmor.quiltedArmor
      player.stats.ac = armors.lightArmor.quiltedArmor.ac
      player.inventory.weapon.firstWeapon = arms.simpleHandWeapons.knife
      player.inventory.weapon.secondWeapon = arms.simpleRangeWeapon.sling
      player.inventory.storageItemsStats.push(potions.healingPotion, potions.healingPotion, potions.dexterityPotion)
      player.inventory.storageNames.push(potions.healingPotion.name, potions.healingPotion.name, potions.dexterityPotion.name)
    case '4':
      player.inventory.weapon.firstWeapon = magicstaffs.basicMagicStaff
      player.inventory.storageItemsStats.push(artifacts.tacticCrystal, potions.healingPotion, potions.healingPotion, potions.intelligencePotion)
      player.inventory.storageNames.push(artifacts.tacticCrystal.name, potions.healingPotion.name, potions.healingPotion.name, potions.intelligencePotion.name)
    case '5':
      player.inventory.weapon.firstWeapon = magicstaffs.basicHealStaff
      player.inventory.storageItemsStats.push(artifacts.amuletDrunkard, potions.healingPotion, potions.healingPotion, potions.healingPotion, potions.healingPotion)
      player.inventory.storageNames.push(artifacts.amuletDrunkard.name, potions.healingPotion.name, potions.healingPotion.name, potions.healingPotion.name, potions.healingPotion.name)
  }
}

export { characteristicChoose }
