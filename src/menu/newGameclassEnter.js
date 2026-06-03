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
            console.log("|  Первичная запись значений БАРДА завершена успешно!                                                                            |")
        case "3":
            console.log("|  Вводим всякое от ВАРВАРА в лист персонажа...                                                                                  |")
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
            console.log("|  Первичная запись значений ВАРВАРА завершена успешно!                                                                          |")
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
            console.log("|  Первичная запись значений ВОИНА завершена успешно!                                                                            |")
        case "5":
            console.log("|  Вводим всякое от ВОЛШЕБНИКА в лист персонажа...                                                                               |")
            player.savingThrow.strenght = player.characteristic.strenght
            player.savingThrow.dexterity = player.characteristic.dexterity
            player.savingThrow.physique = player.characteristic.physique
            player.savingThrow.intelligence = player.characteristic.intelligence + player.skillBonus
            player.savingThrow.wisdom = player.characteristic.wisdom + player.skillBonus
            player.savingThrow.charisma = player.characteristic.charisma
            player.inventory.firstWeapon = "Кинжал"
            player.inventory.Activstorage.push("Посох", "Книга заклинаний")
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
            console.log("|  Первичная запись значений ВОЛШЕБНИКА завершена успешно!                                                                       |")
        case "6":
            console.log("|  Вводим всякое от ДРУИДА в лист персонажа...                                                                                   |")
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
            console.log("|  Первичная запись значений ДРУИДА завершена успешно!                                                                           |")
        case "7":
            console.log("|  Вводим всякое от ЖРЕЦА в лист персонажа...                                                                                    |")
            player.savingThrow.strenght = player.characteristic.strenght
            player.savingThrow.dexterity = player.characteristic.dexterity
            player.savingThrow.physique = player.characteristic.physique
            player.savingThrow.intelligence = player.characteristic.intelligence
            player.savingThrow.wisdom = player.characteristic.wisdom + player.skillBonus
            player.savingThrow.charisma = player.characteristic.charisma + player.skillBonus
            player.inventory.armors.armor = armors.lightArmor.leatherArmor
            player.stats.ac = armors.lightArmor.leatherArmor.ac
            player.inventory.firstWeapon = "Булова"
            player.inventory.secondWeapon = "Легкий арбалет"
            player.inventory.armors.shield = armors.shield
            player.stats.ac = player.stats.ac + armors.shield.ac
            player.inventory.defaultStorage.push("Священная эмблема")
            player.stats.initiative = player.characteristic.dexterity
            player.stats.class = "Жрец"
            player.stats.hits_dice = 8
            player.stats.max_hits = player.stats.hits_dice + player.characteristic.physique
            player.stats.hits = player.stats.max_hits
            player.otherHoldings.armor.push("Легкие доспехи", "Средние доспехи", "Щиты")
            player.otherHoldings.weapon.push("Простое оружие")
            player.baseSpellcastingCharacteristic = "МУДРОСТЬ"
            player.savingThrowDifficulty = 8 + player.characteristic.wisdom + player.skillBonus
            player.spellAttackBonus = player.characteristic.wisdom + player.skillBonus
            player.cells.conspiracy = 3
            player.cells.famousSpells = player.characteristic.wisdom + player.stats.level
            player.cells.circle1 = 2
            console.log("|  Первичная запись значений ЖРЕЦА завершена успешно!                                                                            |")
        case "8":
            console.log("|  Вводим всякое от ИЗОБРЕТАТЕЛЯ в лист персонажа...                                                                             |")
            player.savingThrow.strenght = player.characteristic.strenght
            player.savingThrow.dexterity = player.characteristic.dexterity
            player.savingThrow.physique = player.characteristic.physique + player.skillBonus
            player.savingThrow.intelligence = player.characteristic.intelligence + player.skillBonus
            player.savingThrow.wisdom = player.characteristic.wisdom
            player.savingThrow.charisma = player.characteristic.charisma
            player.inventory.armors.armor = armors.lightArmor.revetedLeatherArmor
            player.stats.ac = armors.lightArmor.revetedLeatherArmor.ac
            player.inventory.firstWeapon = "Легкий молот"
            player.inventory.secondWeapon = "Легкий молот"
            player.inventory.defaultStorage.push("Легкий арбалет")
            player.inventory.Activstorage.push("Воровские инструменты")
            player.stats.initiative = player.characteristic.dexterity
            player.stats.class = "Изобретатель"
            player.stats.hits_dice = 8
            player.stats.max_hits = player.stats.hits_dice + player.characteristic.physique
            player.stats.hits = player.stats.max_hits
            player.otherHoldings.armor.push("Легкие доспехи", "Средние доспехи", "Щиты")
            player.otherHoldings.weapon.push("Простое оружие")
            player.otherHoldings.tools.push("Воровские инструменты", "Инструменты ремонтника")
            player.skillsAndAbilities.push("Магический мастеровой")
            player.baseSpellcastingCharacteristic = "ИНТЕЛЛЕКТ"
            player.savingThrowDifficulty = 8 + player.characteristic.intelligence + player.skillBonus
            player.spellAttackBonus = player.characteristic.intelligence + player.skillBonus
            player.cells.conspiracy = 2
            player.cells.famousSpells = player.characteristic.intelligence
            player.cells.circle1 = 2
            console.log("|  Первичная запись значений ИЗОБРЕТАТЕЛЯ завершена успешно!                                                                     |")
        case "9":
            console.log("|  Вводим всякое от КОЛДУНА в лист персонажа...                                                                                  |")
            player.savingThrow.strenght = player.characteristic.strenght
            player.savingThrow.dexterity = player.characteristic.dexterity
            player.savingThrow.physique = player.characteristic.physique
            player.savingThrow.intelligence = player.characteristic.intelligence
            player.savingThrow.wisdom = player.characteristic.wisdom + player.skillBonus
            player.savingThrow.charisma = player.characteristic.charisma + player.skillBonus
            player.inventory.armors.armor = armors.lightArmor.leatherArmor
            player.stats.ac = armors.lightArmor.leatherArmor.ac
            player.inventory.firstWeapon = "Серп"
            player.inventory.secondWeapon = "Легкий арбалет"
            player.inventory.defaultStorage.push("Кинжал", "Кинжал")
            player.inventory.Activstorage.push("Жезл")
            player.stats.initiative = player.characteristic.dexterity
            player.stats.class = "Колдун"
            player.stats.hits_dice = 8
            player.stats.max_hits = player.stats.hits_dice + player.characteristic.physique
            player.stats.hits = player.stats.max_hits
            player.otherHoldings.armor.push("Легкие доспехи")
            player.otherHoldings.weapon.push("Простое оружие")
            player.baseSpellcastingCharacteristic = "ХАРИЗМА"
            player.savingThrowDifficulty = 8 + player.characteristic.charisma + player.skillBonus
            player.spellAttackBonus = player.characteristic.charisma + player.skillBonus
            player.cells.conspiracy = 2
            player.cells.famousSpells = 2
            player.cells.spellSlots = 1
            player.cells.spellsLevel - 1
            console.log("|  Первичная запись значений КОЛДУНА завершена успешно!                                                                          |")
        case "10":
            console.log("|  Вводим всякое от МОНАХА в лист персонажа...                                                                                   |")
            player.savingThrow.strenght = player.characteristic.strenght + player.skillBonus
            player.savingThrow.dexterity = player.characteristic.dexterity + player.skillBonus
            player.savingThrow.physique = player.characteristic.physique
            player.savingThrow.intelligence = player.characteristic.intelligence
            player.savingThrow.wisdom = player.characteristic.wisdom
            player.savingThrow.charisma = player.characteristic.charisma
            player.inventory.firstWeapon = "Короткий меч"
            player.inventory.defaultStorage.push("Дротик","Дротик","Дротик","Дротик","Дротик","Дротик","Дротик","Дротик","Дротик","Дротик")
            player.stats.initiative = player.characteristic.dexterity
            player.stats.class = "Монах"
            player.stats.hits_dice = 8
            player.stats.max_hits = player.stats.hits_dice + player.characteristic.physique
            player.stats.hits = player.stats.max_hits
            player.otherHoldings.weapon.push("Простое оружие", "Короткий меч")
            player.skillsAndAbilities.push("Защита без доспехов", "Боевые исскуства")
            console.log("|  Первичная запись значений МОНАХА завершена успешно!                                                                           |")
        case "11":
            console.log("|  Вводим всякое от ПАЛАДИНА в лист персонажа...                                                                                 |")
            player.savingThrow.strenght = player.characteristic.strenght
            player.savingThrow.dexterity = player.characteristic.dexterity
            player.savingThrow.physique = player.characteristic.physique
            player.savingThrow.intelligence = player.characteristic.intelligence
            player.savingThrow.wisdom = player.characteristic.wisdom + player.skillBonus
            player.savingThrow.charisma = player.characteristic.charisma + player.skillBonus
            player.inventory.armors.armor = armors.heavyArmor.chainmail
            player.stats.ac = armors.heavyArmor.chainmail.ac
            player.inventory.firstWeapon = "Длинный меч"
            player.inventory.armors.shield = armors.shield
            player.stats.ac = player.stats.ac + armors.shield.ac
            player.inventory.defaultStorage.push("Священный амулет", "Метательное копье", "Метательное копье", "Метательное копье", "Метательное копье", "Метательное копье",)
            player.stats.initiative = player.characteristic.dexterity
            player.stats.class = "Паладин"
            player.stats.hits_dice = 10
            player.stats.max_hits = player.stats.hits_dice + player.characteristic.physique
            player.stats.hits = player.stats.max_hits
            player.otherHoldings.armor.push("Легкие доспехи", "Средние доспехи", "Тяжёлые доспехи", "Щиты")
            player.otherHoldings.weapon.push("Простое оружие", "Воинское оружие")
            player.skillsAndAbilities.push("Защита без доспехов", "Боевые исскуства")
            player.baseSpellcastingCharacteristic = "ХАРИЗМА"
             player.savingThrowDifficulty = 8 + player.characteristic.charisma + player.skillBonus
            player.spellAttackBonus = player.characteristic.charisma + player.skillBonus
            console.log("|  Первичная запись значений ПАЛАДИНА завершена успешно!                                                                         |")
        case "12":
            console.log("|  Вводим всякое от ПЛУТА в лист персонажа...                                                                                    |")
            player.savingThrow.strenght = player.characteristic.strenght
            player.savingThrow.dexterity = player.characteristic.dexterity + player.skillBonus
            player.savingThrow.physique = player.characteristic.physique
            player.savingThrow.intelligence = player.characteristic.intelligence + player.skillBonus
            player.savingThrow.wisdom = player.characteristic.wisdom
            player.savingThrow.charisma = player.characteristic.charisma
            player.inventory.armors.armor = armors.lightArmor.leatherArmor
            player.stats.ac = armors.lightArmor.leatherArmor.ac
            player.inventory.firstWeapon = "Рапира"
            player.inventory.secondWeapon = "Короткий лук"
            player.inventory.defaultStorage.push("Кинжал", "Кинжал")
            player.inventory.Activstorage.push("Набор взломщика", "Воровские инструменты")            
            player.stats.initiative = player.characteristic.dexterity
            player.stats.class = "Плут"
            player.stats.hits_dice = 8
            player.stats.max_hits = player.stats.hits_dice + player.characteristic.physique
            player.stats.hits = player.stats.max_hits
            player.otherHoldings.armor.push("Легкие доспехи")
            player.otherHoldings.weapon.push("Простое оружие", "Ручной арбалет", "Длинные мечи", "Рапиры", "Короткие мечи")
            player.otherHoldings.tools.push("Воровские инструменты")
            player.skillsAndAbilities.push("Скрытая атака", "Воровской жаргон")
            console.log("|  Первичная запись значений ПЛУТА завершена успешно!                                                                            |")
        case "13":
            console.log("|  Вводим всякое от СЛЕДОПЫТА в лист персонажа...                                                                                |")
            player.savingThrow.strenght = player.characteristic.strenght + player.skillBonus
            player.savingThrow.dexterity = player.characteristic.dexterity + player.skillBonus
            player.savingThrow.physique = player.characteristic.physique
            player.savingThrow.intelligence = player.characteristic.intelligence 
            player.savingThrow.wisdom = player.characteristic.wisdom 
            player.savingThrow.charisma = player.characteristic.charisma
            player.inventory.armors.armor = armors.lightArmor.leatherArmor
            player.stats.ac = armors.lightArmor.leatherArmor.ac
            player.inventory.firstWeapon = "Короткий меч"
            player.inventory.secondWeapon = "Длинный лук"
            player.inventory.defaultStorage.push("Короткий меч")            
            player.inventory.Activstorage.push("Деревянный посох")
            player.stats.initiative = player.characteristic.dexterity
            player.stats.class = "Следопыт"
            player.stats.hits_dice = 10
            player.stats.max_hits = player.stats.hits_dice + player.characteristic.physique
            player.stats.hits = player.stats.max_hits
            player.otherHoldings.armor.push("Легкие доспехи", "Средние доспехи", "Щиты")
            player.otherHoldings.weapon.push("Простое оружие", "Воинское оружие")
            player.skillsAndAbilities.push("Друидический язык")
            player.baseSpellcastingCharacteristic = "МУДРОСТЬ"
            player.savingThrowDifficulty = 8 + player.characteristic.wisdom + player.skillBonus
            player.spellAttackBonus = player.characteristic.wisdom + player.skillBonus
            console.log("|  Первичная запись значений СЛЕДОПЫТА завершена успешно!                                                                        |")
        case "14":
            console.log("|  Вводим всякое от ЧАРОДЕЯ в лист персонажа...                                                                                  |")
            player.savingThrow.strenght = player.characteristic.strenght
            player.savingThrow.dexterity = player.characteristic.dexterity
            player.savingThrow.physique = player.characteristic.physique + player.skillBonus
            player.savingThrow.intelligence = player.characteristic.intelligence
            player.savingThrow.wisdom = player.characteristic.wisdom
            player.savingThrow.charisma = player.characteristic.charisma + player.skillBonus
            player.inventory.firstWeapon = "Лёгкий арболет"
            player.inventory.defaultStorage.push("Кинжал", "Кинжал")
            player.inventory.Activstorage.push("Волшебная палочка")
            player.stats.initiative = player.characteristic.dexterity
            player.stats.class = "Чародей"
            player.stats.hits_dice = 6
            player.stats.max_hits = player.stats.hits_dice + player.characteristic.physique
            player.stats.hits = player.stats.max_hits
            player.otherHoldings.weapon.push("Боевой посох", "Дротик", "Кинжал", "Легкий арбалет", "Праща")
            player.baseSpellcastingCharacteristic = "ХАРИЗМА"
            player.savingThrowDifficulty = 8 + player.characteristic.charisma + player.skillBonus
            player.spellAttackBonus = player.characteristic.charisma + player.skillBonus
            player.cells.conspiracy = 4
            player.cells.famousSpells = 2
            player.cells.circle1 = 1
            console.log("|  Первичная запись значений ЧАРОДЕЯ завершена успешно!                                                                          |")
        
    }
}