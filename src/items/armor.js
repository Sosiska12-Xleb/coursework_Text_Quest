import { player } from '../Game/player.js'

// функция для получения актуального КД брони
export const calculateArmorAc = (armor) => {
    if (!armor) {
        return 0
    }
    
    // если уже есть рассчитанный currentAc
    if (armor.currentAc !== undefined && typeof armor.currentAc === 'number') {
        return armor.currentAc
    }
    
    let baseAc = armor.baseAc || armor.ac || 10
    
    if (armor.useDexterity === true) {
        let dexBonus = player.characteristic.dexterity
        if (dexBonus > 2) {
            dexBonus = 2
        } else if (dexBonus < -2) {
            dexBonus = -2
        }
        return baseAc + dexBonus
    }
    
    return baseAc
}

export const armors = {
  lightArmor: {
    quiltedArmor: { 
      name: 'Стеганный доспех', 
      class: 'Доспех', 
      price: 5, 
      baseAc: 11,
      useDexterity: true,
      strenghtRequirement: 0, 
      stealth: false, 
      rerity: 10, 
      explanation: 'Лёгкий стёганный доспех, обеспечивающий базовую защиту.' 
    },
    leatherArmor: { 
      name: 'Кожанный доспех', 
      class: 'Доспех', 
      price: 10, 
      baseAc: 11,
      useDexterity: true,
      strenghtRequirement: 0, 
      stealth: true, 
      rerity: 9, 
      explanation: 'Доспех из выделанной кожи, не сковывает движения.' 
    },
    revetedLeatherArmor: { 
      name: 'Проклепанный кожанный доспех', 
      class: 'Доспех', 
      price: 45, 
      baseAc: 12,
      useDexterity: true,
      strenghtRequirement: 0, 
      stealth: true, 
      rerity: 7, 
      explanation: 'Укреплённый металлическими заклёпками кожаный доспех.' 
    },
  },
  mediumArmor: {
    selfishArmor: { 
      name: 'Шкурный доспех', 
      class: 'Доспех', 
      price: 10, 
      baseAc: 12,
      useDexterity: true,
      strenghtRequirement: 0, 
      stealth: true, 
      rerity: 8, 
      explanation: 'Доспех из толстой звериной шкуры, тёплый и прочный.' 
    },
    chainmailShirt: { 
      name: 'Кольчужная рубаха', 
      class: 'Доспех', 
      price: 50, 
      baseAc: 13,
      useDexterity: true,
      strenghtRequirement: 0, 
      stealth: true, 
      rerity: 7, 
      explanation: 'Рубаха из переплетённых металлических колец.' 
    },
    scalyArmor: { 
      name: 'Чешуйчатый доспех', 
      class: 'Доспех', 
      price: 50, 
      baseAc: 14,
      useDexterity: true,
      strenghtRequirement: 0, 
      stealth: false, 
      rerity: 6, 
      explanation: 'Доспех из нашитых металлических чешуек.' 
    },
    cuirass: { 
      name: 'Кираса', 
      class: 'Доспех', 
      price: 400, 
      baseAc: 14,
      useDexterity: true,
      strenghtRequirement: 0, 
      stealth: true, 
      rerity: 4, 
      explanation: 'Цельнометаллический нагрудник, отличная защита торса.' 
    },
    halfPlateArmor: { 
      name: 'Полулаты', 
      class: 'Доспех', 
      price: 750, 
      baseAc: 15,
      useDexterity: true,
      strenghtRequirement: 0, 
      stealth: false, 
      rerity: 3, 
      explanation: 'Комбинированный доспех из кожи и металлических пластин.' 
    },
  },
  heavyArmor: {
    ringShapedArmor: { 
      name: 'Колечный доспех', 
      class: 'Доспех', 
      price: 30, 
      baseAc: 14,
      useDexterity: false,
      strenghtRequirement: 0, 
      stealth: false, 
      rerity: 8, 
      explanation: 'Доспех из нашитых металлических колец на кожаную основу.' 
    },
    chainmail: { 
      name: 'Кольчуга', 
      class: 'Доспех', 
      price: 75, 
      baseAc: 16,
      useDexterity: false,
      strenghtRequirement: 13, 
      stealth: false, 
      rerity: 6, 
      explanation: 'Полноценная кольчужная рубаха с рукавами и капюшоном.' 
    },
    stackedArmor: { 
      name: 'Наборный доспех', 
      class: 'Доспех', 
      price: 200, 
      baseAc: 17,
      useDexterity: false,
      strenghtRequirement: 15, 
      stealth: false, 
      rerity: 5, 
      explanation: 'Доспех из перекрывающих друг друга металлических пластин.' 
    },
    plateArmor: { 
      name: 'Латы', 
      class: 'Доспех', 
      price: 1500, 
      baseAc: 18,
      useDexterity: false,
      strenghtRequirement: 15, 
      stealth: false, 
      rerity: 2, 
      explanation: 'Лучший из доступных доспехов, полная защита из металлических пластин.' 
    },
  },
  shield: { 
    name: 'Щит', 
    class: 'Щит', 
    price: 10, 
    baseAc: 2,
    useDexterity: false,
    strenghtRequirement: 0, 
    rerity: 9, 
    explanation: 'Деревянный щит, обитый металлом. Повышает класс брони.' 
  }
}