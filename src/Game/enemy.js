import { diceRandomizer } from "../diceRandomizer.js"
import { spalls } from "../items/spalls.js"

export const enemies = [
    {
        name: "Гигантская крыса",
        hits: 7,
        ac: 13,
        speed: 1,
        distance: 0,

        timeEffects: {
            time: 0,
            fire: 0,
            acid: 0
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



    {
        name: "Гигантская летучая мышь",
        hits: 22,
        ac: 13,
        speed: 2,
        distance: 0,

        timeEffects: {
            time: 0,
            fire: 0,
            acid: 0
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



    {
        name: "Гигантская многоножка",
        hits: 9,
        ac: 14,
        speed: 1,
        distance: 0,

        timeEffects: {
            time: 0,
            fire: 0,
            acid: 0
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



    {
        name: "Гигантский паук",
        hits: 26,
        ac: 14,
        speed: 1,
        distance: 0,

        timeEffects: {
            time: 0,
            fire: 0,
            acid: 0
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
                effect: {class: "Снижение скорости", subEffect: 1}
            }
        }
    },



    {
        name: "Гигантский паук-волк",
        hits: 11,
        ac: 13,
        speed: 2,
        distance: 0,

        timeEffects: {
            time: 0,
            fire: 0,
            acid: 0
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



    {
        name: "Бандит",
        hits: 11,
        ac: 12,
        speed: 1,
        distance: 0,

        timeEffects: {
            time: 0,
            fire: 0,
            acid: 0
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

    

    {
        name: "Бандит капитан",
        hits: 52,
        ac: 15,
        speed: 1,
        distance: 0,

        timeEffects: {
            time: 0,
            fire: 0,
            acid: 0
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



    {
        name: "Берсерк",
        hits: 68,
        ac: 13,
        speed: 1,
        distance: 0,

        timeEffects: {
            time: 0,
            fire: 0,
            acid: 0
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

    {
        name: "Берсерк-босс",
        hits: 136,
        ac: 16,
        speed: 1,
        distance: 0,

        timeEffects: {
            time: 0,
            fire: 0,
            acid: 0
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



    {
        name: "Ассасин",
        hits: 97,
        ac: 16,
        speed: 1,
        distance: 0,

        timeEffects: {
            time: 0,
            fire: 0,
            acid: 0
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



    {
        name: "Бугай",
        hits: 32,
        ac: 12,
        speed: 1,
        distance: 0,

        timeEffects: {
            time: 0,
            fire: 0,
            acid: 0
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



    {
        name: "Бугай босс",
        hits: 82,
        ac: 16,
        speed: 1,
        distance: 0,

        timeEffects: {
            time: 0,
            fire: 0,
            acid: 0
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

    

    {
        name: "Воин пехотинец",
        hits: 9,
        ac: 13,
        speed: 1,
        distance: 0,

        timeEffects: {
            time: 0,
            fire: 0,
            acid: 0
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

    

    {
        name: "Воин ветереан",
        hits: 65,
        ac: 17,
        speed: 1,
        distance: 0,

        timeEffects: {
            time: 0,
            fire: 0,
            acid: 0
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



    {
        name: "Друид",
        hits: 13,
        ac: 14,
        speed: 1,
        distance: 0,

        timeEffects: {
            time: 0,
            fire: 0,
            acid: 0
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
                SpellEffect: spalls.tacticalBreakthrough1
            }
        }
    },



    {
        name: "Маг ученик",
        hits: 49,
        ac: 15,
        speed: 1,
        distance: 0,

        timeEffects: {
            time: 0,
            fire: 0,
            acid: 0
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
                SpellEffect: spalls.magicPlates2
            }
        }
    },



    {
        name: "Маг",
        hits: 81,
        ac: 15,
        speed: 1,
        distance: 0,

        timeEffects: {
            time: 0,
            fire: 0,
            acid: 0
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
                SpellEffect: spalls.magicPlates2
            }
        }
    },



    {
        name: "Архимаг",
        hits: 170,
        ac: 17,
        speed: 1,
        distance: 0,

        timeEffects: {
            time: 0,
            fire: 0,
            acid: 0
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
                SpellEffect: spalls.magicPlates2
            },
            tacticalBreakthrough3: {
                name: "тактический рывок",
                class: "Заклинание характеристик",
                SpellEffect: spalls.tacticalBreakthrough3
            }
        }
    },



    {
        name: "Культист смерти",
        hits: 121,
        ac: 17,
        speed: 1,
        distance: 0,

        timeEffects: {
            time: 0,
            fire: 0,
            acid: 0
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
                SpellEffect: spalls.magicPlates2
            }
        }
    },



    {
        name: "Культист исчадия",
        hits: 127,
        ac: 16,
        speed: 1,
        distance: 0,

        timeEffects: {
            time: 0,
            fire: 0,
            acid: 0
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



    {
        name: "Великий чёрный вирм",
        hits: 533,
        ac: 22,
        speed: 4,
        distance: 0,

        timeEffects: {
            time: 0,
            fire: 0,
            acid: 0
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

    {
        name: "Взрослый кристаллический дракон",
        hits: 172,
        ac: 16,
        speed: 2,
        distance: 0,

        timeEffects: {
            time: 0,
            fire: 0,
            acid: 0
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
                SpellEffect: spalls.tacticalBreakthrough2
            }
        }
    },



    {
        name: "Железный голем",
        hits: 252,
        ac: 20,
        speed: 1,
        distance: 0,

        timeEffects: {
            time: 0,
            fire: 0,
            acid: 0
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



   {
        name: "Управляемый ужас",
        hits: 68,
        ac: 20,
        speed: 1,
        distance: 0,

        timeEffects: {
            time: 0,
            fire: 0,
            acid: 0
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



    {
        name: "Щитостраж",
        hits: 142,
        ac: 17,
        speed: 1,
        distance: 0,

        timeEffects: {
            time: 0,
            fire: 0,
            acid: 0
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



    {
        name: "Оживленный доспех",
        hits: 33,
        ac: 18,
        speed: 1,
        distance: 0,

        timeEffects: {
            time: 0,
            fire: 0,
            acid: 0
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



    {
        name: "Монодрон",
        hits: 5,
        ac: 15,
        speed: 1,
        distance: 0,

        timeEffects: {
            time: 0,
            fire: 0,
            acid: 0
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

    {
        name: "Дуодрон",
        hits: 11,
        ac: 15,
        speed: 1,
        distance: 0,

        timeEffects: {
            time: 0,
            fire: 0,
            acid: 0
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



    {
        name: "Тридрон",
        hits: 16,
        ac: 15,
        speed: 1,
        distance: 0,

        timeEffects: {
            time: 0,
            fire: 0,
            acid: 0
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



    {
        name: "Квадрон",
        hits: 22,
        ac: 16,
        speed: 1,
        distance: 0,

        timeEffects: {
            time: 0,
            fire: 0,
            acid: 0
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



    {
        name: "Скелет",
        hits: 13,
        ac: 14,
        speed: 1,
        distance: 0,

        timeEffects: {
            time: 0,
            fire: 0,
            acid: 0
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



    {
        name: "Скелет минотавра",
        hits: 45,
        ac: 12,
        speed: 1,
        distance: 0,

        timeEffects: {
            time: 0,
            fire: 0,
            acid: 0
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
]