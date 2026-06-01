import { diceRandomizer } from "./diceRandomizer"
import { player } from '../player.js'

export const classes = {
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
    }
}