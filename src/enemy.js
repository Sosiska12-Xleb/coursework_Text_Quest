import { diceRandomizer } from "./diceRandomizer.js"

export const enemies = {
    giantRat: {
        name: "Гигантская крыса",
        hits: 7,
        ac: 13,
        speed: 1,

        characteristic: {
            strenght: 2,
            dexterity: 3,
            physique: 0,
            intelligence: -4,
            wisdom: 0,
            charisma: -3,
        },

        timeEffects: {
            timeSpeed: 0,
            timeAc: 0,

            timeAttack: 0,
            timeDamage: 0,
            timeDiceX: 0,

            fire: false,
            acid: false
        },

        attack: {
            bite: {
                name: "укусом",
                class: "Ближний",
                attack: 5,
                damage: diceRandomizer(6) + 3
            }
        }
    },



    giantBat: {
        name: "Гигантская летучая мышь",
        hits: 22,
        ac: 13,
        speed: 2,

        characteristic: {
            strenght: 2,
            dexterity: 3,
            physique: 0,
            intelligence: -4,
            wisdom: 1,
            charisma: -2,
        },

        timeEffects: {
            timeSpeed: 0,
            timeAc: 0,

            timeAttack: 0,
            timeDamage: 0,
            timeDiceX: 0,

            fire: false,
            acid: false
        },

        attack: {
            bite: {
                name: "укусом",
                class: "Ближний",
                attack: 5,
                damage: diceRandomizer(8) + 3
            }
        }
    },



    giantCentipede: {
        name: "Гигантская многоножка",
        hits: 9,
        ac: 14,
        speed: 1,

        characteristic: {
            strenght: -3,
            dexterity: 2,
            physique: +1,
            intelligence: -5,
            wisdom: -2,
            charisma: -4,
        },

        timeEffects: {
            timeSpeed: 0,
            timeAc: 0,

            timeAttack: 0,
            timeDamage: 0,
            timeDiceX: 0,

            fire: false,
            acid: false
        },

        attack: {
            bite: {
                name: "укусом",
                class: "Ближний",
                attack: 4,
                damage: diceRandomizer(4) + 2,
                effect: {class: "Отравление", subEffect: 1}
            }
        }
    },



    giantSpider: {
        name: "Гигантский паук",
        hits: 26,
        ac: 14,
        speed: 1,

        characteristic: {
            strenght: 2,
            dexterity: 3,
            physique: 1,
            intelligence: -4,
            wisdom: 0,
            charisma: -3,
        },

        timeEffects: {
            timeSpeed: 0,
            timeAc: 0,

            timeAttack: 0,
            timeDamage: 0,
            timeDiceX: 0,

            fire: false,
            acid: false
        },

        attack: {
            bite: {
                name: "укусом",
                class: "Ближний",
                attack: 5,
                damage: diceRandomizer(8) + diceRandomizer(6, 2) + 3
            },
            web: {
                name: "паутиной",
                class: "Дальний",
                attack: 0,
                damage: 0,
                effect: {class: "Снижение характеристик", effect: -1, target: "speed"}
            }
        }
    },



    giantWolfSpider: {
        name: "Гигантский паук-волк",
        hits: 11,
        ac: 13,
        speed: 2,

        characteristic: {
            strenght: 1,
            dexterity: 3,
            physique: 1,
            intelligence: -4,
            wisdom: 1,
            charisma: -3,
        },

        timeEffects: {
            timeSpeed: 0,
            timeAc: 0,

            timeAttack: 0,
            timeDamage: 0,
            timeDiceX: 0,

            fire: false,
            acid: false
        },

        attack: {
            bite: {
                name: "укусом",
                class: "Ближний",
                attack: 5,
                damage: diceRandomizer(4) + diceRandomizer(4, 2) + 3
            }
        }
    },



    bandit: {
        name: "Бандит",
        hits: 11,
        ac: 12,
        speed: 1,

        characteristic: {
            strenght: 0,
            dexterity: 1,
            physique: 1,
            intelligence: 0,
            wisdom: 0,
            charisma: 0,
        },

        timeEffects: {
            timeSpeed: 0,
            timeAc: 0,

            timeAttack: 0,
            timeDamage: 0,
            timeDiceX: 0,

            fire: false,
            acid: false
        },

        attack: {
            scimitar: {
                name: "скимитаром",
                class: "Ближний",
                attack: 3,
                damage: diceRandomizer(6) + 1
            },
            lightCrossbow: {
                name: "легкий арабалетом",
                class: "Дальний",
                attack: 3,
                damage: diceRandomizer(8) + 1
            }
        }
    },

    

    banditCaptain: {
        name: "Бандит капитан",
        hits: 52,
        ac: 15,
        speed: 1,

        characteristic: {
            strenght: 2,
            dexterity: 3,
            physique: 2,
            intelligence: 2,
            wisdom: 0,
            charisma: 2,
        },

        timeEffects: {
            timeSpeed: 0,
            timeAc: 0,

            timeAttack: 0,
            timeDamage: 0,
            timeDiceX: 0,

            fire: false,
            acid: false
        },

        attack: {
            multiAttack: true,
            scimitar: {
                name: "скимитаром",
                class: "Ближний",
                attack: 5,
                damage: diceRandomizer(6) + 1
            },
            pistol: {
                name: "пистолем",
                class: "Дальний",
                attack: 5,
                damage: diceRandomizer(10) + 3
            }
        }
    },



    berserker: {
        name: "Берсерк",
        hits: 68,
        ac: 13,
        speed: 1,

        characteristic: {
            strenght: 3,
            dexterity: 1,
            physique: 3,
            intelligence: -1,
            wisdom: 0,
            charisma: -1,
        },

        timeEffects: {
            timeSpeed: 0,
            timeAc: 0,

            timeAttack: 0,
            timeDamage: 0,
            timeDiceX: 0,

            fire: false,
            acid: false
        },

        attack: {
            ax: {
                name: "секирой",
                class: "Ближний",
                attack: 5,
                damage: diceRandomizer(12) + 3
            }
        }
    },

    berserkerCommander: {
        name: "Берсерк",
        hits: 136,
        ac: 16,
        speed: 1,

        characteristic: {
            strenght: 4,
            dexterity: 2,
            physique: 4,
            intelligence: 0,
            wisdom: 2,
            charisma: -1,
        },

        timeEffects: {
            timeSpeed: 0,
            timeAc: 0,

            timeAttack: 0,
            timeDamage: 0,
            timeDiceX: 0,

            fire: false,
            acid: false
        },

        attack: {
            multiAttack: true,
            ax: {
                name: "секирой",
                class: "Ближний",
                attack: 7,
                damage: diceRandomizer(12) + diceRandomizer(6, 3) + 4
            },
            propellantSpear: {
                name: "метательным копьем",
                class: "Дальний",
                attack: 7,
                damage: diceRandomizer(6, 4) + 4
            }
        }
    },



    assa: {
        name: "Бандит",
        hits: 11,
        ac: 12,
        speed: 1,

        characteristic: {
            strenght: 0,
            dexterity: 1,
            physique: 1,
            intelligence: 0,
            wisdom: 0,
            charisma: 0,
        },

        timeEffects: {
            timeSpeed: 0,
            timeAc: 0,

            timeAttack: 0,
            timeDamage: 0,
            timeDiceX: 0,

            fire: false,
            acid: false
        },

        attack: {
            scimitar: {
                name: "скимитаром",
                class: "Ближний",
                attack: 3,
                damage: diceRandomizer(6) + 1
            },
            lightCrossbow: {
                name: "легкий арабалетом",
                class: "Дальний",
                attack: 3,
                damage: diceRandomizer(8) + 1
            }
        }
    },
}