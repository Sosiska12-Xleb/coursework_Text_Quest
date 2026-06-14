import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { player } from './player.js'
import { gameState } from './game.js'

// определение путей для сохранений
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const SAVE_FILE_PATH = path.join(__dirname, '../../saves/savegame.json')
const SAVE_DIR_PATH = path.join(__dirname, '../../saves')

// создание директории для сохранений (если не существует)
const ensureSaveDirectory = () => {
    if (!fs.existsSync(SAVE_DIR_PATH)) {
        fs.mkdirSync(SAVE_DIR_PATH, { recursive: true })
    }
}

// функция сохранения игры
export const saveGame = () => {
    // гарантия существования папки сохранений
    ensureSaveDirectory()
    
    // сбор всех данных для сохранения
    const saveData = {
        player: {
            name: player.name,
            characteristic: { ...player.characteristic },
            stats: { ...player.stats },
            inventory: {
                armors: { ...player.inventory.armors },
                weapon: { 
                    firstWeapon: player.inventory.weapon.firstWeapon,
                    secondWeapon: player.inventory.weapon.secondWeapon
                },
                storageItemsStats: [...player.inventory.storageItemsStats],
                coins: player.inventory.coins
            },
            timeEffects: { ...player.timeEffects },
            otherTimeEffects: { ...player.otherTimeEffects }
        },
        gameState: {
            currentLocation: gameState.currentLocation,
            stepsInLocation: gameState.stepsInLocation
        },
        version: '1.0',
        saveDate: new Date().toISOString()
    }
    
    // запись в файл
    try {
        fs.writeFileSync(SAVE_FILE_PATH, JSON.stringify(saveData, null, 2), 'utf-8')
        console.log('|  Игра сохранена.')
        console.log(`|  Путь сохранения: ${SAVE_FILE_PATH}`)
        return true
    } catch (error) {
        console.log('|  Ошибка сохранения игры.')
        console.log(`|  ${error.message}`)
        return false
    }
}

// функция загрузки игры
export const loadGame = () => {
    try {
        // проверка существования файла сохранения
        if (!fs.existsSync(SAVE_FILE_PATH)) {
            console.log('|  Файл сохранения не найден.')
            console.log('|  Начните новую игру для создания сохранения.')
            return false
        }
        
        // чтение и парсинг файла
        const saveData = JSON.parse(fs.readFileSync(SAVE_FILE_PATH, 'utf-8'))
        
        // восстановление данных игрока
        player.name = saveData.player.name
        Object.assign(player.characteristic, saveData.player.characteristic)
        Object.assign(player.stats, saveData.player.stats)
        
        // восстановление инвентаря
        player.inventory.armors = { ...saveData.player.inventory.armors }
        player.inventory.weapon = { 
            firstWeapon: saveData.player.inventory.weapon.firstWeapon,
            secondWeapon: saveData.player.inventory.weapon.secondWeapon
        }
        player.inventory.storageItemsStats = [...saveData.player.inventory.storageItemsStats]
        player.inventory.coins = saveData.player.inventory.coins
        
        // восстановление временных эффектов
        Object.assign(player.timeEffects, saveData.player.timeEffects)
        Object.assign(player.otherTimeEffects, saveData.player.otherTimeEffects)
        
        // восстановление состояния игры
        gameState.currentLocation = saveData.gameState.currentLocation
        gameState.stepsInLocation = saveData.gameState.stepsInLocation
        
        // вывод информации о загрузке
        console.log(`|  Игра загружена.`)
        console.log(`|  Дата сохранения: ${saveData.saveDate}`)
        console.log(`|  Локация: ${saveData.gameState.currentLocation}`)
        return true
    } catch (error) {
        console.log('|  Ошибка загрузки игры.')
        console.log(`|  ${error.message}`)
        return false
    }
}

// функция удаления сохранения
export const deleteSave = () => {
    try {
        if (fs.existsSync(SAVE_FILE_PATH)) {
            fs.unlinkSync(SAVE_FILE_PATH)
            console.log('|  Файл сохранения удалён.')
            return true
        } else {
            console.log('|  Файл сохранения не найден.')
            return false
        }
    } catch (error) {
        console.log('|  Ошибка удаления сохранения.')
        return false
    }
}

// функция проверки наличия сохранения
export const checkSaveExists = () => {
    return fs.existsSync(SAVE_FILE_PATH)
}

// функция получения информации о сохранении (без загрузки)
export const getSaveInfo = () => {
    try {
        if (!fs.existsSync(SAVE_FILE_PATH)) {
            return null
        }
        
        const saveData = JSON.parse(fs.readFileSync(SAVE_FILE_PATH, 'utf-8'))
        return {
            saveDate: saveData.saveDate,
            location: saveData.gameState.currentLocation,
            playerName: saveData.player.name,
            playerHits: `${saveData.player.stats.hits}/${saveData.player.stats.max_hits}`,
            playerCoins: saveData.player.inventory.coins
        }
    } catch (error) {
        return null
    }
}