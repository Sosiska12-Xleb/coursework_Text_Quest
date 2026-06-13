import readlineSync from 'readline-sync'
import fs from 'fs'
import { clearScreen } from '../menu/index.js'
import { arms } from "../items/arms.js"
import { armors } from "../items/armor.js"
import { magicArmor, magicWeapon, magicstaffs, artifacts, potions } from "../items/magicItems.js"
import { player } from "./player.js"
import { diceRandomizer } from '../diceRandomizer.js'

const coinsChecker = (price) => {
    if (player.inventory.coins >= price) {
        return true
    } else if (player.inventory.coins < price) {
        return false
    }
}

const sell = (returnFunction) => {
    if (player.inventory.storageItemsStats.length === 0) {
        return "У вас нет вещей в инвентаре."
    }
    console.log("Список ваших вещей:")
    let orderNum = 1
    let prices = []
    for (let i = 0; i < player.inventory.storageItemsStats.length; i += 1) {
        const item = player.inventory.storageItemsStats[i]
        orderNum += 1
        console.log(`${orderNum}. ${item.name} (Цена: ${Math.floor(item.price / 2)})`)
        prices.push({ price: Math.floor(item.price / 2), index: i })
    }
    console.log("Введите номер вещи, которую вы хотите продать. Для выхода введите 1.")
    const sellAction = readlineSync.question('Action: ')
    const numAction = parseInt(sellAction)
    
    if (numAction >= 2 && numAction <= prices.length + 1) {
        const itemData = prices[numAction - 2]
        player.inventory.coins += itemData.price
        player.inventory.storageItemsStats.splice(itemData.index, 1)
        console.log("Предмет продан!")
        return returnFunction()
    } else if (numAction === 1) {
        return returnFunction()
    } else {
        console.log("Некорректный ввод, введите число из списка.")
        return sell(returnFunction)
    }
}

export const storeLight1 = (message = "") => {
    clearScreen()
    console.log(message)
    const content = fs.readFileSync('assets/stores/storeLight1.txt', 'utf-8')
    console.log(content)
    const action = readlineSync.question('Action: ')
    switch(action) {
        case "1":
            console.log("Список товаров:")
            console.log(`1. ${arms.simpleHandWeapons.baton.name} (Цена: ${arms.simpleHandWeapons.baton.price}) (Описание: Простое оружие ближнего боя, урон ${arms.simpleHandWeapons.baton.damage})`)
            console.log(`2. ${arms.simpleHandWeapons.knife.name} (Цена: ${arms.simpleHandWeapons.knife.price}) (Описание: ${arms.simpleHandWeapons.knife.property.join(', ')}, урон ${arms.simpleHandWeapons.knife.damage})`)
            console.log(`3. ${arms.simpleHandWeapons.lightHammer.name} (Цена: ${arms.simpleHandWeapons.lightHammer.price}) (Описание: ${arms.simpleHandWeapons.lightHammer.property.join(', ')}, урон ${arms.simpleHandWeapons.lightHammer.damage})`)
            console.log(`4. ${arms.simpleRangeWeapon.sling.name} (Цена: ${arms.simpleRangeWeapon.sling.price}) (Описание: Простое дальнобойное оружие, урон ${arms.simpleRangeWeapon.sling.damage})`)
            console.log(`5. ${arms.simpleRangeWeapon.dart.name} x5 (Цена: ${arms.simpleRangeWeapon.dart.price * 5}) (Описание: ${arms.simpleRangeWeapon.dart.property.join(', ')}, урон ${arms.simpleRangeWeapon.dart.damage})`)
            console.log(`6. ${armors.lightArmor.leatherArmor.name} (Цена: ${armors.lightArmor.leatherArmor.price}) (Описание: Класс брони ${armors.lightArmor.leatherArmor.ac}, Скрытность: ${armors.lightArmor.leatherArmor.stealth})`)
            console.log(`7. ${armors.lightArmor.quiltedArmor.name} (Цена: ${armors.lightArmor.quiltedArmor.price}) (Описание: Класс брони ${armors.lightArmor.quiltedArmor.ac}, Скрытность: ${armors.lightArmor.quiltedArmor.stealth})`)
            console.log(`8. ${armors.shield.name} (Цена: ${armors.shield.price}) (Описание: Даёт +${armors.shield.ac} к классу брони)`)
            console.log(`9. ${potions.healingPotion.name} x2 (Цена: ${potions.healingPotion.price * 2}) (Описание: ${potions.healingPotion.explanation})`)
            console.log(`10. ${potions.beer.name} x2 (Цена: ${potions.beer.price * 2}) (Описание: ${potions.beer.explanation})`)
            console.log(`11. ${artifacts.amuletHits.name} (Цена: ${artifacts.amuletHits.price}) (Описание: ${artifacts.amuletHits.explanation})`)
            console.log(`12. ${arms.simpleHandWeapons.propellantSpear.name} x3 (Цена: ${arms.simpleHandWeapons.propellantSpear.price * 3}) (Описание: ${arms.simpleHandWeapons.propellantSpear.property.join(', ')}, урон ${arms.simpleHandWeapons.propellantSpear.damage})`)
            console.log(`13. ${arms.simpleHandWeapons.sickle.name} (Цена: ${arms.simpleHandWeapons.sickle.price}) (Описание: ${arms.simpleHandWeapons.sickle.property.join(', ')}, урон ${arms.simpleHandWeapons.sickle.damage})`)
            console.log(`14. ${arms.simpleRangeWeapon.lightCrossbow.name} (Цена: ${arms.simpleRangeWeapon.lightCrossbow.price}) (Описание: ${arms.simpleRangeWeapon.lightCrossbow.property.join(', ')}, урон ${arms.simpleRangeWeapon.lightCrossbow.damage})`)
            console.log(`15. ${potions.physiquePotion.name} (Цена: ${potions.physiquePotion.price}) (Описание: ${potions.physiquePotion.explanation})`)
            console.log("")
            console.log(`Ваш баланс: ${player.inventory.coins}`)
            console.log("")
            console.log("16. Выход.")
            const buyAction = readlineSync.question('Action: ')
            switch(buyAction) {
                case "1":
                    if (coinsChecker(arms.simpleHandWeapons.baton.price)) {
                        player.inventory.storageItemsStats.push(arms.simpleHandWeapons.baton)
                        player.inventory.coins -= arms.simpleHandWeapons.baton.price
                        return storeLight1("Предмет куплен!")
                    } else {
                        return storeLight1("У вас недостаточно средств.")
                    }
                case "2":
                    if (coinsChecker(arms.simpleHandWeapons.knife.price)) {
                        player.inventory.storageItemsStats.push(arms.simpleHandWeapons.knife)
                        player.inventory.coins -= arms.simpleHandWeapons.knife.price
                        return storeLight1("Предмет куплен!")
                    } else {
                        return storeLight1("У вас недостаточно средств.")
                    }
                case "3":
                    if (coinsChecker(arms.simpleHandWeapons.lightHammer.price)) {
                        player.inventory.storageItemsStats.push(arms.simpleHandWeapons.lightHammer)
                        player.inventory.coins -= arms.simpleHandWeapons.lightHammer.price
                        return storeLight1("Предмет куплен!")
                    } else {
                        return storeLight1("У вас недостаточно средств.")
                    }
                case "4":
                    if (coinsChecker(arms.simpleRangeWeapon.sling.price)) {
                        player.inventory.storageItemsStats.push(arms.simpleRangeWeapon.sling)
                        player.inventory.coins -= arms.simpleRangeWeapon.sling.price
                        return storeLight1("Предмет куплен!")
                    } else {
                        return storeLight1("У вас недостаточно средств.")
                    }
                case "5":
                    const dartPriceTotal = arms.simpleRangeWeapon.dart.price * 5
                    if (coinsChecker(dartPriceTotal)) {
                        for (let i = 0; i < 5; i++) {
                            player.inventory.storageItemsStats.push(arms.simpleRangeWeapon.dart)
                        }
                        player.inventory.coins -= dartPriceTotal
                        return storeLight1("5 дротиков куплено!")
                    } else {
                        return storeLight1("У вас недостаточно средств.")
                    }
                case "6":
                    if (coinsChecker(armors.lightArmor.leatherArmor.price)) {
                        player.inventory.storageItemsStats.push(armors.lightArmor.leatherArmor)
                        player.inventory.coins -= armors.lightArmor.leatherArmor.price
                        return storeLight1("Предмет куплен!")
                    } else {
                        return storeLight1("У вас недостаточно средств.")
                    }
                case "7":
                    if (coinsChecker(armors.lightArmor.quiltedArmor.price)) {
                        player.inventory.storageItemsStats.push(armors.lightArmor.quiltedArmor)
                        player.inventory.coins -= armors.lightArmor.quiltedArmor.price
                        return storeLight1("Предмет куплен!")
                    } else {
                        return storeLight1("У вас недостаточно средств.")
                    }
                case "8":
                    if (coinsChecker(armors.shield.price)) {
                        player.inventory.storageItemsStats.push(armors.shield)
                        player.inventory.coins -= armors.shield.price
                        return storeLight1("Предмет куплен!")
                    } else {
                        return storeLight1("У вас недостаточно средств.")
                    }
                case "9":
                    const healingPotionTotal = potions.healingPotion.price * 2
                    if (coinsChecker(healingPotionTotal)) {
                        for (let i = 0; i < 2; i++) {
                            player.inventory.storageItemsStats.push(potions.healingPotion)
                        }
                        player.inventory.coins -= healingPotionTotal
                        return storeLight1("2 зелья лечения куплено!")
                    } else {
                        return storeLight1("У вас недостаточно средств.")
                    }
                case "10":
                    const beerTotal = potions.beer.price * 2
                    if (coinsChecker(beerTotal)) {
                        for (let i = 0; i < 2; i++) {
                            player.inventory.storageItemsStats.push(potions.beer)
                        }
                        player.inventory.coins -= beerTotal
                        return storeLight1("2 пива куплено!")
                    } else {
                        return storeLight1("У вас недостаточно средств.")
                    }
                case "11":
                    if (coinsChecker(artifacts.amuletHits.price)) {
                        player.inventory.storageItemsStats.push(artifacts.amuletHits)
                        player.inventory.coins -= artifacts.amuletHits.price
                        return storeLight1("Предмет куплен!")
                    } else {
                        return storeLight1("У вас недостаточно средств.")
                    }
                case "12":
                    const spearTotal = arms.simpleHandWeapons.propellantSpear.price * 3
                    if (coinsChecker(spearTotal)) {
                        for (let i = 0; i < 3; i++) {
                            player.inventory.storageItemsStats.push(arms.simpleHandWeapons.propellantSpear)
                        }
                        player.inventory.coins -= spearTotal
                        return storeLight1("3 метательных копья куплено!")
                    } else {
                        return storeLight1("У вас недостаточно средств.")
                    }
                case "13":
                    if (coinsChecker(arms.simpleHandWeapons.sickle.price)) {
                        player.inventory.storageItemsStats.push(arms.simpleHandWeapons.sickle)
                        player.inventory.coins -= arms.simpleHandWeapons.sickle.price
                        return storeLight1("Предмет куплен!")
                    } else {
                        return storeLight1("У вас недостаточно средств.")
                    }
                case "14":
                    if (coinsChecker(arms.simpleRangeWeapon.lightCrossbow.price)) {
                        player.inventory.storageItemsStats.push(arms.simpleRangeWeapon.lightCrossbow)
                        player.inventory.coins -= arms.simpleRangeWeapon.lightCrossbow.price
                        return storeLight1("Предмет куплен!")
                    } else {
                        return storeLight1("У вас недостаточно средств.")
                    }
                case "15":
                    if (coinsChecker(potions.physiquePotion.price)) {
                        player.inventory.storageItemsStats.push(potions.physiquePotion)
                        player.inventory.coins -= potions.physiquePotion.price
                        return storeLight1("Предмет куплен!")
                    } else {
                        return storeLight1("У вас недостаточно средств.")
                    }
                case "16":
                    return storeLight1()
                default:
                    return storeLight1("Некорректный ввод, введите число нужного предмета.")
            }
        case "2":
            return storeLight1(sell(() => storeLight1()))
        case "3":
            console.log("\nСтарик смотрит на вас пустыми глазами. Вы замечаете, что сквозь его грудь видно стену.")
            console.log("Он не живой. Как и вы.")
            console.log("\nО чём спросить?")
            console.log("1. Спросить, помнит ли он свою смерть.")
            console.log("2. Спросить, зачем мы здесь.")
            console.log("3. Спросить, можно ли отсюда уйти.")
            console.log("4. Вернуться назад.")
            
            const talkAction = readlineSync.question('Action: ')
            
            switch(talkAction) {
                case "1":
                    console.log("\nСтарик медленно поднимает руку и смотрит на неё:")
                    console.log("\"Помню... клинок. Чей-то крик. Боль в груди. А потом... темнота. И я здесь. Как и ты. Как и все.\"")
                    console.log("Он опускает руку и снова смотрит сквозь вас.")
                    readlineSync.question("\nНажмите Enter, чтобы продолжить...")
                    return storeLight1()
                case "2":
                    console.log("\nОн пожимает плечами, и сквозь него проступает каменная кладка:")
                    console.log("\"Никто не знает. Мы просто здесь. Кто-то говорит, что это наказание. Кто-то — что чистилище. Я не знаю.\"")
                    console.log("\"Я знаю только, что монеты здесь нужны. Для чего — не помню.\"")
                    readlineSync.question("\nНажмите Enter, чтобы продолжить...")
                    return storeLight1()
                case "3":
                    console.log("\nСтарик долго молчит, затем тихо произносит:")
                    console.log("\"Говорят, внизу есть дверь. Те, кто прошёл через неё... не возвращались. Может, они ушли. Может, их больше нет.\"")
                    console.log("Он указывает куда-то в пол.")
                    readlineSync.question("\nНажмите Enter, чтобы продолжить...")
                    return storeLight1()
                case "4":
                    return storeLight1()
                default:
                    console.log("Старик застывает, превращаясь в каменное изваяние на несколько секунд, затем снова оживает.")
                    readlineSync.question("\nНажмите Enter, чтобы продолжить...")
                    return storeLight1()
            }
        case "4":
            return
        default:
            return storeLight1("Некорректный ввод, выберите действие из списка.")
    }
}

export const storeLight2 = (message = "") => {
    clearScreen()
    console.log(message)
    const content = fs.readFileSync('assets/stores/storeLight2.txt', 'utf-8')
    console.log(content)
    const action = readlineSync.question('Action: ')
    switch(action) {
        case "1":
            console.log("Список товаров:")
            console.log(`1. ${arms.simpleRangeWeapon.shortBow.name} (Цена: ${arms.simpleRangeWeapon.shortBow.price}) (Описание: ${arms.simpleRangeWeapon.shortBow.property.join(', ')}, урон ${arms.simpleRangeWeapon.shortBow.damage})`)
            console.log(`2. ${arms.simpleHandWeapons.battleStaff.name} (Цена: ${arms.simpleHandWeapons.battleStaff.price}) (Описание: Простое оружие ближнего боя, урон ${arms.simpleHandWeapons.battleStaff.damage})`)
            console.log(`3. ${arms.simpleHandWeapons.handAxe.name} (Цена: ${arms.simpleHandWeapons.handAxe.price}) (Описание: ${arms.simpleHandWeapons.handAxe.property.join(', ')}, урон ${arms.simpleHandWeapons.handAxe.damage})`)
            console.log(`4. ${arms.simpleHandWeapons.mace.name} (Цена: ${arms.simpleHandWeapons.mace.price}) (Описание: Простое оружие ближнего боя, урон ${arms.simpleHandWeapons.mace.damage})`)
            console.log(`5. ${arms.simpleHandWeapons.spear.name} (Цена: ${arms.simpleHandWeapons.spear.price}) (Описание: ${arms.simpleHandWeapons.spear.property.join(', ')}, урон ${arms.simpleHandWeapons.spear.damage})`)
            console.log(`6. ${arms.simpleHandWeapons.club.name} (Цена: ${arms.simpleHandWeapons.club.price}) (Описание: ${arms.simpleHandWeapons.club.property.join(', ')}, урон ${arms.simpleHandWeapons.club.damage})`)
            console.log(`7. ${armors.lightArmor.revetedLeatherArmor.name} (Цена: ${armors.lightArmor.revetedLeatherArmor.price}) (Описание: Класс брони ${armors.lightArmor.revetedLeatherArmor.ac}, Скрытность: ${armors.lightArmor.revetedLeatherArmor.stealth})`)
            console.log(`8. ${armors.mediumArmor.selfishArmor.name} (Цена: ${armors.mediumArmor.selfishArmor.price}) (Описание: Класс брони ${armors.mediumArmor.selfishArmor.ac}, Скрытность: ${armors.mediumArmor.selfishArmor.stealth})`)
            console.log(`9. ${potions.healingPotion.name} x3 (Цена: ${potions.healingPotion.price * 3}) (Описание: ${potions.healingPotion.explanation})`)
            console.log(`10. ${potions.temporaryHealingPotion.name} (Цена: ${potions.temporaryHealingPotion.price}) (Описание: ${potions.temporaryHealingPotion.explanation})`)
            console.log(`11. ${potions.kvas.name} (Цена: ${potions.kvas.price}) (Описание: ${potions.kvas.explanation})`)
            console.log(`12. ${artifacts.flowerCharisma.name} (Цена: ${artifacts.flowerCharisma.price}) (Описание: ${artifacts.flowerCharisma.explanation})`)
            console.log(`13. ${artifacts.bookmarkIntelligence.name} (Цена: ${artifacts.bookmarkIntelligence.price}) (Описание: ${artifacts.bookmarkIntelligence.explanation})`)
            console.log(`14. ${magicWeapon.poisonedSling.name} (Цена: ${magicWeapon.poisonedSling.price}) (Описание: ${magicWeapon.poisonedSling.explanation})`)
            console.log(`15. ${magicWeapon.sparklingLightHammer.name} (Цена: ${magicWeapon.sparklingLightHammer.price}) (Описание: ${magicWeapon.sparklingLightHammer.explanation})`)
            console.log("")
            console.log(`Ваш баланс: ${player.inventory.coins}`)
            console.log("")
            console.log("16. Выход.")
            const buyAction = readlineSync.question('Action: ')
            switch(buyAction) {
                case "1":
                    if (coinsChecker(arms.simpleRangeWeapon.shortBow.price)) {
                        player.inventory.storageItemsStats.push(arms.simpleRangeWeapon.shortBow)
                        player.inventory.coins -= arms.simpleRangeWeapon.shortBow.price
                        return storeLight2("Предмет куплен!")
                    } else {
                        return storeLight2("У вас недостаточно средств.")
                    }
                case "2":
                    if (coinsChecker(arms.simpleHandWeapons.battleStaff.price)) {
                        player.inventory.storageItemsStats.push(arms.simpleHandWeapons.battleStaff)
                        player.inventory.coins -= arms.simpleHandWeapons.battleStaff.price
                        return storeLight2("Предмет куплен!")
                    } else {
                        return storeLight2("У вас недостаточно средств.")
                    }
                case "3":
                    if (coinsChecker(arms.simpleHandWeapons.handAxe.price)) {
                        player.inventory.storageItemsStats.push(arms.simpleHandWeapons.handAxe)
                        player.inventory.coins -= arms.simpleHandWeapons.handAxe.price
                        return storeLight2("Предмет куплен!")
                    } else {
                        return storeLight2("У вас недостаточно средств.")
                    }
                case "4":
                    if (coinsChecker(arms.simpleHandWeapons.mace.price)) {
                        player.inventory.storageItemsStats.push(arms.simpleHandWeapons.mace)
                        player.inventory.coins -= arms.simpleHandWeapons.mace.price
                        return storeLight2("Предмет куплен!")
                    } else {
                        return storeLight2("У вас недостаточно средств.")
                    }
                case "5":
                    if (coinsChecker(arms.simpleHandWeapons.spear.price)) {
                        player.inventory.storageItemsStats.push(arms.simpleHandWeapons.spear)
                        player.inventory.coins -= arms.simpleHandWeapons.spear.price
                        return storeLight2("Предмет куплен!")
                    } else {
                        return storeLight2("У вас недостаточно средств.")
                    }
                case "6":
                    if (coinsChecker(arms.simpleHandWeapons.club.price)) {
                        player.inventory.storageItemsStats.push(arms.simpleHandWeapons.club)
                        player.inventory.coins -= arms.simpleHandWeapons.club.price
                        return storeLight2("Предмет куплен!")
                    } else {
                        return storeLight2("У вас недостаточно средств.")
                    }
                case "7":
                    if (coinsChecker(armors.lightArmor.revetedLeatherArmor.price)) {
                        player.inventory.storageItemsStats.push(armors.lightArmor.revetedLeatherArmor)
                        player.inventory.coins -= armors.lightArmor.revetedLeatherArmor.price
                        return storeLight2("Предмет куплен!")
                    } else {
                        return storeLight2("У вас недостаточно средств.")
                    }
                case "8":
                    if (coinsChecker(armors.mediumArmor.selfishArmor.price)) {
                        player.inventory.storageItemsStats.push(armors.mediumArmor.selfishArmor)
                        player.inventory.coins -= armors.mediumArmor.selfishArmor.price
                        return storeLight2("Предмет куплен!")
                    } else {
                        return storeLight2("У вас недостаточно средств.")
                    }
                case "9":
                    const healingTotal = potions.healingPotion.price * 3
                    if (coinsChecker(healingTotal)) {
                        for (let i = 0; i < 3; i++) {
                            player.inventory.storageItemsStats.push(potions.healingPotion)
                        }
                        player.inventory.coins -= healingTotal
                        return storeLight2("3 зелья лечения куплено!")
                    } else {
                        return storeLight2("У вас недостаточно средств.")
                    }
                case "10":
                    if (coinsChecker(potions.temporaryHealingPotion.price)) {
                        player.inventory.storageItemsStats.push(potions.temporaryHealingPotion)
                        player.inventory.coins -= potions.temporaryHealingPotion.price
                        return storeLight2("Предмет куплен!")
                    } else {
                        return storeLight2("У вас недостаточно средств.")
                    }
                case "11":
                    if (coinsChecker(potions.kvas.price)) {
                        player.inventory.storageItemsStats.push(potions.kvas)
                        player.inventory.coins -= potions.kvas.price
                        return storeLight2("Предмет куплен!")
                    } else {
                        return storeLight2("У вас недостаточно средств.")
                    }
                case "12":
                    if (coinsChecker(artifacts.flowerCharisma.price)) {
                        player.inventory.storageItemsStats.push(artifacts.flowerCharisma)
                        player.inventory.coins -= artifacts.flowerCharisma.price
                        return storeLight2("Предмет куплен!")
                    } else {
                        return storeLight2("У вас недостаточно средств.")
                    }
                case "13":
                    if (coinsChecker(artifacts.bookmarkIntelligence.price)) {
                        player.inventory.storageItemsStats.push(artifacts.bookmarkIntelligence)
                        player.inventory.coins -= artifacts.bookmarkIntelligence.price
                        return storeLight2("Предмет куплен!")
                    } else {
                        return storeLight2("У вас недостаточно средств.")
                    }
                case "14":
                    if (coinsChecker(magicWeapon.poisonedSling.price)) {
                        player.inventory.storageItemsStats.push(magicWeapon.poisonedSling)
                        player.inventory.coins -= magicWeapon.poisonedSling.price
                        return storeLight2("Предмет куплен!")
                    } else {
                        return storeLight2("У вас недостаточно средств.")
                    }
                case "15":
                    if (coinsChecker(magicWeapon.sparklingLightHammer.price)) {
                        player.inventory.storageItemsStats.push(magicWeapon.sparklingLightHammer)
                        player.inventory.coins -= magicWeapon.sparklingLightHammer.price
                        return storeLight2("Предмет куплен!")
                    } else {
                        return storeLight2("У вас недостаточно средств.")
                    }
                case "16":
                    return storeLight2()
                default:
                    return storeLight2("Некорректный ввод, введите число нужного предмета.")
            }
        case "2":
            return storeLight2(sell(() => storeLight2()))
        case "3":
            console.log("\nЖенщина сидит на камне и перебирает чётки. Вы замечаете, что её пальцы иногда проходят сквозь костяшки.")
            console.log("Она поднимает на вас пустые глаза.")
            console.log("\nО чём спросить?")
            console.log("1. Спросить, как она здесь оказалась.")
            console.log("2. Спросить, что будет дальше.")
            console.log("3. Спросить, помнит ли она своё имя.")
            console.log("4. Вернуться назад.")
            
            const talkAction2 = readlineSync.question('Action: ')
            
            switch(talkAction2) {
                case "1":
                    console.log("\nОна усмехается, и её лицо на секунду становится молодым, затем снова старым:")
                    console.log("\"Я умерла. Как и ты. Как и все здесь. Клинок, яд, падение... какая разница? Результат один.\"")
                    console.log("Она сжимает чётки, и те рассыпаются в прах, а затем снова появляются в её руках.")
                    readlineSync.question("\nНажмите Enter, чтобы продолжить...")
                    return storeLight2()
                case "2":
                    console.log("\nОна долго молчит, затем указывает вниз:")
                    console.log("\"Дальше? Ниже. Всегда ниже. Говорят, на самом дне есть дверь. Но я не знаю никого, кто бы через неё прошёл.\"")
                    console.log("\"Может, те, кто прошёл, просто перестали быть.\"")
                    readlineSync.question("\nНажмите Enter, чтобы продолжить...")
                    return storeLight2()
                case "3":
                    console.log("\nОна замирает, и её лицо становится пустым, как белый лист:")
                    console.log("\"Нет. Я не помню. Здесь никто не помнит. Только миг. Только боль. А потом пустота.\"")
                    console.log("\"Зато я помню, сколько стоят мои товары. Странно, правда?\"")
                    readlineSync.question("\nНажмите Enter, чтобы продолжить...")
                    return storeLight2()
                case "4":
                    return storeLight2()
                default:
                    console.log("Она исчезает на секунду, затем снова появляется на том же месте.")
                    readlineSync.question("\nНажмите Enter, чтобы продолжить...")
                    return storeLight2()
            }
        case "4":
            return
        default:
            return storeLight2("Некорректный ввод, выберите действие из списка.")
    }
}

export const storeLight3 = (message = "") => {
    clearScreen()
    console.log(message)
    const content = fs.readFileSync('assets/stores/storeLight3.txt', 'utf-8')
    console.log(content)
    const action = readlineSync.question('Action: ')
    switch(action) {
        case "1":
            console.log("Список товаров:")
            console.log(`1. ${arms.simpleHandWeapons.baton.name} x2 (Цена: ${arms.simpleHandWeapons.baton.price * 2}) (Описание: Простое оружие ближнего боя, урон ${arms.simpleHandWeapons.baton.damage})`)
            console.log(`2. ${arms.simpleHandWeapons.knife.name} x2 (Цена: ${arms.simpleHandWeapons.knife.price * 2}) (Описание: ${arms.simpleHandWeapons.knife.property.join(', ')}, урон ${arms.simpleHandWeapons.knife.damage})`)
            console.log(`3. ${arms.simpleRangeWeapon.lightCrossbow.name} (Цена: ${arms.simpleRangeWeapon.lightCrossbow.price}) (Описание: ${arms.simpleRangeWeapon.lightCrossbow.property.join(', ')}, урон ${arms.simpleRangeWeapon.lightCrossbow.damage})`)
            console.log(`4. ${arms.simpleRangeWeapon.dart.name} x10 (Цена: ${arms.simpleRangeWeapon.dart.price * 10}) (Описание: ${arms.simpleRangeWeapon.dart.property.join(', ')}, урон ${arms.simpleRangeWeapon.dart.damage})`)
            console.log(`5. ${arms.simpleRangeWeapon.sling.name} (Цена: ${arms.simpleRangeWeapon.sling.price}) (Описание: Простое дальнобойное оружие, урон ${arms.simpleRangeWeapon.sling.damage})`)
            console.log(`6. ${armors.mediumArmor.chainmailShirt.name} (Цена: ${armors.mediumArmor.chainmailShirt.price}) (Описание: Класс брони ${armors.mediumArmor.chainmailShirt.ac}, Скрытность: ${armors.mediumArmor.chainmailShirt.stealth})`)
            console.log(`7. ${armors.shield.name} (Цена: ${armors.shield.price}) (Описание: Даёт +${armors.shield.ac} к классу брони)`)
            console.log(`8. ${armors.heavyArmor.ringShapedArmor.name} (Цена: ${armors.heavyArmor.ringShapedArmor.price}) (Описание: Класс брони ${armors.heavyArmor.ringShapedArmor.ac})`)
            console.log(`9. ${potions.dexterityPotion.name} (Цена: ${potions.dexterityPotion.price}) (Описание: ${potions.dexterityPotion.explanation})`)
            console.log(`10. ${potions.strenghtPotion.name} (Цена: ${potions.strenghtPotion.price}) (Описание: ${potions.strenghtPotion.explanation})`)
            console.log(`11. ${potions.bhealingPotion.name} (Цена: ${potions.bhealingPotion.price}) (Описание: ${potions.bhealingPotion.explanation})`)
            console.log(`12. ${potions.beer.name} x3 (Цена: ${potions.beer.price * 3}) (Описание: ${potions.beer.explanation})`)
            console.log(`13. ${artifacts.stonePhysique.name} (Цена: ${artifacts.stonePhysique.price}) (Описание: ${artifacts.stonePhysique.explanation})`)
            console.log(`14. ${artifacts.stylusDexterity.name} (Цена: ${artifacts.stylusDexterity.price}) (Описание: ${artifacts.stylusDexterity.explanation})`)
            console.log(`15. ${magicWeapon.sparklingBattleStaff.name} (Цена: ${magicWeapon.sparklingBattleStaff.price}) (Описание: ${magicWeapon.sparklingBattleStaff.explanation})`)
            console.log("")
            console.log(`Ваш баланс: ${player.inventory.coins}`)
            console.log("")
            console.log("16. Выход.")
            const buyAction = readlineSync.question('Action: ')
            switch(buyAction) {
                case "1":
                    const batonTotal = arms.simpleHandWeapons.baton.price * 2
                    if (coinsChecker(batonTotal)) {
                        for (let i = 0; i < 2; i++) {
                            player.inventory.storageItemsStats.push(arms.simpleHandWeapons.baton)
                        }
                        player.inventory.coins -= batonTotal
                        return storeLight3("2 дубинки куплено!")
                    } else {
                        return storeLight3("У вас недостаточно средств.")
                    }
                case "2":
                    const knifeTotal = arms.simpleHandWeapons.knife.price * 2
                    if (coinsChecker(knifeTotal)) {
                        for (let i = 0; i < 2; i++) {
                            player.inventory.storageItemsStats.push(arms.simpleHandWeapons.knife)
                        }
                        player.inventory.coins -= knifeTotal
                        return storeLight3("2 кинжала куплено!")
                    } else {
                        return storeLight3("У вас недостаточно средств.")
                    }
                case "3":
                    if (coinsChecker(arms.simpleRangeWeapon.lightCrossbow.price)) {
                        player.inventory.storageItemsStats.push(arms.simpleRangeWeapon.lightCrossbow)
                        player.inventory.coins -= arms.simpleRangeWeapon.lightCrossbow.price
                        return storeLight3("Предмет куплен!")
                    } else {
                        return storeLight3("У вас недостаточно средств.")
                    }
                case "4":
                    const dartTotal = arms.simpleRangeWeapon.dart.price * 10
                    if (coinsChecker(dartTotal)) {
                        for (let i = 0; i < 10; i++) {
                            player.inventory.storageItemsStats.push(arms.simpleRangeWeapon.dart)
                        }
                        player.inventory.coins -= dartTotal
                        return storeLight3("10 дротиков куплено!")
                    } else {
                        return storeLight3("У вас недостаточно средств.")
                    }
                case "5":
                    if (coinsChecker(arms.simpleRangeWeapon.sling.price)) {
                        player.inventory.storageItemsStats.push(arms.simpleRangeWeapon.sling)
                        player.inventory.coins -= arms.simpleRangeWeapon.sling.price
                        return storeLight3("Предмет куплен!")
                    } else {
                        return storeLight3("У вас недостаточно средств.")
                    }
                case "6":
                    if (coinsChecker(armors.mediumArmor.chainmailShirt.price)) {
                        player.inventory.storageItemsStats.push(armors.mediumArmor.chainmailShirt)
                        player.inventory.coins -= armors.mediumArmor.chainmailShirt.price
                        return storeLight3("Предмет куплен!")
                    } else {
                        return storeLight3("У вас недостаточно средств.")
                    }
                case "7":
                    if (coinsChecker(armors.shield.price)) {
                        player.inventory.storageItemsStats.push(armors.shield)
                        player.inventory.coins -= armors.shield.price
                        return storeLight3("Предмет куплен!")
                    } else {
                        return storeLight3("У вас недостаточно средств.")
                    }
                case "8":
                    if (coinsChecker(armors.heavyArmor.ringShapedArmor.price)) {
                        player.inventory.storageItemsStats.push(armors.heavyArmor.ringShapedArmor)
                        player.inventory.coins -= armors.heavyArmor.ringShapedArmor.price
                        return storeLight3("Предмет куплен!")
                    } else {
                        return storeLight3("У вас недостаточно средств.")
                    }
                case "9":
                    if (coinsChecker(potions.dexterityPotion.price)) {
                        player.inventory.storageItemsStats.push(potions.dexterityPotion)
                        player.inventory.coins -= potions.dexterityPotion.price
                        return storeLight3("Предмет куплен!")
                    } else {
                        return storeLight3("У вас недостаточно средств.")
                    }
                case "10":
                    if (coinsChecker(potions.strenghtPotion.price)) {
                        player.inventory.storageItemsStats.push(potions.strenghtPotion)
                        player.inventory.coins -= potions.strenghtPotion.price
                        return storeLight3("Предмет куплен!")
                    } else {
                        return storeLight3("У вас недостаточно средств.")
                    }
                case "11":
                    if (coinsChecker(potions.bhealingPotion.price)) {
                        player.inventory.storageItemsStats.push(potions.bhealingPotion)
                        player.inventory.coins -= potions.bhealingPotion.price
                        return storeLight3("Предмет куплен!")
                    } else {
                        return storeLight3("У вас недостаточно средств.")
                    }
                case "12":
                    const beerTotal = potions.beer.price * 3
                    if (coinsChecker(beerTotal)) {
                        for (let i = 0; i < 3; i++) {
                            player.inventory.storageItemsStats.push(potions.beer)
                        }
                        player.inventory.coins -= beerTotal
                        return storeLight3("3 пива куплено!")
                    } else {
                        return storeLight3("У вас недостаточно средств.")
                    }
                case "13":
                    if (coinsChecker(artifacts.stonePhysique.price)) {
                        player.inventory.storageItemsStats.push(artifacts.stonePhysique)
                        player.inventory.coins -= artifacts.stonePhysique.price
                        return storeLight3("Предмет куплен!")
                    } else {
                        return storeLight3("У вас недостаточно средств.")
                    }
                case "14":
                    if (coinsChecker(artifacts.stylusDexterity.price)) {
                        player.inventory.storageItemsStats.push(artifacts.stylusDexterity)
                        player.inventory.coins -= artifacts.stylusDexterity.price
                        return storeLight3("Предмет куплен!")
                    } else {
                        return storeLight3("У вас недостаточно средств.")
                    }
                case "15":
                    if (coinsChecker(magicWeapon.sparklingBattleStaff.price)) {
                        player.inventory.storageItemsStats.push(magicWeapon.sparklingBattleStaff)
                        player.inventory.coins -= magicWeapon.sparklingBattleStaff.price
                        return storeLight3("Предмет куплен!")
                    } else {
                        return storeLight3("У вас недостаточно средств.")
                    }
                case "16":
                    return storeLight3()
                default:
                    return storeLight3("Некорректный ввод, введите число нужного предмета.")
            }
        case "2":
            return storeLight3(sell(() => storeLight3()))
        case "3":
            console.log("\nФигура в бинтах сидит в углу и тихо плачет. Слёз нет, но тело сотрясается.")
            console.log("Вы подходите ближе, и она поднимает голову. Под бинтами — пустота.")
            console.log("\nВы можете:")
            console.log("1. Спросить, почему она плачет.")
            console.log("2. Спросить, помнит ли она что-то.")
            console.log("3. Просто постоять рядом.")
            console.log("4. Вернуться назад.")
            
            const talkAction3 = readlineSync.question('Action: ')
            
            switch(talkAction3) {
                case "1":
                    console.log("\nИз-под бинтов доносится шёпот:")
                    console.log("\"Я не знаю. Я всегда плачу. Здесь нет слёз, но тело помнит. Оно помнит боль, а я не знаю — чью.\"")
                    console.log("Она снова начинает сотрясаться в беззвучном плаче.")
                    readlineSync.question("\nНажмите Enter, чтобы продолжить...")
                    return storeLight3()
                case "2":
                    console.log("\nОна замирает, затем медленно качает головой:")
                    console.log("\"Я помню... холод. И темноту. И чей-то крик. Может, мой. Может, не мой. Здесь всё чужое.\"")
                    console.log("Она протягивает бинтованную руку, но вы не решаетесь её коснуться.")
                    readlineSync.question("\nНажмите Enter, чтобы продолжить...")
                    return storeLight3()
                case "3":
                    console.log("\nВы молча стоите рядом. Она постепенно успокаивается.")
                    console.log("Через несколько минут она поднимает голову и тихо говорит:")
                    console.log("\"Спасибо. Я почти забыла, что здесь есть кто-то кроме меня.\"")
                    console.log("Бинты слегка шевелятся, будто под ними кто-то улыбнулся.")
                    readlineSync.question("\nНажмите Enter, чтобы продолжить...")
                    return storeLight3()
                case "4":
                    return storeLight3()
                default:
                    console.log("Она исчезает. Вы остаётесь один в тишине.")
                    readlineSync.question("\nНажмите Enter, чтобы продолжить...")
                    return storeLight3()
            }
        case "4":
            return
        default:
            return storeLight3("Некорректный ввод, выберите действие из списка.")
    }
}

export const storeMedium1 = (message = "") => {
    clearScreen()
    console.log(message)
    const content = fs.readFileSync('assets/stores/storeMedium1.txt', 'utf-8')
    console.log(content)
    const action = readlineSync.question('Action: ')
    switch(action) {
        case "1":
            console.log("Список товаров:")
            console.log(`1. ${arms.militaryHandWeapons.longSword.name} (Цена: ${arms.militaryHandWeapons.longSword.price}) (Описание: Воинское оружие, урон ${arms.militaryHandWeapons.longSword.damage})`)
            console.log(`2. ${arms.militaryHandWeapons.warAxe.name} (Цена: ${arms.militaryHandWeapons.warAxe.price}) (Описание: Воинское оружие, урон ${arms.militaryHandWeapons.warAxe.damage})`)
            console.log(`3. ${arms.militaryHandWeapons.warHammer.name} (Цена: ${arms.militaryHandWeapons.warHammer.price}) (Описание: Воинское оружие, урон ${arms.militaryHandWeapons.warHammer.damage})`)
            console.log(`4. ${arms.militaryHandWeapons.shortSword.name} (Цена: ${arms.militaryHandWeapons.shortSword.price}) (Описание: ${arms.militaryHandWeapons.shortSword.property.join(', ')}, урон ${arms.militaryHandWeapons.shortSword.damage})`)
            console.log(`5. ${arms.militaryHandWeapons.glaive.name} (Цена: ${arms.militaryHandWeapons.glaive.price}) (Описание: ${arms.militaryHandWeapons.glaive.property.join(', ')}, урон ${arms.militaryHandWeapons.glaive.damage})`)
            console.log(`6. ${arms.militaryRangeWeapon.heavyCrossbow.name} (Цена: ${arms.militaryRangeWeapon.heavyCrossbow.price}) (Описание: ${arms.militaryRangeWeapon.heavyCrossbow.property.join(', ')}, урон ${arms.militaryRangeWeapon.heavyCrossbow.damage})`)
            console.log(`7. ${arms.militaryRangeWeapon.longBow.name} (Цена: ${arms.militaryRangeWeapon.longBow.price}) (Описание: ${arms.militaryRangeWeapon.longBow.property.join(', ')}, урон ${arms.militaryRangeWeapon.longBow.damage})`)
            console.log(`8. ${armors.mediumArmor.scalyArmor.name} (Цена: ${armors.mediumArmor.scalyArmor.price}) (Описание: Класс брони ${armors.mediumArmor.scalyArmor.ac})`)
            console.log(`9. ${armors.mediumArmor.cuirass.name} (Цена: ${armors.mediumArmor.cuirass.price}) (Описание: Класс брони ${armors.mediumArmor.cuirass.ac})`)
            console.log(`10. ${armors.heavyArmor.chainmail.name} (Цена: ${armors.heavyArmor.chainmail.price}) (Описание: Класс брони ${armors.heavyArmor.chainmail.ac})`)
            console.log(`11. ${potions.protectionPotion.name} (Цена: ${potions.protectionPotion.price}) (Описание: ${potions.protectionPotion.explanation})`)
            console.log(`12. ${potions.btemporaryHealingPotion.name} (Цена: ${potions.btemporaryHealingPotion.price}) (Описание: ${potions.btemporaryHealingPotion.explanation})`)
            console.log(`13. ${potions.ehealingPotion.name} (Цена: ${potions.ehealingPotion.price}) (Описание: ${potions.ehealingPotion.explanation})`)
            console.log(`14. ${artifacts.protectionRing.name} (Цена: ${artifacts.protectionRing.price}) (Описание: ${artifacts.protectionRing.explanation})`)
            console.log(`15. ${artifacts.tacticCrystal.name} (Цена: ${artifacts.tacticCrystal.price}) (Описание: ${artifacts.tacticCrystal.explanation})`)
            console.log("")
            console.log(`Ваш баланс: ${player.inventory.coins}`)
            console.log("")
            console.log("16. Выход.")
            const buyAction = readlineSync.question('Action: ')
            switch(buyAction) {
                case "1":
                    if (coinsChecker(arms.militaryHandWeapons.longSword.price)) {
                        player.inventory.storageItemsStats.push(arms.militaryHandWeapons.longSword)
                        player.inventory.coins -= arms.militaryHandWeapons.longSword.price
                        return storeMedium1("Предмет куплен!")
                    } else {
                        return storeMedium1("У вас недостаточно средств.")
                    }
                case "2":
                    if (coinsChecker(arms.militaryHandWeapons.warAxe.price)) {
                        player.inventory.storageItemsStats.push(arms.militaryHandWeapons.warAxe)
                        player.inventory.coins -= arms.militaryHandWeapons.warAxe.price
                        return storeMedium1("Предмет куплен!")
                    } else {
                        return storeMedium1("У вас недостаточно средств.")
                    }
                case "3":
                    if (coinsChecker(arms.militaryHandWeapons.warHammer.price)) {
                        player.inventory.storageItemsStats.push(arms.militaryHandWeapons.warHammer)
                        player.inventory.coins -= arms.militaryHandWeapons.warHammer.price
                        return storeMedium1("Предмет куплен!")
                    } else {
                        return storeMedium1("У вас недостаточно средств.")
                    }
                case "4":
                    if (coinsChecker(arms.militaryHandWeapons.shortSword.price)) {
                        player.inventory.storageItemsStats.push(arms.militaryHandWeapons.shortSword)
                        player.inventory.coins -= arms.militaryHandWeapons.shortSword.price
                        return storeMedium1("Предмет куплен!")
                    } else {
                        return storeMedium1("У вас недостаточно средств.")
                    }
                case "5":
                    if (coinsChecker(arms.militaryHandWeapons.glaive.price)) {
                        player.inventory.storageItemsStats.push(arms.militaryHandWeapons.glaive)
                        player.inventory.coins -= arms.militaryHandWeapons.glaive.price
                        return storeMedium1("Предмет куплен!")
                    } else {
                        return storeMedium1("У вас недостаточно средств.")
                    }
                case "6":
                    if (coinsChecker(arms.militaryRangeWeapon.heavyCrossbow.price)) {
                        player.inventory.storageItemsStats.push(arms.militaryRangeWeapon.heavyCrossbow)
                        player.inventory.coins -= arms.militaryRangeWeapon.heavyCrossbow.price
                        return storeMedium1("Предмет куплен!")
                    } else {
                        return storeMedium1("У вас недостаточно средств.")
                    }
                case "7":
                    if (coinsChecker(arms.militaryRangeWeapon.longBow.price)) {
                        player.inventory.storageItemsStats.push(arms.militaryRangeWeapon.longBow)
                        player.inventory.coins -= arms.militaryRangeWeapon.longBow.price
                        return storeMedium1("Предмет куплен!")
                    } else {
                        return storeMedium1("У вас недостаточно средств.")
                    }
                case "8":
                    if (coinsChecker(armors.mediumArmor.scalyArmor.price)) {
                        player.inventory.storageItemsStats.push(armors.mediumArmor.scalyArmor)
                        player.inventory.coins -= armors.mediumArmor.scalyArmor.price
                        return storeMedium1("Предмет куплен!")
                    } else {
                        return storeMedium1("У вас недостаточно средств.")
                    }
                case "9":
                    if (coinsChecker(armors.mediumArmor.cuirass.price)) {
                        player.inventory.storageItemsStats.push(armors.mediumArmor.cuirass)
                        player.inventory.coins -= armors.mediumArmor.cuirass.price
                        return storeMedium1("Предмет куплен!")
                    } else {
                        return storeMedium1("У вас недостаточно средств.")
                    }
                case "10":
                    if (coinsChecker(armors.heavyArmor.chainmail.price)) {
                        player.inventory.storageItemsStats.push(armors.heavyArmor.chainmail)
                        player.inventory.coins -= armors.heavyArmor.chainmail.price
                        return storeMedium1("Предмет куплен!")
                    } else {
                        return storeMedium1("У вас недостаточно средств.")
                    }
                case "11":
                    if (coinsChecker(potions.protectionPotion.price)) {
                        player.inventory.storageItemsStats.push(potions.protectionPotion)
                        player.inventory.coins -= potions.protectionPotion.price
                        return storeMedium1("Предмет куплен!")
                    } else {
                        return storeMedium1("У вас недостаточно средств.")
                    }
                case "12":
                    if (coinsChecker(potions.btemporaryHealingPotion.price)) {
                        player.inventory.storageItemsStats.push(potions.btemporaryHealingPotion)
                        player.inventory.coins -= potions.btemporaryHealingPotion.price
                        return storeMedium1("Предмет куплен!")
                    } else {
                        return storeMedium1("У вас недостаточно средств.")
                    }
                case "13":
                    if (coinsChecker(potions.ehealingPotion.price)) {
                        player.inventory.storageItemsStats.push(potions.ehealingPotion)
                        player.inventory.coins -= potions.ehealingPotion.price
                        return storeMedium1("Предмет куплен!")
                    } else {
                        return storeMedium1("У вас недостаточно средств.")
                    }
                case "14":
                    if (coinsChecker(artifacts.protectionRing.price)) {
                        player.inventory.storageItemsStats.push(artifacts.protectionRing)
                        player.inventory.coins -= artifacts.protectionRing.price
                        return storeMedium1("Предмет куплен!")
                    } else {
                        return storeMedium1("У вас недостаточно средств.")
                    }
                case "15":
                    if (coinsChecker(artifacts.tacticCrystal.price)) {
                        player.inventory.storageItemsStats.push(artifacts.tacticCrystal)
                        player.inventory.coins -= artifacts.tacticCrystal.price
                        return storeMedium1("Предмет куплен!")
                    } else {
                        return storeMedium1("У вас недостаточно средств.")
                    }
                case "16":
                    return storeMedium1()
                default:
                    return storeMedium1("Некорректный ввод, введите число нужного предмета.")
            }
        case "2":
            return storeMedium1(sell(() => storeMedium1()))
        case "3":
            console.log("\nПеред вами — металлическая консоль, вмонтированная в стену. Экран треснут, но работает.")
            console.log("Механический голос звучит из динамиков, но в нём слышны помехи и странные звуки, похожие на вздохи.")
            console.log("\nДоступные запросы:")
            console.log("1. Запросить данные о прибывших.")
            console.log("2. Запросить информацию о более глубоких уровнях.")
            console.log("3. Запросить данные о выходе.")
            console.log("4. Завершить сеанс.")
            
            const mechAction = readlineSync.question('Action: ')
            
            switch(mechAction) {
                case "1":
                    console.log("\nГолос прерывается, затем произносит:")
                    console.log("ЗАПРОС О ПРИБЫВШИХ. . . ПОСЛЕДНИЙ ПРИБЫВШИЙ: ВЫ. 0 ДНЕЙ НАЗАД.")
                    console.log("ПРЕДЫДУЩИЙ: НЕИЗВЕСТЕН. ДАННЫЕ УТЕРЯНЫ.")
                    console.log("ВСЕГО ЗАРЕГИСТРИРОВАННЫХ: 14732. ТЕКУЩИХ АКТИВНЫХ: 1.")
                    console.log("ГОЛОС: ОСТАЛЬНЫЕ. . . УШЛИ ГЛУБЖЕ.")
                    readlineSync.question("\nНажмите Enter, чтобы продолжить...")
                    return storeMedium1()
                case "2":
                    console.log("\nЭкран мигает, показывая карту, покрытую красными пятнами:")
                    console.log("УРОВЕНЬ 7: ТЕХНО-ТУННЕЛИ. ОПАСНОСТЬ: ВЫСОКАЯ.")
                    console.log("УРОВЕНЬ 8: НАЧАЛО ХРАМА. ОПАСНОСТЬ: КРИТИЧЕСКАЯ.")
                    console.log("УРОВЕНЬ 9 И НИЖЕ: ДАННЫЕ ОТСУТСТВУЮТ.")
                    console.log("ГОЛОС: НЕ РЕКОМЕНДУЕТСЯ СПУСКАТЬСЯ НИЖЕ УРОВНЯ 7.")
                    readlineSync.question("\nНажмите Enter, чтобы продолжить. . .")
                    return storeMedium1()
                case "3":
                    console.log("\nГолос замолкает. В тишине слышно только потрескивание динамиков.")
                    console.log("Затем шёпотом, почти беззвучно:")
                    console.log(". . . . КРИТИЧЕСКИЯ ОШИБКА. ИМПОРТИРОВАНОГО ОБЪЕКТА НЕ СУЩЕСТВУЕТ.")
                    console.log("Экран гаснет на секунду, затем снова загорается.")
                    readlineSync.question("\nНажмите Enter, чтобы продолжить...")
                    return storeMedium1()
                case "4":
                    return storeMedium1()
                default:
                    console.log("Консоль издаёт звук, похожий на вздох, и замолкает.")
                    readlineSync.question("\nНажмите Enter, чтобы продолжить...")
                    return storeMedium1()
            }
        case "4":
            return
        default:
            return storeMedium1("Некорректный ввод, выберите действие из списка.")
    }
}

export const storeMedium2 = (message = "") => {
    clearScreen()
    console.log(message)
    const content = fs.readFileSync('assets/stores/storeMedium2.txt', 'utf-8')
    console.log(content)
    const action = readlineSync.question('Action: ')
    switch(action) {
        case "1":
            console.log("Список товаров:")
            console.log(`1. ${magicstaffs.basicMagicStaff.name} (Цена: ${magicstaffs.basicMagicStaff.price}) (Описание: ${magicstaffs.basicMagicStaff.explanation})`)
            console.log(`2. ${magicstaffs.basicHealStaff.name} (Цена: ${magicstaffs.basicHealStaff.price}) (Описание: ${magicstaffs.basicHealStaff.explanation})`)
            console.log(`3. ${magicstaffs.basicPoisonedStaff.name} (Цена: ${magicstaffs.basicPoisonedStaff.price}) (Описание: ${magicstaffs.basicPoisonedStaff.explanation})`)
            console.log(`4. ${magicWeapon.sparklingChain.name} (Цена: ${magicWeapon.sparklingChain.price}) (Описание: ${magicWeapon.sparklingChain.explanation})`)
            console.log(`5. ${magicWeapon.sparklingMorgenstern.name} (Цена: ${magicWeapon.sparklingMorgenstern.price}) (Описание: ${magicWeapon.sparklingMorgenstern.explanation})`)
            console.log(`6. ${magicWeapon.poisonedHalberd.name} (Цена: ${magicWeapon.poisonedHalberd.price}) (Описание: ${magicWeapon.poisonedHalberd.explanation})`)
            console.log(`7. ${magicWeapon.poisonedWarHammer.name} (Цена: ${magicWeapon.poisonedWarHammer.price}) (Описание: ${magicWeapon.poisonedWarHammer.explanation})`)
            console.log(`8. ${magicWeapon.vampirKnife.name} (Цена: ${magicWeapon.vampirKnife.price}) (Описание: ${magicWeapon.vampirKnife.explanation})`)
            console.log(`9. ${magicWeapon.vampirSpear.name} (Цена: ${magicWeapon.vampirSpear.price}) (Описание: ${magicWeapon.vampirSpear.explanation})`)
            console.log(`10. ${artifacts.protectionRing.name} (Цена: ${artifacts.protectionRing.price}) (Описание: ${artifacts.protectionRing.explanation})`)
            console.log(`11. ${artifacts.lensWisdom.name} (Цена: ${artifacts.lensWisdom.price}) (Описание: ${artifacts.lensWisdom.explanation})`)
            console.log(`12. ${potions.resistancePotion.name} (Цена: ${potions.resistancePotion.price}) (Описание: ${potions.resistancePotion.explanation})`)
            console.log(`13. ${potions.firePotion.name} (Цена: ${potions.firePotion.price}) (Описание: ${potions.firePotion.explanation})`)
            console.log(`14. ${potions.kvas.name} x2 (Цена: ${potions.kvas.price * 2}) (Описание: ${potions.kvas.explanation})`)
            console.log(`15. ${armors.mediumArmor.halfPlateArmor.name} (Цена: ${armors.mediumArmor.halfPlateArmor.price}) (Описание: Класс брони ${armors.mediumArmor.halfPlateArmor.ac})`)
            console.log("")
            console.log(`Ваш баланс: ${player.inventory.coins}`)
            console.log("")
            console.log("16. Выход.")
            const buyAction = readlineSync.question('Action: ')
            switch(buyAction) {
                case "1":
                    if (coinsChecker(magicstaffs.basicMagicStaff.price)) {
                        player.inventory.storageItemsStats.push(magicstaffs.basicMagicStaff)
                        player.inventory.coins -= magicstaffs.basicMagicStaff.price
                        return storeMedium2("Предмет куплен!")
                    } else {
                        return storeMedium2("У вас недостаточно средств.")
                    }
                case "2":
                    if (coinsChecker(magicstaffs.basicHealStaff.price)) {
                        player.inventory.storageItemsStats.push(magicstaffs.basicHealStaff)
                        player.inventory.coins -= magicstaffs.basicHealStaff.price
                        return storeMedium2("Предмет куплен!")
                    } else {
                        return storeMedium2("У вас недостаточно средств.")
                    }
                case "3":
                    if (coinsChecker(magicstaffs.basicPoisonedStaff.price)) {
                        player.inventory.storageItemsStats.push(magicstaffs.basicPoisonedStaff)
                        player.inventory.coins -= magicstaffs.basicPoisonedStaff.price
                        return storeMedium2("Предмет куплен!")
                    } else {
                        return storeMedium2("У вас недостаточно средств.")
                    }
                case "4":
                    if (coinsChecker(magicWeapon.sparklingChain.price)) {
                        player.inventory.storageItemsStats.push(magicWeapon.sparklingChain)
                        player.inventory.coins -= magicWeapon.sparklingChain.price
                        return storeMedium2("Предмет куплен!")
                    } else {
                        return storeMedium2("У вас недостаточно средств.")
                    }
                case "5":
                    if (coinsChecker(magicWeapon.sparklingMorgenstern.price)) {
                        player.inventory.storageItemsStats.push(magicWeapon.sparklingMorgenstern)
                        player.inventory.coins -= magicWeapon.sparklingMorgenstern.price
                        return storeMedium2("Предмет куплен!")
                    } else {
                        return storeMedium2("У вас недостаточно средств.")
                    }
                case "6":
                    if (coinsChecker(magicWeapon.poisonedHalberd.price)) {
                        player.inventory.storageItemsStats.push(magicWeapon.poisonedHalberd)
                        player.inventory.coins -= magicWeapon.poisonedHalberd.price
                        return storeMedium2("Предмет куплен!")
                    } else {
                        return storeMedium2("У вас недостаточно средств.")
                    }
                case "7":
                    if (coinsChecker(magicWeapon.poisonedWarHammer.price)) {
                        player.inventory.storageItemsStats.push(magicWeapon.poisonedWarHammer)
                        player.inventory.coins -= magicWeapon.poisonedWarHammer.price
                        return storeMedium2("Предмет куплен!")
                    } else {
                        return storeMedium2("У вас недостаточно средств.")
                    }
                case "8":
                    if (coinsChecker(magicWeapon.vampirKnife.price)) {
                        player.inventory.storageItemsStats.push(magicWeapon.vampirKnife)
                        player.inventory.coins -= magicWeapon.vampirKnife.price
                        return storeMedium2("Предмет куплен!")
                    } else {
                        return storeMedium2("У вас недостаточно средств.")
                    }
                case "9":
                    if (coinsChecker(magicWeapon.vampirSpear.price)) {
                        player.inventory.storageItemsStats.push(magicWeapon.vampirSpear)
                        player.inventory.coins -= magicWeapon.vampirSpear.price
                        return storeMedium2("Предмет куплен!")
                    } else {
                        return storeMedium2("У вас недостаточно средств.")
                    }
                case "10":
                    if (coinsChecker(artifacts.protectionRing.price)) {
                        player.inventory.storageItemsStats.push(artifacts.protectionRing)
                        player.inventory.coins -= artifacts.protectionRing.price
                        return storeMedium2("Предмет куплен!")
                    } else {
                        return storeMedium2("У вас недостаточно средств.")
                    }
                case "11":
                    if (coinsChecker(artifacts.lensWisdom.price)) {
                        player.inventory.storageItemsStats.push(artifacts.lensWisdom)
                        player.inventory.coins -= artifacts.lensWisdom.price
                        return storeMedium2("Предмет куплен!")
                    } else {
                        return storeMedium2("У вас недостаточно средств.")
                    }
                case "12":
                    if (coinsChecker(potions.resistancePotion.price)) {
                        player.inventory.storageItemsStats.push(potions.resistancePotion)
                        player.inventory.coins -= potions.resistancePotion.price
                        return storeMedium2("Предмет куплен!")
                    } else {
                        return storeMedium2("У вас недостаточно средств.")
                    }
                case "13":
                    if (coinsChecker(potions.firePotion.price)) {
                        player.inventory.storageItemsStats.push(potions.firePotion)
                        player.inventory.coins -= potions.firePotion.price
                        return storeMedium2("Предмет куплен!")
                    } else {
                        return storeMedium2("У вас недостаточно средств.")
                    }
                case "14":
                    const kvasTotal = potions.kvas.price * 2
                    if (coinsChecker(kvasTotal)) {
                        for (let i = 0; i < 2; i++) {
                            player.inventory.storageItemsStats.push(potions.kvas)
                        }
                        player.inventory.coins -= kvasTotal
                        return storeMedium2("2 кваса куплено!")
                    } else {
                        return storeMedium2("У вас недостаточно средств.")
                    }
                case "15":
                    if (coinsChecker(armors.mediumArmor.halfPlateArmor.price)) {
                        player.inventory.storageItemsStats.push(armors.mediumArmor.halfPlateArmor)
                        player.inventory.coins -= armors.mediumArmor.halfPlateArmor.price
                        return storeMedium2("Предмет куплен!")
                    } else {
                        return storeMedium2("У вас недостаточно средств.")
                    }
                case "16":
                    return storeMedium2()
                default:
                    return storeMedium2("Некорректный ввод, введите число нужного предмета.")
            }
        case "2":
            return storeMedium2(sell(() => storeMedium2()))
        case "3":
            console.log("\nТорговый автомат мигает красным светом. Похоже у него больше разрешений чем нужно.")
            console.log("Кроме покупок терминал показывает дополнительные опции.")
            console.log("\nДоступные запросы:")
            console.log("1. Актитвация воздушных шлюзов.")
            console.log("2. Протокол 'Ластик'.")
            console.log("3. Отчет об работе Квантового мира.")
            console.log("4. Завершить.")
            
            const mechAction2 = readlineSync.question('Action: ')
            
            switch(mechAction2) {
                case "1":
                    console.log("\nХотя вы и сделали запрос, ничего не произошло:")
                    console.log("\"АКТИВАЦИЯ ВОЗДУШНЫХ ШЛЮЗОВ 3.52.9.45.35.L . . . . КРИТИЧЕСКАЯ ОШИБКА. ШЛЮЗЫ ОБЕСТОЧЕННЫ. ПЕРХОД К СЛЕДУЮЩЕМУ ШЛЮЗУ.\"")
                    console.log("АКТИВАЦИЯ ВОЗДУШНЫХ ШЛЮЗОВ 3.78.45.1.6.2.U . . . .  КРИТИЧЕСКАЯ ОШИБКА. ШЛЮЗЫ ЗАСОРЕННЫ ОРГАНИЧЕСКИМИ ВЕЩЕСТВАМИ. ПЕРХОД К СЛЕДУЮЩЕМУ ШЛЮЗУ.")
                    console.log("АКТИВАЦИЯ ВОЗДУШНЫХ ШЛЮЗОВ 3.71248.45.35.65.32 . . . .  АКТИВАЦИЯ УСПЕШНА! ВНИМАНИЕ! РАБОТА ШЛЮЗОВ, КРАЙНЕ НЕ СТАБИЛЬНА, ВОЗМОЖНЫ ЖЕРТВЫ СРЕДИ ЖИВЫХ СУЩЕСТВ. ПЕРХОД К СЛЕДУЮЩЕМУ ШЛЮЗУ...")
                    console.log("Похоже это будет идти слишком долго, вы отменяете процесс.")
                    readlineSync.question("\nНажмите Enter, чтобы продолжить...")
                    return storeMedium2()
                case "2":
                    console.log("\nАКТИВАЦИЯ ПРОТОКОЛА 'ЛАСТИК'. . . .")
                    console.log("\". . . . УСПЕШНО! ИЗМЕРЕНИЕ '????????' БЫЛО УНИЧТОЖЕННО.\"")
                    console.log(`\"ПОТЕРИ СРЕДИ ЖИТЕЛЕЙ ИЗМЕРНИЯ: ${diceRandomizer(1000000)}.\"`)
                    console.log("ПОТРАЛ ИЗМЕРЕНИЯ '????????' УСПЕШНО ЗАКРЫТ.")
                    readlineSync.question("\nНажмите Enter, чтобы продолжить...")
                    return storeMedium2()
                case "3":
                    console.log("\nВРЕМЯ РАБОТЫ: . . . . . . 1241920757125320721235293859102875908234673571298365 ЛЕТ, 7 МЕСЯЦА, 2 НЕДЕЛИ 0 ДНЕЙ.")
                    console.log(". . . . . ВНИМАНИЕ! КВАНТОВЫЙ МИР НАХОДИТСЯ В КРИТИЧЕСКОМ СОСТОЯНИИ, ПРИМЕРНОЕ ВРЕМЯ РАБОТЫ: НЕОГРАНИЧЕННО.")
                    console.log(". . . . ВНИМАНИЕ! ОБНАРУЖЕННЫ ОРГАНИЧЕСКИЕ СУЩЕСТВА КЛАСС ГУМАНОИД, ДАННЫЕ АКТИВЫ ПРИЧИСЛЕННЫ К ПАРАЗИТАМ УНИЧТОЖАЮЩИЕ СТРУКТУРЫ МИРА И РАБОЧИЙ ПЕРСОНАЛ.")
                    console.log(". . . . ВНИМАНИЕ! БЕТОННЫЕ ЛОВУШКИ АКТИВИРОВАННЫ, ДОЛГОЕ ПРИСЛОНЕНИЕ К СТЕНАМ ЖИВЫМИ СУЩЕСТВАМИ ПРИВОДИТ К ЗАПЕЧАТЫВАНИЮ.")
                    console.log(". . . . КРИТИЧЕСКАЯ ОШИБКА! ОБЬЕКТ 'ДАННЫЕ КВАНТОВОГО МИРА' НЕ НАЙДЕН")
                    readlineSync.question("\nНажмите Enter, чтобы продолжить...")
                    return storeMedium2()
                case "4":
                    return storeMedium2()
                default:
                    console.log("Здесь могло быть больше информации...")
                    readlineSync.question("\nНажмите Enter, чтобы продолжить...")
                    return storeMedium2()
            }
        case "4":
            return
        default:
            return storeMedium2("Некорректный ввод, выберите действие из списка.")
    }
}

export const storeMedium3 = (message = "") => {
    clearScreen()
    console.log(message)
    const content = fs.readFileSync('assets/stores/storeMedium3.txt', 'utf-8')
    console.log(content)
    const action = readlineSync.question('Action: ')
    switch(action) {
        case "1":
            console.log("Список товаров:")
            console.log(`1. ${arms.militaryHandWeapons.twoHandedSword.name} (Цена: ${arms.militaryHandWeapons.twoHandedSword.price}) (Описание: ${arms.militaryHandWeapons.twoHandedSword.property.join(', ')}, урон ${arms.militaryHandWeapons.twoHandedSword.damage})`)
            console.log(`2. ${arms.militaryHandWeapons.bigAxe.name} (Цена: ${arms.militaryHandWeapons.bigAxe.price}) (Описание: ${arms.militaryHandWeapons.bigAxe.property.join(', ')}, урон ${arms.militaryHandWeapons.bigAxe.damage})`)
            console.log(`3. ${arms.militaryHandWeapons.peak.name} (Цена: ${arms.militaryHandWeapons.peak.price}) (Описание: ${arms.militaryHandWeapons.peak.property.join(', ')}, урон ${arms.militaryHandWeapons.peak.damage})`)
            console.log(`4. ${arms.militaryHandWeapons.longSpear.name} (Цена: ${arms.militaryHandWeapons.longSpear.price}) (Описание: ${arms.militaryHandWeapons.longSpear.property.join(', ')}, урон ${arms.militaryHandWeapons.longSpear.damage})`)
            console.log(`5. ${arms.militaryHandWeapons.chain.name} (Цена: ${arms.militaryHandWeapons.chain.price}) (Описание: Воинское оружие, урон ${arms.militaryHandWeapons.chain.damage})`)
            console.log(`6. ${arms.militaryHandWeapons.rapier.name} (Цена: ${arms.militaryHandWeapons.rapier.price}) (Описание: ${arms.militaryHandWeapons.rapier.property.join(', ')}, урон ${arms.militaryHandWeapons.rapier.damage})`)
            console.log(`7. ${arms.militaryRangeWeapon.handCrossbow.name} (Цена: ${arms.militaryRangeWeapon.handCrossbow.price}) (Описание: ${arms.militaryRangeWeapon.handCrossbow.property.join(', ')}, урон ${arms.militaryRangeWeapon.handCrossbow.damage})`)
            console.log(`8. ${magicArmor.strenghtChainmailShirt.name} (Цена: ${magicArmor.strenghtChainmailShirt.price}) (Описание: ${magicArmor.strenghtChainmailShirt.explanation})`)
            console.log(`9. ${magicArmor.dexterityScalyArmor.name} (Цена: ${magicArmor.dexterityScalyArmor.price}) (Описание: ${magicArmor.dexterityScalyArmor.explanation})`)
            console.log(`10. ${magicArmor.physiqueRingShapedArmor.name} (Цена: ${magicArmor.physiqueRingShapedArmor.price}) (Описание: ${magicArmor.physiqueRingShapedArmor.explanation})`)
            console.log(`11. ${magicWeapon.tactiсTrident.name} (Цена: ${magicWeapon.tactiсTrident.price}) (Описание: ${magicWeapon.tactiсTrident.explanation})`)
            console.log(`12. ${magicWeapon.tactiсWhip.name} (Цена: ${magicWeapon.tactiсWhip.price}) (Описание: ${magicWeapon.tactiсWhip.explanation})`)
            console.log(`13. ${magicWeapon.tactiсShortSword.name} (Цена: ${magicWeapon.tactiсShortSword.price}) (Описание: ${magicWeapon.tactiсShortSword.explanation})`)
            console.log(`14. ${potions.bmegaPotion.name} (Цена: ${potions.bmegaPotion.price}) (Описание: ${potions.bmegaPotion.explanation})`)
            console.log(`15. ${artifacts.amuletDrunkard.name} (Цена: ${artifacts.amuletDrunkard.price}) (Описание: ${artifacts.amuletDrunkard.explanation})`)
            console.log("")
            console.log(`Ваш баланс: ${player.inventory.coins}`)
            console.log("")
            console.log("16. Выход.")
            const buyAction = readlineSync.question('Action: ')
            switch(buyAction) {
                case "1":
                    if (coinsChecker(arms.militaryHandWeapons.twoHandedSword.price)) {
                        player.inventory.storageItemsStats.push(arms.militaryHandWeapons.twoHandedSword)
                        player.inventory.coins -= arms.militaryHandWeapons.twoHandedSword.price
                        return storeMedium3("Предмет куплен!")
                    } else {
                        return storeMedium3("У вас недостаточно средств.")
                    }
                case "2":
                    if (coinsChecker(arms.militaryHandWeapons.bigAxe.price)) {
                        player.inventory.storageItemsStats.push(arms.militaryHandWeapons.bigAxe)
                        player.inventory.coins -= arms.militaryHandWeapons.bigAxe.price
                        return storeMedium3("Предмет куплен!")
                    } else {
                        return storeMedium3("У вас недостаточно средств.")
                    }
                case "3":
                    if (coinsChecker(arms.militaryHandWeapons.peak.price)) {
                        player.inventory.storageItemsStats.push(arms.militaryHandWeapons.peak)
                        player.inventory.coins -= arms.militaryHandWeapons.peak.price
                        return storeMedium3("Предмет куплен!")
                    } else {
                        return storeMedium3("У вас недостаточно средств.")
                    }
                case "4":
                    if (coinsChecker(arms.militaryHandWeapons.longSpear.price)) {
                        player.inventory.storageItemsStats.push(arms.militaryHandWeapons.longSpear)
                        player.inventory.coins -= arms.militaryHandWeapons.longSpear.price
                        return storeMedium3("Предмет куплен!")
                    } else {
                        return storeMedium3("У вас недостаточно средств.")
                    }
                case "5":
                    if (coinsChecker(arms.militaryHandWeapons.chain.price)) {
                        player.inventory.storageItemsStats.push(arms.militaryHandWeapons.chain)
                        player.inventory.coins -= arms.militaryHandWeapons.chain.price
                        return storeMedium3("Предмет куплен!")
                    } else {
                        return storeMedium3("У вас недостаточно средств.")
                    }
                case "6":
                    if (coinsChecker(arms.militaryHandWeapons.rapier.price)) {
                        player.inventory.storageItemsStats.push(arms.militaryHandWeapons.rapier)
                        player.inventory.coins -= arms.militaryHandWeapons.rapier.price
                        return storeMedium3("Предмет куплен!")
                    } else {
                        return storeMedium3("У вас недостаточно средств.")
                    }
                case "7":
                    if (coinsChecker(arms.militaryRangeWeapon.handCrossbow.price)) {
                        player.inventory.storageItemsStats.push(arms.militaryRangeWeapon.handCrossbow)
                        player.inventory.coins -= arms.militaryRangeWeapon.handCrossbow.price
                        return storeMedium3("Предмет куплен!")
                    } else {
                        return storeMedium3("У вас недостаточно средств.")
                    }
                case "8":
                    if (coinsChecker(magicArmor.strenghtChainmailShirt.price)) {
                        player.inventory.storageItemsStats.push(magicArmor.strenghtChainmailShirt)
                        player.inventory.coins -= magicArmor.strenghtChainmailShirt.price
                        return storeMedium3("Предмет куплен!")
                    } else {
                        return storeMedium3("У вас недостаточно средств.")
                    }
                case "9":
                    if (coinsChecker(magicArmor.dexterityScalyArmor.price)) {
                        player.inventory.storageItemsStats.push(magicArmor.dexterityScalyArmor)
                        player.inventory.coins -= magicArmor.dexterityScalyArmor.price
                        return storeMedium3("Предмет куплен!")
                    } else {
                        return storeMedium3("У вас недостаточно средств.")
                    }
                case "10":
                    if (coinsChecker(magicArmor.physiqueRingShapedArmor.price)) {
                        player.inventory.storageItemsStats.push(magicArmor.physiqueRingShapedArmor)
                        player.inventory.coins -= magicArmor.physiqueRingShapedArmor.price
                        return storeMedium3("Предмет куплен!")
                    } else {
                        return storeMedium3("У вас недостаточно средств.")
                    }
                case "11":
                    if (coinsChecker(magicWeapon.tactiсTrident.price)) {
                        player.inventory.storageItemsStats.push(magicWeapon.tactiсTrident)
                        player.inventory.coins -= magicWeapon.tactiсTrident.price
                        return storeMedium3("Предмет куплен!")
                    } else {
                        return storeMedium3("У вас недостаточно средств.")
                    }
                case "12":
                    if (coinsChecker(magicWeapon.tactiсWhip.price)) {
                        player.inventory.storageItemsStats.push(magicWeapon.tactiсWhip)
                        player.inventory.coins -= magicWeapon.tactiсWhip.price
                        return storeMedium3("Предмет куплен!")
                    } else {
                        return storeMedium3("У вас недостаточно средств.")
                    }
                case "13":
                    if (coinsChecker(magicWeapon.tactiсShortSword.price)) {
                        player.inventory.storageItemsStats.push(magicWeapon.tactiсShortSword)
                        player.inventory.coins -= magicWeapon.tactiсShortSword.price
                        return storeMedium3("Предмет куплен!")
                    } else {
                        return storeMedium3("У вас недостаточно средств.")
                    }
                case "14":
                    if (coinsChecker(potions.bmegaPotion.price)) {
                        player.inventory.storageItemsStats.push(potions.bmegaPotion)
                        player.inventory.coins -= potions.bmegaPotion.price
                        return storeMedium3("Предмет куплен!")
                    } else {
                        return storeMedium3("У вас недостаточно средств.")
                    }
                case "15":
                    if (coinsChecker(artifacts.amuletDrunkard.price)) {
                        player.inventory.storageItemsStats.push(artifacts.amuletDrunkard)
                        player.inventory.coins -= artifacts.amuletDrunkard.price
                        return storeMedium3("Предмет куплен!")
                    } else {
                        return storeMedium3("У вас недостаточно средств.")
                    }
                case "16":
                    return storeMedium3()
                default:
                    return storeMedium3("Некорректный ввод, введите число нужного предмета.")
            }
        case "2":
            return storeMedium3(sell(() => storeMedium3()))
        case "3":
            console.log("\nГолограмма появляется перед вами. Это женщина в странном обмундировании, но она мерцает.")
            console.log("Её слова звучат с задержкой, будто она говорит из другого времени.")
            console.log("\nЧто спросить?")
            console.log("1. Как ты здесь оказалась?")
            console.log("2. Что находится внизу?")
            console.log("3. Ты помнишь, как умерла?")
            console.log("4. Завершить разговор.")
            
            const holoAction = readlineSync.question('Action: ')
            
            switch(holoAction) {
                case "1":
                    console.log("\nГолограмма искажается, затем отвечает:")
                    console.log("\"Я была инженером. Строила эти тоннели. А потом... авария. Взрыв. И я оказалась здесь.\"")
                    console.log("Она смотрит на свои мерцающие руки.")
                    console.log("\"Теперь я часть системы. Часть этой тюрьмы.\"")
                    readlineSync.question("\nНажмите Enter, чтобы продолжить...")
                    return storeMedium3()
                case "2":
                    console.log("\nОна исчезает на секунду, затем появляется снова, показывая карту:")
                    console.log("\"Храм. Это не просто здание. Это сердце. Того, что держит нас здесь. Если его уничтожить... может, мы освободимся.\"")
                    console.log("Карта гаснет.")
                    console.log("\"Но никто не возвращался оттуда.\"")
                    readlineSync.question("\nНажмите Enter, чтобы продолжить...")
                    return storeMedium3()
                case "3":
                    console.log("\nГолограмма замирает. Её лицо становится пустым.")
                    console.log("\"Я... не помню. Помню только свет. Очень яркий свет. А потом темноту и эти стены.\"")
                    console.log("Она пытается улыбнуться, но губы не слушаются.")
                    console.log("\"Может, это и есть ад. Забыть свою смерть, но помнить, что ты мёртв.\"")
                    readlineSync.question("\nНажмите Enter, чтобы продолжить...")
                    return storeMedium3()
                case "4":
                    return storeMedium3()
                default:
                    console.log("Голограмма исчезает. Вы остаётесь один в тишине тоннеля.")
                    readlineSync.question("\nНажмите Enter, чтобы продолжить...")
                    return storeMedium3()
            }
        case "4":
            return
        default:
            return storeMedium3("Некорректный ввод, выберите действие из списка.")
    }
}

export const storeHard1 = (message = "") => {
    clearScreen()
    console.log(message)
    const content = fs.readFileSync('assets/stores/storeHard1.txt', 'utf-8')
    console.log(content)
    const action = readlineSync.question('Action: ')
    switch(action) {
        case "1":
            console.log("Список товаров:")
            console.log(`1. ${armors.heavyArmor.plateArmor.name} (Цена: ${armors.heavyArmor.plateArmor.price}) (Описание: Класс брони ${armors.heavyArmor.plateArmor.ac})`)
            console.log(`2. ${magicArmor.strenghtPlateArmor.name} (Цена: ${magicArmor.strenghtPlateArmor.price}) (Описание: ${magicArmor.strenghtPlateArmor.explanation})`)
            console.log(`3. ${magicWeapon.vampirTwoHandedSword.name} (Цена: ${magicWeapon.vampirTwoHandedSword.price}) (Описание: ${magicWeapon.vampirTwoHandedSword.explanation})`)
            console.log(`4. ${magicWeapon.lifeStealerTwoHandedSword.name} (Цена: ${magicWeapon.lifeStealerTwoHandedSword.price}) (Описание: ${magicWeapon.lifeStealerTwoHandedSword.explanation})`)
            console.log(`5. ${magicWeapon.sizzlingLongBow.name} (Цена: ${magicWeapon.sizzlingLongBow.price}) (Описание: ${magicWeapon.sizzlingLongBow.explanation})`)
            console.log(`6. ${magicWeapon.acidicHalberd.name} (Цена: ${magicWeapon.acidicHalberd.price}) (Описание: ${magicWeapon.acidicHalberd.explanation})`)
            console.log(`7. ${magicstaffs.higherMagicStaff.name} (Цена: ${magicstaffs.higherMagicStaff.price}) (Описание: ${magicstaffs.higherMagicStaff.explanation})`)
            console.log(`8. ${magicstaffs.higherFireStaff.name} (Цена: ${magicstaffs.higherFireStaff.price}) (Описание: ${magicstaffs.higherFireStaff.explanation})`)
            console.log(`9. ${potions.pstrenghtPotion.name} (Цена: ${potions.pstrenghtPotion.price}) (Описание: ${potions.pstrenghtPotion.explanation})`)
            console.log(`10. ${potions.pprotectionPotion.name} (Цена: ${potions.pprotectionPotion.price}) (Описание: ${potions.pprotectionPotion.explanation})`)
            console.log(`11. ${potions.invulnerabilityPotion.name} (Цена: ${potions.invulnerabilityPotion.price}) (Описание: ${potions.invulnerabilityPotion.explanation})`)
            console.log(`12. ${potions.pmegaPotion.name} (Цена: ${potions.pmegaPotion.price}) (Описание: ${potions.pmegaPotion.explanation})`)
            console.log(`13. ${artifacts.ultraGem.name} (Цена: ${artifacts.ultraGem.price}) (Описание: ${artifacts.ultraGem.explanation})`)
            console.log(`14. ${potions.kumiss.name} (Цена: ${potions.kumiss.price}) (Описание: ${potions.kumiss.explanation})`)
            console.log("")
            console.log(`Ваш баланс: ${player.inventory.coins}`)
            console.log("")
            console.log("15. Выход.")
            const buyAction = readlineSync.question('Action: ')
            switch(buyAction) {
                case "1":
                    if (coinsChecker(armors.heavyArmor.plateArmor.price)) {
                        player.inventory.storageItemsStats.push(armors.heavyArmor.plateArmor)
                        player.inventory.coins -= armors.heavyArmor.plateArmor.price
                        return storeHard1("Предмет куплен!")
                    } else {
                        return storeHard1("У вас недостаточно средств.")
                    }
                case "2":
                    if (coinsChecker(magicArmor.strenghtPlateArmor.price)) {
                        player.inventory.storageItemsStats.push(magicArmor.strenghtPlateArmor)
                        player.inventory.coins -= magicArmor.strenghtPlateArmor.price
                        return storeHard1("Предмет куплен!")
                    } else {
                        return storeHard1("У вас недостаточно средств.")
                    }
                case "3":
                    if (coinsChecker(magicWeapon.vampirTwoHandedSword.price)) {
                        player.inventory.storageItemsStats.push(magicWeapon.vampirTwoHandedSword)
                        player.inventory.coins -= magicWeapon.vampirTwoHandedSword.price
                        return storeHard1("Предмет куплен!")
                    } else {
                        return storeHard1("У вас недостаточно средств.")
                    }
                case "4":
                    if (coinsChecker(magicWeapon.lifeStealerTwoHandedSword.price)) {
                        player.inventory.storageItemsStats.push(magicWeapon.lifeStealerTwoHandedSword)
                        player.inventory.coins -= magicWeapon.lifeStealerTwoHandedSword.price
                        return storeHard1("Предмет куплен!")
                    } else {
                        return storeHard1("У вас недостаточно средств.")
                    }
                case "5":
                    if (coinsChecker(magicWeapon.sizzlingLongBow.price)) {
                        player.inventory.storageItemsStats.push(magicWeapon.sizzlingLongBow)
                        player.inventory.coins -= magicWeapon.sizzlingLongBow.price
                        return storeHard1("Предмет куплен!")
                    } else {
                        return storeHard1("У вас недостаточно средств.")
                    }
                case "6":
                    if (coinsChecker(magicWeapon.acidicHalberd.price)) {
                        player.inventory.storageItemsStats.push(magicWeapon.acidicHalberd)
                        player.inventory.coins -= magicWeapon.acidicHalberd.price
                        return storeHard1("Предмет куплен!")
                    } else {
                        return storeHard1("У вас недостаточно средств.")
                    }
                case "7":
                    if (coinsChecker(magicstaffs.higherMagicStaff.price)) {
                        player.inventory.storageItemsStats.push(magicstaffs.higherMagicStaff)
                        player.inventory.coins -= magicstaffs.higherMagicStaff.price
                        return storeHard1("Предмет куплен!")
                    } else {
                        return storeHard1("У вас недостаточно средств.")
                    }
                case "8":
                    if (coinsChecker(magicstaffs.higherFireStaff.price)) {
                        player.inventory.storageItemsStats.push(magicstaffs.higherFireStaff)
                        player.inventory.coins -= magicstaffs.higherFireStaff.price
                        return storeHard1("Предмет куплен!")
                    } else {
                        return storeHard1("У вас недостаточно средств.")
                    }
                case "9":
                    if (coinsChecker(potions.pstrenghtPotion.price)) {
                        player.inventory.storageItemsStats.push(potions.pstrenghtPotion)
                        player.inventory.coins -= potions.pstrenghtPotion.price
                        return storeHard1("Предмет куплен!")
                    } else {
                        return storeHard1("У вас недостаточно средств.")
                    }
                case "10":
                    if (coinsChecker(potions.pprotectionPotion.price)) {
                        player.inventory.storageItemsStats.push(potions.pprotectionPotion)
                        player.inventory.coins -= potions.pprotectionPotion.price
                        return storeHard1("Предмет куплен!")
                    } else {
                        return storeHard1("У вас недостаточно средств.")
                    }
                case "11":
                    if (coinsChecker(potions.invulnerabilityPotion.price)) {
                        player.inventory.storageItemsStats.push(potions.invulnerabilityPotion)
                        player.inventory.coins -= potions.invulnerabilityPotion.price
                        return storeHard1("Предмет куплен!")
                    } else {
                        return storeHard1("У вас недостаточно средств.")
                    }
                case "12":
                    if (coinsChecker(potions.pmegaPotion.price)) {
                        player.inventory.storageItemsStats.push(potions.pmegaPotion)
                        player.inventory.coins -= potions.pmegaPotion.price
                        return storeHard1("Предмет куплен!")
                    } else {
                        return storeHard1("У вас недостаточно средств.")
                    }
                case "13":
                    if (coinsChecker(artifacts.ultraGem.price)) {
                        player.inventory.storageItemsStats.push(artifacts.ultraGem)
                        player.inventory.coins -= artifacts.ultraGem.price
                        return storeHard1("Предмет куплен!")
                    } else {
                        return storeHard1("У вас недостаточно средств.")
                    }
                case "14":
                    if (coinsChecker(potions.kumiss.price)) {
                        player.inventory.storageItemsStats.push(potions.kumiss)
                        player.inventory.coins -= potions.kumiss.price
                        return storeHard1("Предмет куплен!")
                    } else {
                        return storeHard1("У вас недостаточно средств.")
                    }
                case "15":
                    return storeHard1()
                default:
                    return storeHard1("Некорректный ввод, введите число нужного предмета.")
            }
        case "2":
            return storeHard1(sell(() => storeHard1()))
        case "3":
            console.log("\nПеред вами стоит существо, которое когда-то могло быть человеком. Сквозь его полупрозрачную кожу видно, как течёт чёрная жидкость.")
            console.log("Оно говорит с вами, но рот не двигается. Голос звучит у вас в голове.")
            console.log("\nЧто спросить?")
            console.log("1. Кто ты?")
            console.log("2. Зачем ты здесь?")
            console.log("3. Что ждёт меня внизу?")
            console.log("4. Уйти.")
            
            const horrorAction = readlineSync.question('Action: ')
            
            switch(horrorAction) {
                case "1":
                    console.log("\nГолос в голове звучит устало, безжизненно:")
                    console.log("\"Я был королём. Когда-то. У меня была армия, казна, власть. А теперь я продаю товары мертвецам.\"")
                    console.log("Оно усмехается, и из трещин на его лице вытекает чёрная жидкость.")
                    readlineSync.question("\nНажмите Enter, чтобы продолжить...")
                    return storeHard1()
                case "2":
                    console.log("\nСущество медленно поднимает руку и смотрит на неё:")
                    console.log("\"Я жду. Все мы здесь чего-то ждём. Того, кто сможет сделать то, что не смогли мы.\"")
                    console.log("Оно опускает руку и смотрит прямо на вас.")
                    console.log("\"Может, это ты. А может, очередной мертвец.\"")
                    readlineSync.question("\nНажмите Enter, чтобы продолжить...")
                    return storeHard1()
                case "3":
                    console.log("\nГолос становится тише, почти шёпотом:")
                    console.log("\"Там, внизу, спит Он. Тот, кто создал это место. Тот, кто держит нас здесь. Если ты разбудишь Его...\"")
                    console.log("Существо замолкает и исчезает. Вы остаётесь один в тишине.")
                    readlineSync.question("\nНажмите Enter, чтобы продолжить...")
                    return storeHard1()
                case "4":
                    return storeHard1()
                default:
                    console.log("Существо просто смотрит на вас. В его глазах — пустота.")
                    readlineSync.question("\nНажмите Enter, чтобы продолжить...")
                    return storeHard1()
            }
        case "4":
            return
        default:
            return storeHard1("Некорректный ввод, выберите действие из списка.")
    }
}

export const storeHard2 = (message = "") => {
    clearScreen()
    console.log(message)
    const content = fs.readFileSync('assets/stores/storeHard2.txt', 'utf-8')
    console.log(content)
    const action = readlineSync.question('Action: ')
    switch(action) {
        case "1":
            console.log("Список товаров:")
            console.log(`1. ${magicstaffs.higherMagicStaff.name} (Цена: ${magicstaffs.higherMagicStaff.price}) (Описание: ${magicstaffs.higherMagicStaff.explanation})`)
            console.log(`2. ${magicstaffs.higherFireStaff.name} (Цена: ${magicstaffs.higherFireStaff.price}) (Описание: ${magicstaffs.higherFireStaff.explanation})`)
            console.log(`3. ${magicstaffs.higherVampirStaff.name} (Цена: ${magicstaffs.higherVampirStaff.price}) (Описание: ${magicstaffs.higherVampirStaff.explanation})`)
            console.log(`4. ${magicstaffs.higherPoisonedStaff.name} (Цена: ${magicstaffs.higherPoisonedStaff.price}) (Описание: ${magicstaffs.higherPoisonedStaff.explanation})`)
            console.log(`5. ${magicstaffs.customizedAttackStaff.name} (Цена: ${magicstaffs.customizedAttackStaff.price}) (Описание: ${magicstaffs.customizedAttackStaff.explanation})`)
            console.log(`6. ${magicWeapon.sizzlingLongBow.name} (Цена: ${magicWeapon.sizzlingLongBow.price}) (Описание: ${magicWeapon.sizzlingLongBow.explanation})`)
            console.log(`7. ${magicWeapon.sizzlingGlaive.name} (Цена: ${magicWeapon.sizzlingGlaive.price}) (Описание: ${magicWeapon.sizzlingGlaive.explanation})`)
            console.log(`8. ${magicWeapon.acidicHalberd.name} (Цена: ${magicWeapon.acidicHalberd.price}) (Описание: ${magicWeapon.acidicHalberd.explanation})`)
            console.log(`9. ${magicWeapon.acidicRapier.name} (Цена: ${magicWeapon.acidicRapier.price}) (Описание: ${magicWeapon.acidicRapier.explanation})`)
            console.log(`10. ${magicWeapon.lifeStealerHeavyCrossbow.name} (Цена: ${magicWeapon.lifeStealerHeavyCrossbow.price}) (Описание: ${magicWeapon.lifeStealerHeavyCrossbow.explanation})`)
            console.log(`11. ${magicArmor.intelligencePlateArmor.name} (Цена: ${magicArmor.intelligencePlateArmor.price}) (Описание: ${magicArmor.intelligencePlateArmor.explanation})`)
            console.log(`12. ${magicArmor.wisdomPlateArmor.name} (Цена: ${magicArmor.wisdomPlateArmor.price}) (Описание: ${magicArmor.wisdomPlateArmor.explanation})`)
            console.log(`13. ${potions.invulnerabilityPotion.name} (Цена: ${potions.invulnerabilityPotion.price}) (Описание: ${potions.invulnerabilityPotion.explanation})`)
            console.log(`14. ${potions.emegaPotion.name} (Цена: ${potions.emegaPotion.price}) (Описание: ${potions.emegaPotion.explanation})`)
            console.log(`15. ${artifacts.flowerCharisma.name} (Цена: ${artifacts.flowerCharisma.price}) (Описание: ${artifacts.flowerCharisma.explanation})`)
            console.log("")
            console.log(`Ваш баланс: ${player.inventory.coins}`)
            console.log("")
            console.log("16. Выход.")
            const buyAction = readlineSync.question('Action: ')
            switch(buyAction) {
                case "1":
                    if (coinsChecker(magicstaffs.higherMagicStaff.price)) {
                        player.inventory.storageItemsStats.push(magicstaffs.higherMagicStaff)
                        player.inventory.coins -= magicstaffs.higherMagicStaff.price
                        return storeHard2("Предмет куплен!")
                    } else {
                        return storeHard2("У вас недостаточно средств.")
                    }
                case "2":
                    if (coinsChecker(magicstaffs.higherFireStaff.price)) {
                        player.inventory.storageItemsStats.push(magicstaffs.higherFireStaff)
                        player.inventory.coins -= magicstaffs.higherFireStaff.price
                        return storeHard2("Предмет куплен!")
                    } else {
                        return storeHard2("У вас недостаточно средств.")
                    }
                case "3":
                    if (coinsChecker(magicstaffs.higherVampirStaff.price)) {
                        player.inventory.storageItemsStats.push(magicstaffs.higherVampirStaff)
                        player.inventory.coins -= magicstaffs.higherVampirStaff.price
                        return storeHard2("Предмет куплен!")
                    } else {
                        return storeHard2("У вас недостаточно средств.")
                    }
                case "4":
                    if (coinsChecker(magicstaffs.higherPoisonedStaff.price)) {
                        player.inventory.storageItemsStats.push(magicstaffs.higherPoisonedStaff)
                        player.inventory.coins -= magicstaffs.higherPoisonedStaff.price
                        return storeHard2("Предмет куплен!")
                    } else {
                        return storeHard2("У вас недостаточно средств.")
                    }
                case "5":
                    if (coinsChecker(magicstaffs.customizedAttackStaff.price)) {
                        player.inventory.storageItemsStats.push(magicstaffs.customizedAttackStaff)
                        player.inventory.coins -= magicstaffs.customizedAttackStaff.price
                        return storeHard2("Предмет куплен!")
                    } else {
                        return storeHard2("У вас недостаточно средств.")
                    }
                case "6":
                    if (coinsChecker(magicWeapon.sizzlingLongBow.price)) {
                        player.inventory.storageItemsStats.push(magicWeapon.sizzlingLongBow)
                        player.inventory.coins -= magicWeapon.sizzlingLongBow.price
                        return storeHard2("Предмет куплен!")
                    } else {
                        return storeHard2("У вас недостаточно средств.")
                    }
                case "7":
                    if (coinsChecker(magicWeapon.sizzlingGlaive.price)) {
                        player.inventory.storageItemsStats.push(magicWeapon.sizzlingGlaive)
                        player.inventory.coins -= magicWeapon.sizzlingGlaive.price
                        return storeHard2("Предмет куплен!")
                    } else {
                        return storeHard2("У вас недостаточно средств.")
                    }
                case "8":
                    if (coinsChecker(magicWeapon.acidicHalberd.price)) {
                        player.inventory.storageItemsStats.push(magicWeapon.acidicHalberd)
                        player.inventory.coins -= magicWeapon.acidicHalberd.price
                        return storeHard2("Предмет куплен!")
                    } else {
                        return storeHard2("У вас недостаточно средств.")
                    }
                case "9":
                    if (coinsChecker(magicWeapon.acidicRapier.price)) {
                        player.inventory.storageItemsStats.push(magicWeapon.acidicRapier)
                        player.inventory.coins -= magicWeapon.acidicRapier.price
                        return storeHard2("Предмет куплен!")
                    } else {
                        return storeHard2("У вас недостаточно средств.")
                    }
                case "10":
                    if (coinsChecker(magicWeapon.lifeStealerHeavyCrossbow.price)) {
                        player.inventory.storageItemsStats.push(magicWeapon.lifeStealerHeavyCrossbow)
                        player.inventory.coins -= magicWeapon.lifeStealerHeavyCrossbow.price
                        return storeHard2("Предмет куплен!")
                    } else {
                        return storeHard2("У вас недостаточно средств.")
                    }
                case "11":
                    if (coinsChecker(magicArmor.intelligencePlateArmor.price)) {
                        player.inventory.storageItemsStats.push(magicArmor.intelligencePlateArmor)
                        player.inventory.coins -= magicArmor.intelligencePlateArmor.price
                        return storeHard2("Предмет куплен!")
                    } else {
                        return storeHard2("У вас недостаточно средств.")
                    }
                case "12":
                    if (coinsChecker(magicArmor.wisdomPlateArmor.price)) {
                        player.inventory.storageItemsStats.push(magicArmor.wisdomPlateArmor)
                        player.inventory.coins -= magicArmor.wisdomPlateArmor.price
                        return storeHard2("Предмет куплен!")
                    } else {
                        return storeHard2("У вас недостаточно средств.")
                    }
                case "13":
                    if (coinsChecker(potions.invulnerabilityPotion.price)) {
                        player.inventory.storageItemsStats.push(potions.invulnerabilityPotion)
                        player.inventory.coins -= potions.invulnerabilityPotion.price
                        return storeHard2("Предмет куплен!")
                    } else {
                        return storeHard2("У вас недостаточно средств.")
                    }
                case "14":
                    if (coinsChecker(potions.emegaPotion.price)) {
                        player.inventory.storageItemsStats.push(potions.emegaPotion)
                        player.inventory.coins -= potions.emegaPotion.price
                        return storeHard2("Предмет куплен!")
                    } else {
                        return storeHard2("У вас недостаточно средств.")
                    }
                case "15":
                    if (coinsChecker(artifacts.flowerCharisma.price)) {
                        player.inventory.storageItemsStats.push(artifacts.flowerCharisma)
                        player.inventory.coins -= artifacts.flowerCharisma.price
                        return storeHard2("Предмет куплен!")
                    } else {
                        return storeHard2("У вас недостаточно средств.")
                    }
                case "16":
                    return storeHard2()
                default:
                    return storeHard2("Некорректный ввод, введите число нужного предмета.")
            }
        case "2":
            return storeHard2(sell(() => storeHard2()))
        case "3":
            console.log("\nТень на стене начинает двигаться. Она отделяется от камня и принимает человеческую форму.")
            console.log("У неё нет лица, только очертания. Голос звучит из ниоткуда.")
            console.log("\nЧто спросить?")
            console.log("1. Что ты такое?")
            console.log("2. Как здесь оказался?")
            console.log("3. Есть ли надежда?")
            console.log("4. Уйти.")
            
            const shadowAction = readlineSync.question('Action: ')
            
            switch(shadowAction) {
                case "1":
                    console.log("\nТень колышется, затем отвечает тихо:")
                    console.log("\"Я — тот, кто потерял всё. Имя, тело, память. Осталась только тень и тоска.\"")
                    console.log("Она протягивает руку, но когда вы пытаетесь её коснуться, она рассыпается, затем собирается снова.")
                    readlineSync.question("\nНажмите Enter, чтобы продолжить...")
                    return storeHard2()
                case "2":
                    console.log("\nТень замирает, затем начинает рассказывать:")
                    console.log("\"Я пришёл сюда с отрядом. Мы искали выход. Нашли только смерть. Теперь я часть этих стен. Часть этого ада.\"")
                    console.log("Её голос дрожит, хотя лица не видно.")
                    readlineSync.question("\nНажмите Enter, чтобы продолжить...")
                    return storeHard2()
                case "3":
                    console.log("\nТень долго молчит. Затем тихо, почти неслышно:")
                    console.log("\"Надежда... это единственное, что осталось. Даже здесь, даже после смерти. Пока есть надежда — ты ещё жив.\"")
                    console.log("Она указывает куда-то вниз.")
                    console.log("\"Иди. Может, ты найдёшь то, что не нашли мы.\"")
                    readlineSync.question("\nНажмите Enter, чтобы продолжить...")
                    return storeHard2()
                case "4":
                    return storeHard2()
                default:
                    console.log("Тень исчезает так же внезапно, как и появилась.")
                    readlineSync.question("\nНажмите Enter, чтобы продолжить...")
                    return storeHard2()
            }
        case "4":
            return
        default:
            return storeHard2("Некорректный ввод, выберите действие из списка.")
    }
}

export const storeHard3 = (message = "") => {
    clearScreen()
    console.log(message)
    const content = fs.readFileSync('assets/stores/storeHard3.txt', 'utf-8')
    console.log(content)
    const action = readlineSync.question('Action: ')
    switch(action) {
        case "1":
            console.log("Список товаров:")
            console.log(`1. ${magicArmor.stealthPlateArmor.name} (Цена: ${magicArmor.stealthPlateArmor.price}) (Описание: ${magicArmor.stealthPlateArmor.explanation})`)
            console.log(`2. ${magicArmor.powerPlateArmor.name} (Цена: ${magicArmor.powerPlateArmor.price}) (Описание: ${magicArmor.powerPlateArmor.explanation})`)
            console.log(`3. ${magicArmor.eloquencePlateArmor.name} (Цена: ${magicArmor.eloquencePlateArmor.price}) (Описание: ${magicArmor.eloquencePlateArmor.explanation})`)
            console.log(`4. ${magicArmor.clearVisionPlateArmor.name} (Цена: ${magicArmor.clearVisionPlateArmor.price}) (Описание: ${magicArmor.clearVisionPlateArmor.explanation})`)
            console.log(`5. ${magicWeapon.lifeStealerScimitar.name} (Цена: ${magicWeapon.lifeStealerScimitar.price}) (Описание: ${magicWeapon.lifeStealerScimitar.explanation})`)
            console.log(`6. ${magicWeapon.bloodBigAxe.name} (Цена: ${magicWeapon.bloodBigAxe.price}) (Описание: ${magicWeapon.bloodBigAxe.explanation})`)
            console.log(`7. ${magicWeapon.bloodTwoHandedSword.name} (Цена: ${magicWeapon.bloodTwoHandedSword.price}) (Описание: ${magicWeapon.bloodTwoHandedSword.explanation})`)
            console.log(`8. ${magicWeapon.sizzlingHandAxe.name} (Цена: ${magicWeapon.sizzlingHandAxe.price}) (Описание: ${magicWeapon.sizzlingHandAxe.explanation})`)
            console.log(`9. ${magicWeapon.acidicLongSpear.name} (Цена: ${magicWeapon.acidicLongSpear.price}) (Описание: ${magicWeapon.acidicLongSpear.explanation})`)
            console.log(`10. ${magicWeapon.tactiсHandCrossbow.name} (Цена: ${magicWeapon.tactiсHandCrossbow.price}) (Описание: ${magicWeapon.tactiсHandCrossbow.explanation})`)
            console.log(`11. ${potions.pcharismaPotion.name} (Цена: ${potions.pcharismaPotion.price}) (Описание: ${potions.pcharismaPotion.explanation})`)
            console.log(`12. ${potions.pintelligencePotion.name} (Цена: ${potions.pintelligencePotion.price}) (Описание: ${potions.pintelligencePotion.explanation})`)
            console.log(`13. ${potions.pphysiquePotion.name} (Цена: ${potions.pphysiquePotion.price}) (Описание: ${potions.pphysiquePotion.explanation})`)
            console.log(`14. ${potions.kumiss.name} x3 (Цена: ${potions.kumiss.price * 3}) (Описание: ${potions.kumiss.explanation})`)
            console.log(`15. ${artifacts.tacticCrystal.name} x2 (Цена: ${artifacts.tacticCrystal.price * 2}) (Описание: ${artifacts.tacticCrystal.explanation})`)
            console.log("")
            console.log(`Ваш баланс: ${player.inventory.coins}`)
            console.log("")
            console.log("16. Выход.")
            const buyAction = readlineSync.question('Action: ')
            switch(buyAction) {
                case "1":
                    if (coinsChecker(magicArmor.stealthPlateArmor.price)) {
                        player.inventory.storageItemsStats.push(magicArmor.stealthPlateArmor)
                        player.inventory.coins -= magicArmor.stealthPlateArmor.price
                        return storeHard3("Предмет куплен!")
                    } else {
                        return storeHard3("У вас недостаточно средств.")
                    }
                case "2":
                    if (coinsChecker(magicArmor.powerPlateArmor.price)) {
                        player.inventory.storageItemsStats.push(magicArmor.powerPlateArmor)
                        player.inventory.coins -= magicArmor.powerPlateArmor.price
                        return storeHard3("Предмет куплен!")
                    } else {
                        return storeHard3("У вас недостаточно средств.")
                    }
                case "3":
                    if (coinsChecker(magicArmor.eloquencePlateArmor.price)) {
                        player.inventory.storageItemsStats.push(magicArmor.eloquencePlateArmor)
                        player.inventory.coins -= magicArmor.eloquencePlateArmor.price
                        return storeHard3("Предмет куплен!")
                    } else {
                        return storeHard3("У вас недостаточно средств.")
                    }
                case "4":
                    if (coinsChecker(magicArmor.clearVisionPlateArmor.price)) {
                        player.inventory.storageItemsStats.push(magicArmor.clearVisionPlateArmor)
                        player.inventory.coins -= magicArmor.clearVisionPlateArmor.price
                        return storeHard3("Предмет куплен!")
                    } else {
                        return storeHard3("У вас недостаточно средств.")
                    }
                case "5":
                    if (coinsChecker(magicWeapon.lifeStealerScimitar.price)) {
                        player.inventory.storageItemsStats.push(magicWeapon.lifeStealerScimitar)
                        player.inventory.coins -= magicWeapon.lifeStealerScimitar.price
                        return storeHard3("Предмет куплен!")
                    } else {
                        return storeHard3("У вас недостаточно средств.")
                    }
                case "6":
                    if (coinsChecker(magicWeapon.bloodBigAxe.price)) {
                        player.inventory.storageItemsStats.push(magicWeapon.bloodBigAxe)
                        player.inventory.coins -= magicWeapon.bloodBigAxe.price
                        return storeHard3("Предмет куплен!")
                    } else {
                        return storeHard3("У вас недостаточно средств.")
                    }
                case "7":
                    if (coinsChecker(magicWeapon.bloodTwoHandedSword.price)) {
                        player.inventory.storageItemsStats.push(magicWeapon.bloodTwoHandedSword)
                        player.inventory.coins -= magicWeapon.bloodTwoHandedSword.price
                        return storeHard3("Предмет куплен!")
                    } else {
                        return storeHard3("У вас недостаточно средств.")
                    }
                case "8":
                    if (coinsChecker(magicWeapon.sizzlingHandAxe.price)) {
                        player.inventory.storageItemsStats.push(magicWeapon.sizzlingHandAxe)
                        player.inventory.coins -= magicWeapon.sizzlingHandAxe.price
                        return storeHard3("Предмет куплен!")
                    } else {
                        return storeHard3("У вас недостаточно средств.")
                    }
                case "9":
                    if (coinsChecker(magicWeapon.acidicLongSpear.price)) {
                        player.inventory.storageItemsStats.push(magicWeapon.acidicLongSpear)
                        player.inventory.coins -= magicWeapon.acidicLongSpear.price
                        return storeHard3("Предмет куплен!")
                    } else {
                        return storeHard3("У вас недостаточно средств.")
                    }
                case "10":
                    if (coinsChecker(magicWeapon.tactiсHandCrossbow.price)) {
                        player.inventory.storageItemsStats.push(magicWeapon.tactiсHandCrossbow)
                        player.inventory.coins -= magicWeapon.tactiсHandCrossbow.price
                        return storeHard3("Предмет куплен!")
                    } else {
                        return storeHard3("У вас недостаточно средств.")
                    }
                case "11":
                    if (coinsChecker(potions.pcharismaPotion.price)) {
                        player.inventory.storageItemsStats.push(potions.pcharismaPotion)
                        player.inventory.coins -= potions.pcharismaPotion.price
                        return storeHard3("Предмет куплен!")
                    } else {
                        return storeHard3("У вас недостаточно средств.")
                    }
                case "12":
                    if (coinsChecker(potions.pintelligencePotion.price)) {
                        player.inventory.storageItemsStats.push(potions.pintelligencePotion)
                        player.inventory.coins -= potions.pintelligencePotion.price
                        return storeHard3("Предмет куплен!")
                    } else {
                        return storeHard3("У вас недостаточно средств.")
                    }
                case "13":
                    if (coinsChecker(potions.pphysiquePotion.price)) {
                        player.inventory.storageItemsStats.push(potions.pphysiquePotion)
                        player.inventory.coins -= potions.pphysiquePotion.price
                        return storeHard3("Предмет куплен!")
                    } else {
                        return storeHard3("У вас недостаточно средств.")
                    }
                case "14":
                    const kumissTotal = potions.kumiss.price * 3
                    if (coinsChecker(kumissTotal)) {
                        for (let i = 0; i < 3; i++) {
                            player.inventory.storageItemsStats.push(potions.kumiss)
                        }
                        player.inventory.coins -= kumissTotal
                        return storeHard3("3 кумыса куплено!")
                    } else {
                        return storeHard3("У вас недостаточно средств.")
                    }
                case "15":
                    const crystalTotal = artifacts.tacticCrystal.price * 2
                    if (coinsChecker(crystalTotal)) {
                        for (let i = 0; i < 2; i++) {
                            player.inventory.storageItemsStats.push(artifacts.tacticCrystal)
                        }
                        player.inventory.coins -= crystalTotal
                        return storeHard3("2 тактических кристалла куплено!")
                    } else {
                        return storeHard3("У вас недостаточно средств.")
                    }
                case "16":
                    return storeHard3()
                default:
                    return storeHard3("Некорректный ввод, введите число нужного предмета.")
            }
        case "2":
            return storeHard3(sell(() => storeHard3()))
        case "3":
            console.log("\nВ центре зала стоит каменный трон. На нём сидит фигура в чёрном. Вы не видите лица, только два красных глаза.")
            console.log("Она не двигается, но вы чувствуете, что она знает о вас всё.")
            console.log("\nЧто спросить?")
            console.log("1. Кто создал это место?")
            console.log("2. Почему мы здесь?")
            console.log("3. Можно ли уйти?")
            console.log("4. Уйти.")
            
            const throneAction = readlineSync.question('Action: ')
            
            switch(throneAction) {
                case "1":
                    console.log("\nГолос разносится по всему залу, заставляя стены дрожать:")
                    console.log("\"Он. Тот, кого нельзя называть. Он построил эту тюрьму для тех, кто не заслужил покоя.\"")
                    console.log("Красные глаза сужаются.")
                    console.log("\"Он всё ещё здесь. Глубоко внизу. Он ждёт.\"")
                    readlineSync.question("\nНажмите Enter, чтобы продолжить...")
                    return storeHard3()
                case "2":
                    console.log("\nФигура наклоняется вперёд, и вы видите, что под капюшоном — пустота.")
                    console.log("\"Вы здесь, потому что убили. Украли. Предали. Вы заслужили это место. Каждый из вас.\"")
                    console.log("Она откидывается назад, и её смех эхом разносится по залу.")
                    readlineSync.question("\nНажмите Enter, чтобы продолжить...")
                    return storeHard3()
                case "3":
                    console.log("\nТишина. Затем шёпот, полный боли:")
                    console.log("\"Никто не уходит. Никто никогда не уходил. Те, кто пытался, стали частью стен. Частью этого места.\"")
                    console.log("Она указывает на стены, и вы замечаете, что в камне застыли человеческие лица.")
                    console.log("\"Хочешь попробовать?\"")
                    readlineSync.question("\nНажмите Enter, чтобы продолжить...")
                    return storeHard3()
                case "4":
                    return storeHard3()
                default:
                    console.log("Фигура замирает, и красные глаза гаснут. Вы чувствуете облегчение.")
                    readlineSync.question("\nНажмите Enter, чтобы продолжить...")
                    return storeHard3()
            }
        case "4":
            return
        default:
            return storeHard3("Некорректный ввод, выберите действие из списка.")
    }
}