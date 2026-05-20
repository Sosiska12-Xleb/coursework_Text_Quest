let characteristic = {
strenght: 0,
dexterity: 0,
physique: 0,
intelligence: 0,
wisdom: 0,
charisma: 0
}


let savingThrow = {
strenght: characteristic.strenght,
dexterity: characteristic.dexterity,
physique: characteristic.physique,
intelligence: characteristic.intelligence,
wisdom: characteristic.wisdom,
charisma: characteristic.charisma
}

let skills = {
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
}

let stats = {
class: "",
level: 0,
exp: 0,
ac: 10,
initiative: characteristic.dexterity,
speed: 30,
max_hits: 0,
hits: stats.max_hits,
time_hits: 0,
}

let skillBonus = 2
let passivWisdom = 10 + skills.attentiveness

let otherHoldings = {
armor: [],
weapon: [],
language: [],
vision: [],
tools: [],
}

let inventory = []
let coins = {
copper: 0,
silver: 0,
gold: 0,
platinum: 0
}

let skillsAndAbilities = []
let features = []



let baseSpellcastingCharacteristic
let savingThrowDifficulty = 10
let spellAttackBonus

let cells = {
circle1: 0,
circle2: 0,
circle3: 0,
circle4: 0,
circle5: 0,
circle6: 0,
circle7: 0,
circle8: 0,
circle9: 0
}

let spells = {
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