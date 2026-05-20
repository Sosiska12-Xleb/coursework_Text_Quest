import readlineSync from 'readline-sync'

const content = fs.readFileSync('MEGA_DUNGEON.txt', 'utf-8')

const menu = () => {
    console.log("                                 Добро пожловать в текстовый квест...                                ")
    console.log(content)                                                                                                                  
    console.log("                            Игра основанная на системе D&D 5e редакции                               ")
    console.log("                               От: Титановой сосиски (для курсовой)                                  ")
    console.log("")
    console.log("")
    console.log("                             Для выбора действия введите нужное число:                               ")
    console.log("")
    console.log("                              1 : Продолжить на последнем сохранении                                 ")
    console.log("                              2 :         Начать новую игру                                          ")
    console.log("                              3 :             Загрузить                                              ")
    console.log("                              4 :       Об игре и разработчики                                       ")
    console.log("                              5 :             Достижения                                             ")
    console.log("")
    console.log("")
}