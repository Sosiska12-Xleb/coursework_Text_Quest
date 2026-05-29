export const diceRandomizer = (num) => {
    switch (num){
        case 4:
            return Math.floor(Math.random() * 4) + 1
        case 6:
            return Math.floor(Math.random() * 6) + 1
        case 8:
            return Math.floor(Math.random() * 8) + 1
        case 10:
            return Math.floor(Math.random() * 10) + 1
        case 12:
            return Math.floor(Math.random() * 12) + 1
        case 20:
            return Math.floor(Math.random() * 20) + 1
        case 100:
            return Math.floor(Math.random() * 100) + 1
    }
        

}