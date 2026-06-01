import { armors } from '../items/armor.js'
import { player } from '../player.js'

export const newGameclassEnter = (num) => {
    switch (num) {
        case "2":
            console.log("|  Вводим всякое от БАРДА в лист персонажа...                                                                                    |")
            player.savingThrow.strenght = player.characteristic.strenght
            player.savingThrow.dexterity = player.characteristic.dexterity + player.skillBonus
            player.savingThrow.physique = player.characteristic.physique
            player.savingThrow.intelligence = player.characteristic.intelligence
            player.savingThrow.wisdom = player.characteristic.wisdom
            player.savingThrow.charisma = player.characteristic.charisma + player.skillBonus
            player.inventory.armors.armor = armors.leatherArmor.name
            player.stats.ac = armors.leatherArmor.ac
            player.inventory.defaultStorage.push("Лютня")
            player.inventory.firstWeapon = "Длинный меч"
            player.inventory.secondWeapon = "Кинжал"
            player.stats.initiative = player.characteristic.dexterity
            player.stats.class = "Бард"
            player.stats.hits_dice = 8
            player.stats.max_hits = player.stats.hits_dice + player.characteristic.physique
            player.stats.hits = player.stats.max_hits
            player.otherHoldings.armor.push("Легкие доспехи")
            player.otherHoldings.weapon.push("Простое оружие", "Длинный меч", "Короткий меч", "Рапира", "Ручной арбалет")
            player.skillsAndAbilities.push("Вдохновение барда")
            player.baseSpellcastingCharacteristic = "ХАРИЗМА"
            player.savingThrowDifficulty = 8 + player.characteristic.charisma + player.skillBonus
            player.spellAttackBonus = player.characteristic.charisma + player.skillBonus
            player.cells.conspiracy = 2
            player.cells.famousSpells = 4
            player.cells.circle1 = 2
            console.log("|  Первичная запись значений БАРДА прошла успешно!                                                                               |")
        case "3":
            console.log("|  Вводим всякое от ВАРВАРА в лист персонажа...                                                                                    |")
            player.savingThrow.strenght = player.characteristic.strenght + player.skillBonus
            player.savingThrow.dexterity = player.characteristic.dexterity 
            player.savingThrow.physique = player.characteristic.physique + player.skillBonus
            player.savingThrow.intelligence = player.characteristic.intelligence
            player.savingThrow.wisdom = player.characteristic.wisdom
            player.savingThrow.charisma = player.characteristic.charisma
            player.inventory.defaultStorage.push("Ручной топор", "Ручной топор", "Метательное копье", "Метательное копье", "Метательное копье", "Метательное копье")
            player.inventory.firstWeapon = "Секира"
            player.stats.initiative = player.characteristic.dexterity
            player.stats.class = "Варвар"
            player.stats.hits_dice = 12
            player.stats.max_hits = player.stats.hits_dice + player.characteristic.physique
            player.stats.hits = player.stats.max_hits
            player.otherHoldings.armor.push("Легкие доспехи", "Средние доспехи", "Щиты")
            player.otherHoldings.weapon.push("Простое оружие", "Воинское оружие")
            player.skillsAndAbilities.push("Защита без доспехов", "Ярость")
            console.log("|  Первичная запись значений ВАРВАРА прошла успешно!                                                                             |")
        case "4":
            console.log("|  Вводим всякое от ВОИНА в лист персонажа...                                                                                    |")
            player.savingThrow.strenght = player.characteristic.strenght + player.skillBonus
            player.savingThrow.dexterity = player.characteristic.dexterity 
            player.savingThrow.physique = player.characteristic.physique + player.skillBonus
            player.savingThrow.intelligence = player.characteristic.intelligence
            player.savingThrow.wisdom = player.characteristic.wisdom
            player.savingThrow.charisma = player.characteristic.charisma
            player.inventory.armors.armor = armors.chainmail.name
            player.stats.ac = armors.chainmail.ac
            player.inventory.firstWeapon = "Длинный меч"
            player.inventory.secondWeapon = "Легкий арбалет"
            player.inventory.armors.shield = "Щит"
            player.stats.initiative = player.characteristic.dexterity
            player.stats.class = "Воин"
            player.stats.hits_dice = 10
            player.stats.max_hits = player.stats.hits_dice + player.characteristic.physique
            player.stats.hits = player.stats.max_hits
            player.otherHoldings.armor.push("Легкие доспехи", "Средние доспехи", "Тяжёлые доспехи", "Щиты")
            player.otherHoldings.weapon.push("Простое оружие", "Воинское оружие")
            player.skillsAndAbilities.push("Защита без доспехов", "Ярость")
            console.log("|  Первичная запись значений ВОИНА прошла успешно!                                                                               |")
    }
}