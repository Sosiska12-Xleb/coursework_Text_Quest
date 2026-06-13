// данные игрока (состояние персонажа)
export let player = {
  name: "", // имя персонажа
  characteristic: {
    strenght: 0,    // сила (влияет на ближний бой)
    dexterity: 0,   // ловкость (влияет на дальний бой и скрытность)
    physique: 0,    // телосложение (влияет на здоровье)
    intelligence: 0, // интеллект (влияет на магию)
    wisdom: 0,      // мудрость (влияет на магию)
    charisma: 0,    // харизма (влияет на лечение)
  },

  stats: {
    ac: 10,           // класс брони (защита)
    max_hits: 15,     // максимальное здоровье
    hits: 15,         // текущее здоровье
    time_hits: 0,     // временные хиты (дополнительная защита)
    speed: 1,         // скорость передвижения
    drunkard: false,  // способность пьяницы
    stealth: true,    // возможность скрыться
  },

  inventory: {
    armors: { armor: '', shield: '' }, // экипированная броня и щит
    weapon: { firstWeapon: '', secondWeapon: '' }, // оружие в двух слотах
    storageItemsStats: [], // предметы в инвентаре
    coins: 0, // монеты
  },

  // временные эффекты на время боя
  timeEffects: {
    timeStrenght: 0,
    timeDexterity: 0,
    timePhysique: 0,
    timeIntelligence: 0,
    timeWisdom: 0,
    timeCharisma: 0,

    timeSpeed: 0,
    timeAc: 0,

    timeAttack: 0,   // бонус к атаке
    timeDamage: 0,   // бонус к урону
    timeDiceX: 1,    // множитель кубов урона
  },
  
  // долговременные эффекты
  otherTimeEffects: {
      resistance: false,     // сопротивление урону
      invulnerability: false, // неуязвимость
      spikes: false,         // шипы (контратака)
      fireAttack: false,     // огненная аура
      time: 0,               // длительность эффектов
      fire: 0,               // урон от огня
      acid: 0                // урон от кислоты
  }
}