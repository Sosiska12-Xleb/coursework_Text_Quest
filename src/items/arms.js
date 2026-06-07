import { diceRandomizer } from "../diceRandomizer.js"

export const arms = {
    simpleHandWeapons: {
        battleStaff: {name: "Боевой посох", class: "Оружие", price: 2, damage: diceRandomizer(6), property: [8]},
        mace: {name: "Булова", class: "Оружие", price: 1, damage: diceRandomizer(6), property: []},
        baton: {name: "Дубинка", class: "Оружие", price: 1, damage: diceRandomizer(4), property: ["Легкое"]},
        knife: {name: "Кинжал", class: "Оружие", price: 1, damage: diceRandomizer(4), property: ["Легкое", "Метательное", "Фехтовальное"]},
        spear: {name: "Копьё", class: "Оружие", price: 3, damage: diceRandomizer(6), property: [8, "Метательное"]},
        lightHammer: {name: "Лёгкий молот", class: "Оружие", price: 2, damage: diceRandomizer(4), property:  ["Легкое", "Метательное"]},
        propellantSpear: {name: "Метательное копьё", class: "Оружие", price: 1, damage: diceRandomizer(6), property: ["Метательное"]},
        club: {name: "Палица", class: "Оружие", price: 2, damage: diceRandomizer(8), property: ["Двуручное"]},
        handAxe: {name: "Ручной топор", class: "Оружие", price: 5, damage: diceRandomizer(6), property: ["Легкое", "Метательное"]},
        sickle: {name: "Серп", class: "Оружие", price: 1, damage: diceRandomizer(4), property: ["Легкое"]}
    },
    simpleRangeWeapon: {
        lightCrossbow: {name: "Легкий арбалет", class: "Дальнобойное оружие", price: 25, damage: diceRandomizer(8), property: ["Двуручное"]},
        dart: {name: "Дротик", class: "Дальнобойное оружие", price: 1, damage: diceRandomizer(4), property: ["Метательное", "Фехтовальное"]},
        shortBow: {name: "Короткий лук", class: "Дальнобойное оружие", price: 25, damage: diceRandomizer(6), property: ["Двуручное"]},
        sling: {name: "Праща", class: "Дальнобойное оружие", price: 1, damage: diceRandomizer(4), property: []}
    },
    militaryHandWeapons: {
        halberd: {name: "Алебарда", class: "Оружие", price: 20, damage: diceRandomizer(10), property: ["Двуручное", "Досягаемость", "Тяжелое"]},
        breakattlePickaxe: {name: "Боевая кирка", class: "Оружие", price: 5, damage: diceRandomizer(8), property: []},
        warHammer: {name: "Боевой молот", class: "Оружие", price: 15, damage: diceRandomizer(8), property: [10]},
        warAxe: {name: "Боевой топор", class: "Оружие", price: 10, damage: diceRandomizer(8), property: [10]},
        glaive: {name: "Глефа", class: "Оружие", price: 20, damage: diceRandomizer(10), property: ["Двуручное", "Досягаемость", "Тяжелое"]},
        twoHandedSword: {name: "Двуручный меч", class: "Оружие", price: 50, damage: diceRandomizer(6, 2), property: ["Двуручное", "Тяжелое"]},
        longSpear: {name: "Длинное копьё", class: "Оружие", price: 10, damage: diceRandomizer(12), property: ["Досягаемость"]},
        longSword: {name: "Длинный меч", class: "Оружие", price: 15, damage: diceRandomizer(8), property: [10]},
        whip: {name: "Кнут", class: "Оружие", price: 2, damage: diceRandomizer(4), property: ["Досягаемость", "Фехтовальное"]},
        shortSword: {name: "Короткий меч", class: "Оружие", price: 10, damage: diceRandomizer(6), property: ["Легкое", "Фехтовальное"]},
        hammer: {name: "Молот", class: "Оружие", price: 10, damage: diceRandomizer(6, 2), property: ["Двуручное", "Тяжелое"]},
        morgenstern: {name: "Моргенштерн", class: "Оружие", price: 15, damage: diceRandomizer(8), property: []},
        peak: {name: "Пика", class: "Оружие", price: 5, damage: diceRandomizer(10), property: ["Двуручное", "Досягаемость", "Тяжелое"]},
        rapier: {name: "Рапира", class: "Оружие", price: 25, damage: diceRandomizer(8), property: ["Фехтовальное"]},
        bigAxe: {name: "Секира", class: "Оружие", price: 30, damage: diceRandomizer(12), property: ["Двуручное", "Тяжелое"]},
        scimitar: {name: "Скимитар", class: "Оружие", price: 25, damage: diceRandomizer(6), property: ["Легкое", "Фехтовальное"]},
        trident: {name: "Трезубец", class: "Оружие", price: 5, damage: diceRandomizer(6), property: [8, "Метательное"]},
        chain: {name: "Цеп", class: "Оружие", price: 10, damage: diceRandomizer(8), property: []}
    },
    militaryRangeWeapon: {
        handCrossbow: {name: "Ручной арбалет", class: "Дальнобойное оружие", price: 75, damage: diceRandomizer(6), property: ["Легкое"]},
        heavyCrossbow: {name: "Тяжёлый арбалет", class: "Дальнобойное оружие", price: 50, damage: diceRandomizer(10), property: ["Двуручное", "Тяжелое"]},
        longBow: {name: "Длинный лук", class: "Дальнобойное оружие", price: 50, damage: diceRandomizer(8), property: ["Двуручное", "Тяжелое"]},
        blowpipe: {name: "Духовая трубка", class: "Дальнобойное оружие", price: 10, damage: 1, property: []}
    }
}