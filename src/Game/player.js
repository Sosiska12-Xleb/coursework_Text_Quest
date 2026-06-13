export let player = {
  name: "",
  characteristic: {
    strenght: 0,
    dexterity: 0,
    physique: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0,
  },

  stats: {
    ac: 10,
    max_hits: 15,
    hits: 15,
    time_hits: 0,
    speed: 1,
    drunkard: false,
    stealth: true,
  },

  inventory: {
    armors: { armor: '', shield: '' },
    weapon: { firstWeapon: '', secondWeapon: '' },
    storageItemsStats: [],
    coins: 0,
  },

  timeEffects: {
    timeStrenght: 0,
    timeDexterity: 0,
    timePhysique: 0,
    timeIntelligence: 0,
    timeWisdom: 0,
    timeCharisma: 0,

    timeSpeed: 0,
    timeAc: 0,

    timeAttack: 0,
    timeDamage: 0,
    timeDiceX: 1,
  },
  otherTimeEffects: {
      resistance: false,
      invulnerability: false,
      spikes: false,
      fireAttack: false,
      time: 0,
      fire: 0,
      acid: 0
  }
}
