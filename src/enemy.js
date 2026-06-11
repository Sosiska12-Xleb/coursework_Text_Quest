import { diceRandomizer } from "./diceRandomizer.js"
import { spalls } from "./items/spalls.js"

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



    assassin: {
        name: "Ассасин",
        hits: 97,
        ac: 16,
        speed: 1,

        characteristic: {
            strenght: 0,
            dexterity: 4,
            physique: 2,
            intelligence: 3,
            wisdom: 0,
            charisma: 0,
        },

        timeEffects: {
            fire: false,
            acid: false
        },

        attack: {
            scimitar: {
                multiAttack: true,
                name: "коротким мечом",
                class: "Ближний",
                attack: 7,
                damage: diceRandomizer(6) + 4 + diceRandomizer(6, 5),
                effect: {class: "Отравление", subEffect: 1}
            },
            lightCrossbow: {
                name: "легкий арабалетом",
                class: "Дальний",
                attack: 7,
                damage: diceRandomizer(8) + 4 + diceRandomizer(6, 6)
            }
        }
    },



    tough: {
        name: "Бугай",
        hits: 32,
        ac: 12,
        speed: 1,

        characteristic: {
            strenght: 2,
            dexterity: 1,
            physique: 2,
            intelligence: 0,
            wisdom: 0,
            charisma: 0,
        },

        timeEffects: {
            fire: false,
            acid: false
        },

        attack: {
            mace: {
                name: "буловой",
                class: "Ближний",
                attack: 4,
                damage: diceRandomizer(6) + 2
            },
            heavyCrossbow: {
                name: "тяжёлым арабалетом",
                class: "Дальний",
                attack: 3,
                damage: diceRandomizer(10) + 1
            }
        }
    },



    toughBoss: {
        name: "Бугай босс",
        hits: 82,
        ac: 16,
        speed: 1,

        characteristic: {
            strenght: 3,
            dexterity: 2,
            physique: 3,
            intelligence: 0,
            wisdom: 0,
            charisma: 0,
        },

        timeEffects: {
            fire: false,
            acid: false
        },

        attack: {
            multiAttack: true,
            warHammer: {
                name: "боевым молотом",
                class: "Ближний",
                attack: 5,
                damage: diceRandomizer(8, 2) + 2
            },
            heavyCrossbow: {
                name: "тяжёлым арабалетом",
                class: "Дальний",
                attack: 4,
                damage: diceRandomizer(10, 2) + 2
            }
        }
    },

    

    warriorInfantry: {
        name: "Воин пехотинец",
        hits: 9,
        ac: 13,
        speed: 1,

        characteristic: {
            strenght: 1,
            dexterity: 0,
            physique: 0,
            intelligence: -1,
            wisdom: 0,
            charisma: -1,
        },

        timeEffects: {
            fire: false,
            acid: false
        },

        attack: {
            spear: {
                name: "копьем",
                class: "Ближний",
                attack: 3,
                damage: diceRandomizer(6) + 1
            }
        }
    },

    

    warriorVeteran: {
        name: "Воин ветереан",
        hits: 65,
        ac: 17,
        speed: 1,

        characteristic: {
            strenght: 3,
            dexterity: 1,
            physique: 2,
            intelligence: 0,
            wisdom: 0,
            charisma: 0,
        },

        timeEffects: {
            fire: false,
            acid: false
        },

        attack: {
            multiAttack: true,
            twoHandedSword: {
                name: "двуручным мечем",
                class: "Ближний",
                attack: 5,
                damage: diceRandomizer(6, 2) + 3
            },
            heavyCrossbow: {
                name: "тяжёлым арабалетом",
                class: "Дальний",
                attack: 3,
                damage: diceRandomizer(10, 2) + 1
            }
        }
    },



    druid: {
        name: "Друид",
        hits: 13,
        ac: 14,
        speed: 1,

        characteristic: {
            strenght: 0,
            dexterity: 1,
            physique: 1,
            intelligence: 1,
            wisdom: 3,
            charisma: 0,
        },

        timeEffects: {
            fire: false,
            acid: false
        },

        attack: {
            curlyStaff: {
                name: "вьющимся посохом",
                class: "Ближний",
                attack: 5,
                damage: diceRandomizer(8) + 3 + diceRandomizer(4)
            },
            greenReflection: {
                name: "зеленым отблеском",
                class: "Дальний",
                attack: 5,
                damage: diceRandomizer(6, 3)
            },
            electricDischarge2: {
                name: "электрозарядом",
                class: "Дальний",
                attack: 5,
                damage: diceRandomizer(8, 2)
            },
            tacticalBreakthrough1: {
                name: "тактический рывок",
                class: "Заклинание характеристик",
                effect: spalls.tacticalBreakthrough1
            }
        }
    },



    mageApprentice: {
        name: "Маг ученик",
        hits: 49,
        ac: 15,
        speed: 1,

        characteristic: {
            strenght: -1,
            dexterity: 2,
            physique: 1,
            intelligence: 3,
            wisdom: 1,
            charisma: 0,
        },

        timeEffects: {
            fire: false,
            acid: false
        },

        attack: {
            arcaneExplosionA: {
                name: "арканным взрывом",
                class: "Ближний",
                attack: 5,
                damage: diceRandomizer(10, 2) + 3
            },
            arcaneExplosionB: {
                name: "арканным взрывом",
                class: "Дальний",
                attack: 5,
                damage: diceRandomizer(10, 2) + 3
            },
            electricDischarge2: {
                name: "электрозарядом",
                class: "Дальний",
                attack: 5,
                damage: diceRandomizer(8, 2)
            },
            magicPlates2: {
                name: "магические пластины",
                class: "Заклинание характеристик",
                effect: spalls.magicPlates2
            }
        }
    },



    mage: {
        name: "Маг",
        hits: 81,
        ac: 15,
        speed: 1,

        characteristic: {
            strenght: -1,
            dexterity: 2,
            physique: 0,
            intelligence: 3,
            wisdom: 4,
            charisma: 0,
        },

        timeEffects: {
            fire: false,
            acid: false
        },

        attack: {
            multiAttack: true,
            arcaneExplosionA: {
                name: "арканным взрывом",
                class: "Ближний",
                attack: 6,
                damage: diceRandomizer(8, 3) + 3
            },
            arcaneExplosionB: {
                name: "арканным взрывом",
                class: "Дальний",
                attack: 6,
                damage: diceRandomizer(8, 3) + 3
            },
            fieryWhip3: {
                name: "огненным хлыстом",
                class: "Дальний",
                attack: 6,
                damage: diceRandomizer(8, 2),
                effect: {class: "Возгарание", time: diceRandomizer(6)}
            },
            magicPlates2: {
                name: "магические пластины",
                class: "Заклинание характеристик",
                effect: spalls.magicPlates2
            }
        }
    },



    archMage: {
        name: "Архимаг",
        hits: 170,
        ac: 17,
        speed: 1,

        characteristic: {
            strenght: 0,
            dexterity: 2,
            physique: 1,
            intelligence: 5,
            wisdom: 2,
            charisma: 3,
        },

        timeEffects: {
            fire: false,
            acid: false
        },

        attack: {
            multiAttack: true,
            arcaneExplosionA: {
                name: "арканным взрывом",
                class: "Ближний",
                attack: 9,
                damage: diceRandomizer(10, 4) + 5
            },
            arcaneExplosionB: {
                name: "арканным взрывом",
                class: "Дальний",
                attack: 9,
                damage: diceRandomizer(10, 4) + 5
            },
            electricDischarge3: {
                name: "электрозарядом",
                class: "Дальний",
                attack: 9,
                damage: diceRandomizer(8, 3)
            },
            magicPlates2: {
                name: "магические пластины",
                class: "Заклинание характеристик",
                effect: spalls.magicPlates2
            },
            tacticalBreakthrough3: {
                name: "тактический рывок",
                class: "Заклинание характеристик",
                effect: spalls.tacticalBreakthrough3
            }
        }
    },



    deathCultist: {
        name: "Культист смерти",
        hits: 121,
        ac: 17,
        speed: 1,

        characteristic: {
            strenght: 4,
            dexterity: 1,
            physique: 4,
            intelligence: 1,
            wisdom: 3,
            charisma: 2,
        },

        timeEffects: {
            fire: false,
            acid: false
        },

        attack: {
            multiAttack: true,
            creepyScythe: {
                name: "жуткой косой",
                class: "Ближний",
                attack: 7,
                damage: diceRandomizer(10) + 4 + diceRandomizer(10, 2)
            },
            rayOfDeath: {
                name: "лучом смерти",
                class: "Дальний",
                attack: 6,
                damage: diceRandomizer(10, 4)
            },
            fieryWhip3: {
                name: "огненным хлыстом",
                class: "Дальний",
                attack: 6,
                damage: diceRandomizer(8, 2),
                effect: {class: "Возгарание", time: diceRandomizer(6)}
            },
            magicPlates2: {
                name: "магические пластины",
                class: "Заклинание характеристик",
                effect: spalls.magicPlates2
            }
        }
    },



    fiendCultist: {
        name: "Культист исчадия",
        hits: 127,
        ac: 16,
        speed: 1,

        characteristic: {
            strenght: 4,
            dexterity: 2,
            physique: 3,
            intelligence: 1,
            wisdom: 4,
            charisma: 0,
        },

        timeEffects: {
            fire: false,
            acid: false
        },

        attack: {
            multiAttack: true,
            axeOfTheContract: {
                name: "топором договора",
                class: "Ближний",
                attack: 7,
                damage: diceRandomizer(12, 1) + 4 + diceRandomizer(8, 3)
            },
            fieryWhip3: {
                name: "огненным хлыстом",
                class: "Дальний",
                attack: 6,
                damage: diceRandomizer(8, 2),
                effect: {class: "Возгарание", time: diceRandomizer(6)}
            },
        }
    },



    blackGreatwyrm: {
        name: "Великий чёрный вирм",
        hits: 533,
        ac: 22,
        speed: 4,

        characteristic: {
            strenght: 10,
            dexterity: 2,
            physique: 10,
            intelligence: 5,
            wisdom: 5,
            charisma: 8,
        },

        timeEffects: {
            fire: false,
            acid: false
        },

        attack: {
            multiAttack: true,
            bite: {
                name: "укусом",
                class: "Ближний",
                attack: 18,
                damage: diceRandomizer(10, 2) + 10 + diceRandomizer(12, 2)
            },
            claw: {
                name: "коготем",
                class: "Ближний",
                attack: 18,
                damage: diceRandomizer(8, 2) + 10
            },
            tail: {
                name: "хвостом",
                class: "Ближний",
                attack: 18,
                damage: diceRandomizer(8, 2) + 10
            },
            acidBreathing: {
                name: "кислотным дыханием",
                class: "Дальний",
                attack: 10,
                damage: diceRandomizer(12, 12),
                effect: {class: "Отравление", subEffect: 2}
            }
        }
    },

    aboultCrystalDragon: {
        name: "Взрослый кристаллический дракон",
        hits: 172,
        ac: 16,
        speed: 2,

        characteristic: {
            strenght: 5,
            dexterity: 1,
            physique: 5,
            intelligence: 4,
            wisdom: 2,
            charisma: 4,
        },

        timeEffects: {
            fire: false,
            acid: false
        },

        attack: {
            multiAttack: true,
            bite: {
                name: "укусом",
                class: "Ближний",
                attack: 9,
                damage: diceRandomizer(10, 2) + 5 + diceRandomizer(8)
            },
            claws: {
                name: "коготями",
                class: "Ближний",
                attack: 9,
                damage: diceRandomizer(8) + 5
            },
            flickeringBreathing: {
                name: "мерцающим дыханием",
                class: "Дальний",
                attack: 5,
                damage: diceRandomizer(8, 9)
            },
            tacticalBreakthrough2: {
                name: "тактический рывок",
                class: "Заклинание характеристик",
                effect: spalls.tacticalBreakthrough2
            }
        }
    },



    ironGolem: {
        name: "Железный голем",
        hits: 252,
        ac: 20,
        speed: 1,

        characteristic: {
            strenght: 7,
            dexterity: -1,
            physique: 5,
            intelligence: -4,
            wisdom: 0,
            charisma: -5,
        },

        timeEffects: {
            fire: false,
            acid: false
        },

        attack: {
            multiAttack: true,
            bladeHand: {
                name: "рукой-клинком",
                class: "Ближний",
                attack: 12,
                damage: diceRandomizer(8, 3) + 7 + diceRandomizer(6, 3)
            },
            burningShell: {
                name: "жгучим снарядом",
                class: "Дальний",
                attack: 10,
                damage: diceRandomizer(8, 8)
            },
            acidBreathing: {
                name: "кислотным дыханием",
                class: "Дальний",
                attack: 0,
                damage: diceRandomizer(10, 10),
                effect: {class: "Отравление", subEffect: 1}
            }
        }
    },



    helmedHorror: {
        name: "Управляемый ужас",
        hits: 68,
        ac: 20,
        speed: 1,

        characteristic: {
            strenght: 4,
            dexterity: 1,
            physique: 3,
            intelligence: 0,
            wisdom: 0,
            charisma: 0,
        },

        timeEffects: {
            fire: false,
            acid: false
        },

        attack: {
            multiAttack: true,
            magicSword: {
                name: "магическим мечем",
                class: "Ближний",
                attack: 6,
                damage: diceRandomizer(8) + diceRandomizer(10) + 4
            }
        }
    },



    shieldGuardian: {
        name: "Щитостраж",
        hits: 142,
        ac: 17,
        speed: 1,

        characteristic: {
            strenght: 4,
            dexterity: -1,
            physique: 4,
            intelligence: 7,
            wisdom: 0,
            charisma: -4,
        },

        timeEffects: {
            fire: false,
            acid: false
        },

        attack: {
            multiAttack: true,
            fist: {
                name: "кулаком",
                class: "Ближний",
                attack: 7,
                damage: diceRandomizer(6, 2) + diceRandomizer(6, 2) + 4
            }
        }
    },



    animatedArmor: {
        name: "Оживленный доспех",
        hits: 33,
        ac: 18,
        speed: 1,

        characteristic: {
            strenght: 2,
            dexterity: 0,
            physique: 1,
            intelligence: -5,
            wisdom: -4,
            charisma: -5,
        },

        timeEffects: {
            fire: false,
            acid: false
        },

        attack: {
            multiAttack: true,
            fist: {
                name: "кулаком",
                class: "Ближний",
                attack: 4,
                damage: diceRandomizer(6) + 2
            }
        }
    },



    monodrone: {
        name: "Монодрон",
        hits: 5,
        ac: 15,
        speed: 1,

        characteristic: {
            strenght: 0,
            dexterity: 2,
            physique: 1,
            intelligence: -3,
            wisdom: 0,
            charisma: -3,
        },

        timeEffects: {
            fire: false,
            acid: false
        },

        attack: {
            mechanism: {
                name: "механизмом",
                class: "Ближний",
                attack: 4,
                damage: diceRandomizer(8) + 2
            },
            throwingMechanism: {
                name: "метательным механизмом",
                class: "Дальний",
                attack: 4,
                damage: diceRandomizer(8) + 2
            }
        }
    },

    duodrone: {
        name: "Дуодрон",
        hits: 11,
        ac: 15,
        speed: 1,

        characteristic: {
            strenght: 0,
            dexterity: 1,
            physique: 1,
            intelligence: -2,
            wisdom: 0,
            charisma: -2,
        },

        timeEffects: {
            fire: false,
            acid: false
        },

        attack: {
            multiAttack: true,
            knifeMechanismA: {
                name: "механическим клинком",
                class: "Ближний",
                attack: 3,
                damage: diceRandomizer(6) + 1
            },
            knifeMechanismB: {
                name: "механическим клинком",
                class: "Дальний",
                attack: 3,
                damage: diceRandomizer(6) + 1
            }
        }
    },



    tridrone: {
        name: "Тридрон",
        hits: 16,
        ac: 15,
        speed: 1,

        characteristic: {
            strenght: 1,
            dexterity: 1,
            physique: 1,
            intelligence: -1,
            wisdom: 0,
            charisma: -1,
        },

        timeEffects: {
            fire: false,
            acid: false
        },

        attack: {
            multiAttack: true,
            spearMechanismA: {
                name: "механическим клинком",
                class: "Ближний",
                attack: 3,
                damage: diceRandomizer(6) + 1
            },
            spearMechanismB: {
                name: "механическим клинком",
                class: "Дальний",
                attack: 3,
                damage: diceRandomizer(6) + 1
            }
        }
    },



    Quadrone: {
        name: "Квадрон",
        hits: 22,
        ac: 16,
        speed: 1,

        characteristic: {
            strenght: 0,
            dexterity: 2,
            physique: 1,
            intelligence: -3,
            wisdom: 0,
            charisma: -3,
        },

        timeEffects: {
            fire: false,
            acid: false
        },

        attack: {
            multiAttack: true,
            fist: {
                name: "кулаком",
                class: "Ближний",
                attack: 4,
                damage: diceRandomizer(4) + 2
            },
            throwingMechanism: {
                name: "метательным механизмом",
                class: "Дальний",
                attack: 4,
                damage: diceRandomizer(4) + 2
            }
        }
    },



    skeleton: {
        name: "Скелет",
        hits: 13,
        ac: 14,
        speed: 1,

        characteristic: {
            strenght: 0,
            dexterity: 3,
            physique: 2,
            intelligence: -2,
            wisdom: -1,
            charisma: -3,
        },

        timeEffects: {
            fire: false,
            acid: false
        },

        attack: {
            shortSword: {
                name: "коротким мечом",
                class: "Ближний",
                attack: 5,
                damage: diceRandomizer(6) + 3
            },
            shortBow: {
                name: "коротким лукком",
                class: "Дальний",
                attack: 5,
                damage: diceRandomizer(6) + 3
            }
        }
    },



    minotaurSkeleton: {
        name: "Скелет",
        hits: 45,
        ac: 12,
        speed: 40,

        characteristic: {
            strenght: 4,
            dexterity: 0,
            physique: 2,
            intelligence: -2,
            wisdom: -1,
            charisma: -3,
        },

        timeEffects: {
            fire: false,
            acid: false
        },

        attack: {
            fist: {
                name: "кулаком",
                class: "Ближний",
                attack: 6,
                damage: diceRandomizer(6, 2) + 4
            },
            butting: {
                name: "боданием",
                class: "Ближний",
                attack: 6,
                damage: diceRandomizer(10, 2) + 4
            }
        }
    }
}