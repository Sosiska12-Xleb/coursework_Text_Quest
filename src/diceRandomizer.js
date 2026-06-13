// функция генерации случайных чисел (броски кубиков)
export const diceRandomizer = (num, quantity = 0) => {
    // если количество не указано или равно 1 - один бросок
    if (quantity === 0 || quantity === 1) {
        return Math.floor(Math.random() * num) + 1
    }

    // множественные броски (суммирование результатов)
    let result = 0
    for (let i = 0; i < quantity; i++) {
        result += Math.floor(Math.random() * num) + 1
    }
    return result
}