export let player = {

    characteristic: {
    strenght: 0,
    dexterity: 0,
    physique: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0
    },

    stats: {
    ac: 10,
    max_hits: 15,
    hits: 15,
    time_hits: 0,
    speed: 1
    },

    inventory: {
    armors: {armor: "", shield: ""},
    weapon: {firstWeapon: "", secondWeapon: ""},
    storageItemsStats: [],
    storageNames: [],
    coins: 0
    }
}