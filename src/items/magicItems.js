import { diceRandomizer } from "../diceRandomizer"

export const magicItams = {
    potions: {
        healingPotion: {name: "Зелье лечения", effect: diceRandomizer(4, 2) + 2, price: 25},
        bhealingPotion: {name: "Большое зелье лечения", effect: diceRandomizer(4, 4) + 4, price: 50},
        ehealingPotion: {name: "Отличное зелье лечения", effect: diceRandomizer(8, 4) + 8, price: 250},
        phealingPotion: {name: "Превосходное зелье лечения", effect: diceRandomizer(10, 4) + 20, price: 2500},

        temporaryHealingPotion: {name: "Зелье временного здоровья", effect: diceRandomizer(4, 2) + 2, price: 50},
        btemporaryHealingPotion: {name: "Большое зелье временного здоровья", effect: diceRandomizer(4, 4) + 4, price: 100},
        etemporaryHealingPotion: {name: "Отличное зелье временного здоровья", effect: diceRandomizer(8, 4) + 8, price: 500},
        ptemporaryHealingPotion: {name: "Превосходное зелье временного здоровья", effect: diceRandomizer(10, 4) + 20, price: 5000},

        protectionPotion: {name: "Зелье защиты", effect: 2, price: 75},
        bprotectionPotion: {name: "Большое зелье защиты", effect: 4, price: 150},
        eprotectionPotion: {name: "Отличное зелье защиты", effect: 8, price: 750},
        pprotectionPotion: {name: "Превосходное зелье защиты", effect: 12, price: 7500},
    }
}