import { player } from '../player.js'
import { diceRandomizer } from "./diceRandomizer"

export const arms = {
    simpleHandWeapons: {
        battleStaff: {name: "Боевой посох", priceSilver: 2, damage: diceRandomizer(6), property: [8]},
        mace: {name: "Булова", price: 5, damage: diceRandomizer(6), property: []},
        baton: {name: "Дубинка", priceSilver: 1, damage: diceRandomizer(4), property: ["Легкое"]},
        knife: {name: "Кинжал", price: 2, damage: diceRandomizer(4), property: ["Легкое", "Метательное", "Фехтовальное"]},
        spear: {name: "Копьё", price: 1, damage: diceRandomizer(6), property: [8, "Метательное"]},
        lightHammer: {name: "Лёгкий молот", price: 2, damage: diceRandomizer(4), property:  ["Легкое", "Метательное"]},
        propellantSpear: {name: "Метательное копьё", priceSilver: 5, damage: diceRandomizer(6), property: ["Метательное"]},
        club: {name: "Палица", priceSilver: 2, damage: diceRandomizer(8), property: ["Двуручное"]},
        handAxe: {name: "Ручной топор", price: 5, damage: diceRandomizer(6), property: ["Легкое", "Метательное"]},
        sickle: {name: "Серп", price: 1, damage: diceRandomizer(4), property: ["Легкое"]}
    },
    simpleRangeWeapon: {
        lightCrossbow: {name: "Легкий арбалет", price: 25, damage: diceRandomizer(8), property: ["Двуручное"]},
        dart: {name: "Дротик", priceCopper: 5, damage: diceRandomizer(4), property: ["Метательное", "Фехтовальное"]},
        shortBow: {name: "Короткий лук", price: 25, damage: diceRandomizer(6), property: ["Двуручное"]},
        sling: {name: "Праща", priceSilver: 1, damage: diceRandomizer(4), property: []}
    },
    militaryHandWeapons: {
        halberd: {name: "Алебарда", price: 20, damage: diceRandomizer(10), property: ["Двуручное", "Досягаемость", "Тяжелое"]},
        breakattlePickaxe: {name: "Боевая кирка", price: 5, damage: diceRandomizer(8), property: []},
        warHammer: {name: "Боевой молот", price: 15, damage: diceRandomizer(8), property: [10]},
        warHammer: {name: "Боевой топор", price: 10, damage: diceRandomizer(8), property: [10]},
        glaive: {name: "Глефа", price: 20, damage: diceRandomizer(10), property: ["Двуручное", "Досягаемость", "Тяжелое"]},
        twoHandedSword: {name: "Двуручный меч", price: 50, damage: diceRandomizer(6, 2), property: ["Двуручное", "Тяжелое"]},
        longSpear: {name: "Длинное копьё", price: 10, damage: diceRandomizer(12), property: ["Досягаемость", "особое"]},
        longSword: {name: "Длинный меч", price: 15, damage: diceRandomizer(8), property: [10]},
        whip: {name: "Кнут", price: 2, damage: diceRandomizer(4), property: ["Досягаемость", "Фехтовальное"]},
        shortSword: {name: "Короткий меч", price: 10, damage: diceRandomizer(6), property: ["Легкое", "Фехтовальное"]},
        hammer: {name: "Молот", price: 10, damage: diceRandomizer(6, 2), property: ["Двуручное", "Тяжелое"]},
        morgenstern: {name: "Моргенштерн", price: 15, damage: diceRandomizer(8), property: []},
        peak: {name: "Пика", price: 5, damage: diceRandomizer(10), property: ["Двуручное", "Досягаемость", "Тяжелое"]},
        rapier: {name: "Рапира", price: 25, damage: diceRandomizer(8), property: ["Фехтовальное"]},
        bigAxe: {name: "Секира", price: 30, damage: diceRandomizer(12), property: ["Двуручное", "Тяжелое"]},
        scimitar: {name: "Скимитар", price: 25, damage: diceRandomizer(6), property: ["Легкое", "Фехтовальное"]},
        trident: {name: "Трезубец", price: 5, damage: diceRandomizer(6), property: [8, "Метательное"]},
        chain: {name: "Цеп", price: 10, damage: diceRandomizer(8), property: []}
    },
    militaryRangeWeapon: {
        lightCrossbow: {name: "Ручной арбалет", price: 75, damage: diceRandomizer(6), property: ["Легкое"]},
        lightCrossbow: {name: "Тяжёлый арбалет", price: 50, damage: diceRandomizer(10), property: ["Двуручное", "Тяжелое"]},
        lightCrossbow: {name: "Длинный лук", price: 50, damage: diceRandomizer(8), property: ["Двуручное", "Тяжелое"]},
        lightCrossbow: {name: "Духовая трубка", price: 10, damage: 1, property: []}
    }
}