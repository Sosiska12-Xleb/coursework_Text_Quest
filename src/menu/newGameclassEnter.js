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
            player.inventory.armors.armor = armors.lightArmor.leatherArmor
            player.stats.ac = armors.lightArmor.leatherArmor.ac
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
            console.log("|  Первичная запись значений БАРДА завершена успешно!                                                                               |")
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
            console.log("|  Первичная запись значений ВАРВАРА завершена успешно!                                                                             |")
        case "4":
            console.log("|  Вводим всякое от ВОИНА в лист персонажа...                                                                                    |")
            player.savingThrow.strenght = player.characteristic.strenght + player.skillBonus
            player.savingThrow.dexterity = player.characteristic.dexterity 
            player.savingThrow.physique = player.characteristic.physique + player.skillBonus
            player.savingThrow.intelligence = player.characteristic.intelligence
            player.savingThrow.wisdom = player.characteristic.wisdom
            player.savingThrow.charisma = player.characteristic.charisma
            player.inventory.armors.armor = armors.heavyArmor.chainmail
            player.stats.ac = armors.heavyArmor.chainmail.ac
            player.inventory.firstWeapon = "Длинный меч"
            player.inventory.secondWeapon = "Легкий арбалет"
            player.inventory.armors.shield = armors.shield
            player.stats.ac = player.stats.ac + armors.shield.ac
            player.stats.initiative = player.characteristic.dexterity
            player.stats.class = "Воин"
            player.stats.hits_dice = 10
            player.stats.max_hits = player.stats.hits_dice + player.characteristic.physique
            player.stats.hits = player.stats.max_hits
            player.otherHoldings.armor.push("Легкие доспехи", "Средние доспехи", "Тяжёлые доспехи", "Щиты")
            player.otherHoldings.weapon.push("Простое оружие", "Воинское оружие")
            player.skillsAndAbilities.push("Второе дыхание")
            console.log("|  Первичная запись значений ВОИНА завершена успешно!                                                                               |")
        case "5":
            console.log("|  Вводим всякое от ВОЛШЕБНИКА в лист персонажа...                                                                                    |")
            player.savingThrow.strenght = player.characteristic.strenght
            player.savingThrow.dexterity = player.characteristic.dexterity
            player.savingThrow.physique = player.characteristic.physique
            player.savingThrow.intelligence = player.characteristic.intelligence + player.skillBonus
            player.savingThrow.wisdom = player.characteristic.wisdom + player.skillBonus
            player.savingThrow.charisma = player.characteristic.charisma
            player.inventory.defaultStorage.push("Книга заклинаний")
            player.inventory.firstWeapon = "Кинжал"
            player.inventory.Activstorage.push("Посох")
            player.stats.initiative = player.characteristic.dexterity
            player.stats.class = "Волшебник"
            player.stats.hits_dice = 6
            player.stats.max_hits = player.stats.hits_dice + player.characteristic.physique
            player.stats.hits = player.stats.max_hits
            player.otherHoldings.weapon.push("Кинжал", "Дротик", "Праща", "Боевой посох", "Легкий арбалет")
            player.skillsAndAbilities.push("Магическое восстановление")
            player.baseSpellcastingCharacteristic = "ИНТЕЛЛЕКТ"
            player.savingThrowDifficulty = 8 + player.characteristic.intelligence + player.skillBonus
            player.spellAttackBonus = player.characteristic.intelligence + player.skillBonus
            player.cells.conspiracy = 3
            player.cells.famousSpells = player.characteristic.intelligence + player.stats.level
            player.cells.circle1 = 2
            console.log("|  Первичная запись значений ВОЛШЕБНИКА завершена успешно!                                                                               |")
        case "6":
            console.log("|  Вводим всякое от ДРУИДА в лист персонажа...                                                                                    |")
            player.savingThrow.strenght = player.characteristic.strenght
            player.savingThrow.dexterity = player.characteristic.dexterity
            player.savingThrow.physique = player.characteristic.physique
            player.savingThrow.intelligence = player.characteristic.intelligence + player.skillBonus
            player.savingThrow.wisdom = player.characteristic.wisdom + player.skillBonus
            player.savingThrow.charisma = player.characteristic.charisma
            player.inventory.armors.armor = armors.lightArmor.leatherArmor
            player.stats.ac = armors.lightArmor.leatherArmor.ac
            player.inventory.firstWeapon = "Скимитар"
            player.inventory.armors.shield = armors.woodenShield
            player.stats.ac = player.stats.ac + armors.shield.ac
            player.inventory.Activstorage.push("Деревянный посох")
            player.stats.initiative = player.characteristic.dexterity
            player.stats.class = "Друид"
            player.stats.hits_dice = 8
            player.stats.max_hits = player.stats.hits_dice + player.characteristic.physique
            player.stats.hits = player.stats.max_hits
            player.otherHoldings.armor.push("Легкие доспехи", "Средние доспехи", "Щиты")
            player.otherHoldings.weapon.push("Боевой посох", "Булавы", "Дротик", "Дубинка", "Кинжал", "Копье", "Метательное копье", "Праща", "Серп", "Скимитар")
            player.otherHoldings.tools.push("Набор травника")
            player.skillsAndAbilities.push("Друидический язык")
            player.otherHoldings.language.push("Друидический язык")
            player.baseSpellcastingCharacteristic = "МУДРОСТЬ"
            player.savingThrowDifficulty = 8 + player.characteristic.wisdom + player.skillBonus
            player.spellAttackBonus = player.characteristic.wisdom + player.skillBonus
            player.cells.conspiracy = 2
            player.cells.famousSpells = player.characteristic.wisdom + player.stats.level
            player.cells.circle1 = 2
            console.log("|  Первичная запись значений ДРУИДА завершена успешно!                                                                               |")
        case "7":
            console.log("|  Вводим всякое от ЖРЕЦ в лист персонажа...                                                                                    |")
            player.savingThrow.strenght = player.characteristic.strenght
            player.savingThrow.dexterity = player.characteristic.dexterity
            player.savingThrow.physique = player.characteristic.physique
            player.savingThrow.intelligence = player.characteristic.intelligence + player.skillBonus
            player.savingThrow.wisdom = player.characteristic.wisdom + player.skillBonus
            player.savingThrow.charisma = player.characteristic.charisma
            player.inventory.armors.armor = armors.lightArmor.leatherArmor
            player.stats.ac = armors.lightArmor.leatherArmor.ac
            player.inventory.firstWeapon = "Скимитар"
            player.inventory.armors.shield = armors.woodenShield
            player.stats.ac = player.stats.ac + armors.shield.ac
            player.inventory.Activstorage.push("Деревянный посох")
            player.stats.initiative = player.characteristic.dexterity
            player.stats.class = "Друид"
            player.stats.hits_dice = 8
            player.stats.max_hits = player.stats.hits_dice + player.characteristic.physique
            player.stats.hits = player.stats.max_hits
            player.otherHoldings.armor.push("Легкие доспехи", "Средние доспехи", "Щиты")
            player.otherHoldings.weapon.push("Боевой посох", "Булавы", "Дротик", "Дубинка", "Кинжал", "Копье", "Метательное копье", "Праща", "Серп", "Скимитар")
            player.otherHoldings.tools.push("Набор травника")
            player.skillsAndAbilities.push("Друидический язык")
            player.otherHoldings.language.push("Друидический язык")
            player.baseSpellcastingCharacteristic = "МУДРОСТЬ"
            player.savingThrowDifficulty = 8 + player.characteristic.wisdom + player.skillBonus
            player.spellAttackBonus = player.characteristic.wisdom + player.skillBonus
            player.cells.conspiracy = 2
            player.cells.famousSpells = player.characteristic.wisdom + player.stats.level
            player.cells.circle1 = 2
            console.log("|  Первичная запись значений ЖРЕЦ завершена успешно!                                                                               |")
    }
}