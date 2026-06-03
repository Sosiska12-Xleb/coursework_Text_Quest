import { diceRandomizer } from "./diceRandomizer"

export const advantageDice = (num) => {
    const throw1 = diceRandomizer(num)
    const throw2 = diceRandomizer(num)
    if (throw1 >= throw2) {
        return throw1
    } else {
        return throw2
    }
}

export const hindranceDice = () => {
    const throw1 = diceRandomizer(num)
    const throw2 = diceRandomizer(num)
    if (throw1 >= throw2) {
        return throw2
    } else {
        return throw1
    }
}