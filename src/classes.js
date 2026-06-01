import { diceRandomizer } from "./diceRandomizer"
import { player } from '../player.js'
import { advantageDice, hindranceDice } from "./advantageAndHundranceDice.js"


export let classes = {
    bard: {
        level1: {
            bardsInspiration: {name: "Вдохновение барда", dice: diceRandomizer(6), action: bonus, 
            explanation: "Любое выбранное существо бонусным действием в поле зрения получает бардовское вдохновение - к6."} 
        }
    },
    barbarian: {
        level1: {
            defenseWithoutArmor: {
            name: "Защита без доспехов", defence: 10 + player.characteristic.dexterity + player.characteristic.physique,
            explanation: "Если вы не носите доспехов, ваш КД равен 10 + модиф. ЛОВКОСТИ + модиф. ТЕЛОСЛОЖЕНИЯ."
            },
            rage: {
                name: "Ярость", advantageStrenght: advantageDice(), quantityUse: 2, rageDamage: 2, resistance: [piercing, crushing, cutting], time: 10, action: bonus,
                explanation: "Бонусным дейcтвием вы можете впасть в ярость, будучи в этом состоянии вы полчаете преимуществ в проверках и спасбросках СИЛЫ, доп. урон, и сопротивление к рубящему, колющему и дробящему урону."
            }
        }
    },
    fighter: {
        level1: {
            fightingStyle: {
                name: "Боевой стиль", 
                duelist: {name: "Дуэлянт", bonusDamage: 2, explanation: "Пока вы держите одноручное оружие вы получаете бонус +2 к урону этим оружием."},
                protection: {
                    name: "Защита", hindranceAttack: hindranceDice(), 
                    explanation: "Реакцией вы можете сделать помеху броска атаки существу, атакующее другое, если у вас есть щит.", action: reaction
                },
                defense: {name: "Оборона", bonusAc: 1, explanation: "Пока вы носите доспехи, вы получаете бонус +1 к КД."},
                fightingWithBigWeapon: {
                    name: "Сражение большим оружием", advantageStrenght: advantageDice(),
                    explanation: "Если результат броска урона равен 1 или 2, то кость перебрасывается пока результат не будет выше 2. Работет если вы удерживаете оружие со свойством 'Двуручное' или 'Универсальное'." 
                },
                battleWithTwoWeapons: {
                    name: "Сражение двумя оружиями", bonusMod: player.characteristic.strenght,
                    explanation: "Если вы сражаетесь двумя оружиями, вы можете добавить модификатор характеристики к урону от второй атаки."
                },
                shooting: {name: "Стрельба", bonusAttack: 2, explanation: "Вы получаете бонус +2 к броску атаки, когда атакуете дальнобойным оружием."},
            },
            secondWind: {
                name: "Второе дыхание", heal: diceRandomizer(10) + player.stats.level,
                explanation: "В свой ход вы можете бонусным действием восстановить хиты в размере 1к10 + ваш уровень воина.", action: bonus
            }
        }
    },
    wizard: {
        level1: {
            magicalRecovery: {name: "Магическое восстонавление", recovery: 3, explanation: "Действием вы восстанавливаете 3 ячейки заклинания любых уровней.", action: act}
        }
    },
    druid: {
        level1: {
            druidLanguage: {name: "Друидический язык", language: "Друидический язык" , explanation: "Вы знаете Друидический язык — тайный язык друидов."},
            
        }
    }
}