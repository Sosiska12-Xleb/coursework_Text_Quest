import { diceRandomizer } from "./diceRandomizer"

export const classes = {
    bard: {
        level1: {
            bardsInspiration: {name: "Вдохновение барда", dice: diceRandomizer(6), explanation: "любое выбранное существо в поле зрения получает бардовское вдохновение - к6."}
        }
    }
}