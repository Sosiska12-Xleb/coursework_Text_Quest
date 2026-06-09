import { player } from '../player.js'

export const dexterityRangeChecker = (num) => {
  if (num > 2) {
    return 2
  }
  else {
    return num
  }
}

export const armors = {
  lightArmor: {
    quiltedArmor: { name: 'Стеганный доспех', class: 'Доспех', price: 5, ac: 11 + dexterityArmor, strenghtRequirement: 0, stealth: false, rerity: 10 },
    leatherArmor: { name: 'Кожанный доспех', class: 'Доспех', price: 10, ac: 11 + dexterityArmor, strenghtRequirement: 0, stealth: true, rerity: 9 },
    revetedLeatherArmor: { name: 'Проклепанный кожанный доспех', class: 'Доспех', price: 45, ac: 12 + dexterityArmor, strenghtRequirement: 0, stealth: true, rerity: 7 },
  },
  mediumArmor: {
    selfishArmor: { name: 'Шкурный доспех', class: 'Доспех', price: 10, ac: 12 + dexterityArmor, strenghtRequirement: 0, stealth: true, rerity: 8 },
    chainmailShirt: { name: 'Кольчужная рубаха', class: 'Доспех', price: 50, ac: 13 + dexterityArmor, strenghtRequirement: 0, stealth: true, rerity: 7 },
    scalyArmor: { name: 'Чешуйчатый доспех', class: 'Доспех', price: 50, ac: 14 + dexterityArmor, strenghtRequirement: 0, stealth: false, rerity: 6 },
    cuirass: { name: 'Кираса', class: 'Доспех', price: 400, ac: 14 + dexterityArmor, strenghtRequirement: 0, stealth: true, rerity: 4 },
    halfPlateArmor: { name: 'Полулаты', class: 'Доспех', price: 750, ac: 15 + dexterityArmor, strenghtRequirement: 0, stealth: false, rerity: 3 },
  },
  heavyArmor: {
    ringShapedArmor: { name: 'Колечный доспех', class: 'Доспех', price: 30, ac: 14, strenghtRequirement: 0, stealth: false, rerity: 8 },
    chainmail: { name: 'Кольчуга', class: 'Доспех', price: 75, ac: 16, strenghtRequirement: 13, stealth: false, rerity: 6 },
    stackedArmor: { name: 'Наборный доспех', class: 'Доспех', price: 200, ac: 17, strenghtRequirement: 15, stealth: false, rerity: 5 },
    plateArmor: { name: 'Латы', class: 'Доспех', price: 1500, ac: 18, strenghtRequirement: 15, stealth: false, rerity: 2 },
  },
  shield: { name: 'Щит', class: 'Доспех', price: 10, ac: 2, strenghtRequirement: 0, rerity: 9 }
}
