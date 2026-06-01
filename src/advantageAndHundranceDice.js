import { diceRandomizer } from "./diceRandomizer"

export const advantageDice = () => {
    const throw1 = diceRandomizer(20)
    const throw2 = diceRandomizer(20)
    if (throw1 >= throw2) {
        return throw1
    } else {
        return throw2
    }
}

export const hindranceDice = () => {
    const throw1 = diceRandomizer(20)
    const throw2 = diceRandomizer(20)
    if (throw1 >= throw2) {
        return throw2
    } else {
        return throw1
    }
}