import { player } from '../player.js'

const dexterityRangeChecker = () => {
    if (player.characteristic.dexterity > 2) {
        return 2
    } else {
        return player.characteristic.dexterity
    }
}

export const armors = {
    lightArmor: {
    quiltedArmor: {name: "Стеганный доспех", class: "Доспех", price: 5, ac: 11 + dexterityRangeChecker, strenghtRequirement: 0, stealth: false},
    leatherArmor: {name: "Кожанный доспех", class: "Доспех", price: 10, ac: 11 + dexterityRangeChecker, strenghtRequirement: 0, stealth: true},
    revetedLeatherArmor: {name: "Проклепанный кожанный доспех", class: "Доспех", price: 45, ac: 2 + dexterityRangeChecker, strenghtRequirement: 0, stealth: true}
    },
    mediumArmor: {
    selfishArmor: {name: "Шкурный доспех", class: "Доспех", price: 10, ac: 12 + dexterityRangeChecker, strenghtRequirement: 0, stealth: true},
    chainmailShirt: {name: "Кольчужная рубаха", class: "Доспех", price: 50, ac: 13 + dexterityRangeChecker, strenghtRequirement: 0, stealth: true},
    scalyArmor: {name: "Чешуйчатый доспех", class: "Доспех", price: 50, ac: 14 + dexterityRangeChecker, strenghtRequirement: 0, stealth: false},
    cuirass: {name: "Кираса", class: "Доспех", price: 400, ac: 14 + dexterityRangeChecker, strenghtRequirement: 0, stealth: true},
    halfPlateArmor: {name: "Полулаты", class: "Доспех", price: 750, ac: 15 + dexterityRangeChecker, strenghtRequirement: 0, stealth: false}
    },
    heavyArmor: {
    ringShapedArmor: {name: "Колечный доспех", class: "Доспех", price: 30, ac: 14, strenghtRequirement: 0, stealth: false},
    chainmail: {name: "Кольчуга", class: "Доспех", price: 75, ac: 16, strenghtRequirement: 13, stealth: false},
    stackedArmor: {name: "Наборный", class: "Доспех", price: 200, ac: 17, strenghtRequirement: 15, stealth: false},
    plateArmor: {name: "Латы", class: "Доспех", price: 1500, ac: 18, strenghtRequirement: 15, stealth: false},
    },
    shield: {name: "Щит", class: "Доспех", price: 10, ac: 2, strenghtRequirement: 0}
}