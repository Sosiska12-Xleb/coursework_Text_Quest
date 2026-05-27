export let player = {

    characteristic: {
    strenght: -1,
    dexterity: -1,
    physique: -1,
    intelligence: -1,
    wisdom: -1,
    charisma: -1
    },

    savingThrow: {
    strenght: characteristic.strenght,
    dexterity: characteristic.dexterity,
    physique: characteristic.physique,
    intelligence: characteristic.intelligence,
    wisdom: characteristic.wisdom,
    charisma: characteristic.charisma
    },

    skills: {
    acrobatics: characteristic.dexterity,
    analysis: characteristic.intelligence,
    athletics: characteristic.strenght,
    attentiveness: characteristic.wisdom,
    survival: characteristic.wisdom,
    performance: characteristic.charisma,
    intimidation: characteristic.charisma,
    history: characteristic.intelligence,
    sleight_of_hand: characteristic.dexterity,
    magic: characteristic.intelligence,
    medicine: characteristic.wisdom,
    deception: characteristic.charisma,
    nature: characteristic.intelligence,
    insight: characteristic.wisdom,
    religion: characteristic.intelligence,
    stealth: characteristic.dexterity,
    belief: characteristic.charisma,
    animal_care: characteristic.wisdom
    },

    stats: {
    class: "",
    level: 0,
    exp: 0,
    ac: 10,
    initiative: characteristic.dexterity,
    speed: 30,
    max_hits: 0,
    hits: stats.max_hits,
    time_hits: 0,
    },

    skillBonus: 2,
    passivWisdom: 10 + skills.attentiveness,

    otherHoldings: {
    armor: [],
    weapon: [],
    language: [],
    vision: [],
    tools: [],
    },

    inventory: [],

    coins: {
    copper: 0,
    silver: 0,
    gold: 0,
    platinum: 0
    },

    skillsAndAbilities: [],
    features: [],



    baseSpellcastingCharacteristic: "",
    savingThrowDifficulty: 10,
    spellAttackBonus: 0,

    cells: {
    circle1: 0,
    circle2: 0,
    circle3: 0,
    circle4: 0,
    circle5: 0,
    circle6: 0,
    circle7: 0,
    circle8: 0,
    circle9: 0
    },

    spells: {
    conspiracy: [],
    circle1: [],
    circle2: [],
    circle3: [],
    circle4: [],
    circle5: [],
    circle6: [],
    circle7: [],
    circle8: [],
    circle9: []
    }
}