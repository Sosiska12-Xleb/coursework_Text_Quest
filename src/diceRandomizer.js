export const diceRandomizer = (num, quantity = 0) => {
    if (quantity === 0) {
        return Math.floor(Math.random() * num) + 1
    }

    let result = 0
    for (i of quantity) {
        result += Math.floor(Math.random() * num) + 1
    }
    return result
}