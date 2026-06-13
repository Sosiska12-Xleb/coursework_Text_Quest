// файл для хранения истории действий игрока

// массив для хранения записей истории
let historyLog = []

// максимальное количество хранимых действий (ограничение памяти)
const MAX_HISTORY_SIZE = 100

// функция добавления действия в историю
export const addHistory = (action) => {
    // создание временной метки
    const timestamp = new Date().toLocaleTimeString()
    // добавление записи в начало массива (свежие записи сверху)
    historyLog.unshift({ time: timestamp, action: action })
    
    // ограничение размера истории (удаление старых записей)
    if (historyLog.length > MAX_HISTORY_SIZE) {
        historyLog.pop()
    }
}

// функция получения всей истории
export const getHistory = () => {
    return historyLog
}

// функция очистки истории (при начале новой игры)
export const clearHistory = () => {
    historyLog = []
}

// функция показа истории игроку
export const showHistory = () => {
    // проверка наличия записей
    if (historyLog.length === 0) {
        console.log('|  История действий пуста.')
        return
    }
    
    // отображение последних 20 записей
    console.log('\n|  ==================== ИСТОРИЯ ДЕЙСТВИЙ ====================')
    for (let i = 0; i < Math.min(historyLog.length, 20); i++) {
        const entry = historyLog[i]
        console.log(`|  ${entry.time} - ${entry.action}`)
    }
    console.log('|  ==========================================================')
}