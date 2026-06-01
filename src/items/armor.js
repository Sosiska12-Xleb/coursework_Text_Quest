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
    quiltedArmor: {name: "Стеганный доспех", price: 5, ac: 11 + dexterityRangeChecker, strenghtRequirement: 0, stealth: false},
    leatherArmor: {name: "Кожанный доспех", price: 10, ac: 11 + dexterityRangeChecker, strenghtRequirement: 0, stealth: true},
    revetedLeatherArmor: {name: "Проклепанный кожанный доспех", price: 45, ac: 2 + dexterityRangeChecker, strenghtRequirement: 0, stealth: true}
    },
    mediumArmor: {
    selfishArmor: {name: "Шкурный доспех", price: 10, ac: 12 + dexterityRangeChecker, strenghtRequirement: 0, stealth: true},
    chainmailShirt: {name: "Кольчужная рубаха", price: 50, ac: 13 + dexterityRangeChecker, strenghtRequirement: 0, stealth: true},
    scalyArmor: {name: "Чешуйчатый доспех", price: 50, ac: 14 + dexterityRangeChecker, strenghtRequirement: 0, stealth: false},
    cuirass: {name: "Кираса", price: 400, ac: 14 + dexterityRangeChecker, strenghtRequirement: 0, stealth: true},
    HalfPlateArmor: {name: "Полулаты", price: 750, ac: 15 + dexterityRangeChecker, strenghtRequirement: 0, stealth: false}
    },
    heavyArmor: {
    ringShapedArmor: {name: "Колечный доспех", price: 30, ac: 14, strenghtRequirement: 0, stealth: false},
    chainmail: {name: "Кольчуга", price: 75, ac: 16, strenghtRequirement: 13, stealth: false},
    stackedArmor: {name: "Наборный", price: 200, ac: 17, strenghtRequirement: 15, stealth: false},
    plateArmor: {name: "Латы", price: 1500, ac: 18, strenghtRequirement: 15, stealth: false},
    },
    shield: {name: "Щит", price: 10, ac: 2, strenghtRequirement: 0},
    woodenShield: {name: "Деревянный щит", price: 10, ac: 2, strenghtRequirement: 0}
}