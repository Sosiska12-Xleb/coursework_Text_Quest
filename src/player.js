export let player = {

    characteristic: {
    strenght: 0,
    dexterity: 0,
    physique: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0
    },

    savingThrow: {
    strenght: 0,
    dexterity: 0,
    physique: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0
    },

    skills: {
    acrobatics: 0,
    analysis: 0,
    athletics: 0,
    attentiveness: 0,
    survival: 0,
    performance: 0,
    intimidation: 0,
    history: 0,
    sleight_of_hand: 0,
    magic: 0,
    medicine: 0,
    deception: 0,
    nature: 0,
    insight: 0,
    religion: 0,
    stealth: 0,
    belief: 0,
    animal_care: 0
    },

    stats: {
    class: "",
    subclass: "",
    race: "",
    level: 1,
    exp: 0,
    ac: 10,
    initiative: 0,
    speed: 30,
    max_hits: 0,
    hits: 0,
    time_hits: 0,
    hits_dice: 0
    },

    skillBonus: 2,
    passivWisdom: 10,

    otherHoldings: {
    armor: [],
    weapon: [],
    language: [],
    vision: [],
    tools: [],
    },

    inventory: {
    armors: {armor: "", shield: ""},
    weapon: {firstWeapon: "", secondWeapon: ""},
    Activstorage: [],
    defaultStorage: []
    },

    coins: {
    copper: 0,
    silver: 0,
    gold: 0,
    platinum: 0
    },

    skillsAndAbilities: [],
    features: [],



    baseSpellcastingCharacteristic: "",
    savingThrowDifficulty: 8,
    spellAttackBonus: 0,

    cells: {
    conspiracy: 0,
    famousSpells: 0,    
    circle1: 0,
    circle2: 0,
    circle3: 0,
    circle4: 0,
    circle5: 0,
    circle6: 0,
    circle7: 0,
    circle8: 0,
    circle9: 0,
    spellSlots: 1,
    spellsLevel: 0
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