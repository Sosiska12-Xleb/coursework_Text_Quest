import { diceRandomizer } from '../diceRandomizer.js'

export const arms = {
  simpleHandWeapons: {
    battleStaff: { name: 'Боевой посох', class: 'Оружие', price: 2, damage: diceRandomizer(6), property: [], rerity: 9, explanation: 'Длинный деревянный посох, используется для защиты и атаки.' },
    mace: { name: 'Булова', class: 'Оружие', price: 1, damage: diceRandomizer(6), property: [], rerity: 10, explanation: 'Деревянная рукоять с металлическим навершием, дробит кости.' },
    baton: { name: 'Дубинка', class: 'Оружие', price: 1, damage: diceRandomizer(4), property: ['Легкое'], rerity: 10, explanation: 'Простая деревянная дубинка, удобна в ближнем бою.' },
    knife: { name: 'Кинжал', class: 'Оружие', price: 1, damage: diceRandomizer(4), property: ['Легкое', 'Фехтовальное'], rerity: 8, explanation: 'Короткий клинок, можно метать или использовать в ближнем бою.' },
    spear: { name: 'Копьё', class: 'Оружие', price: 3, damage: diceRandomizer(8), property: [], rerity: 8, explanation: 'Длинное древко с наконечником, хорошая досягаемость.' },
    lightHammer: { name: 'Лёгкий молот', class: 'Оружие', price: 2, damage: diceRandomizer(4), property: ['Легкое'], rerity: 9, explanation: 'Небольшой молоток, можно метать или бить в ближнем бою.' },
    club: { name: 'Палица', class: 'Оружие', price: 2, damage: diceRandomizer(8), property: [], rerity: 8, explanation: 'Тяжёлая дубина с утолщённым концом, наносит серьёзные травмы.' },
    handAxe: { name: 'Ручной топор', class: 'Оружие', price: 5, damage: diceRandomizer(6), property: ['Легкое'], rerity: 8, explanation: 'Компактный топорик, рубит и может метаться.' },
    sickle: { name: 'Серп', class: 'Оружие', price: 1, damage: diceRandomizer(4), property: ['Легкое'], rerity: 10, explanation: 'Изогнутый сельскохозяйственный инструмент, опасен в бою.' },
  },
  simpleRangeWeapon: {
    lightCrossbow: { name: 'Легкий арбалет', class: 'Дальнобойное оружие', price: 25, damage: diceRandomizer(8), property: [], rerity: 7, explanation: 'Небольшой арбалет, требует перезарядки после каждого выстрела.' },
    dart: { name: 'Дротик', class: 'Дальнобойное оружие', price: 1, damage: diceRandomizer(4), property: [], rerity: 8, explanation: 'Маленькое метательное копьё, удобно носить с собой.' },
    shortBow: { name: 'Короткий лук', class: 'Дальнобойное оружие', price: 25, damage: diceRandomizer(6), property: [], rerity: 7, explanation: 'Небольшой лук из дерева и тетивы, скорострельный.' },
    sling: { name: 'Праща', class: 'Дальнобойное оружие', price: 1, damage: diceRandomizer(4), property: [], rerity: 9, explanation: 'Ремень для метания камней, прост в использовании.' },
  },
  militaryHandWeapons: {
    halberd: { name: 'Алебарда', class: 'Оружие', price: 20, damage: diceRandomizer(10), property: ['Досягаемость'], rerity: 5, explanation: 'Комбинированное древковое оружие с топором и копьём.' },
    breakattlePickaxe: { name: 'Боевая кирка', class: 'Оружие', price: 5, damage: diceRandomizer(8), property: [], rerity: 7, explanation: 'Тяжёлая кирка для пробивания брони.' },
    warHammer: { name: 'Боевой молот', class: 'Оружие', price: 15, damage: diceRandomizer(8), property: [], rerity: 6, explanation: 'Тяжёлый молот на длинной рукояти.' },
    warAxe: { name: 'Боевой топор', class: 'Оружие', price: 10, damage: diceRandomizer(8), property: [], rerity: 7, explanation: 'Тяжёлый топор для рубки врагов.' },
    glaive: { name: 'Глефа', class: 'Оружие', price: 20, damage: diceRandomizer(10), property: ['Досягаемость'], rerity: 5, explanation: 'Клинок на длинном древке, отличная досягаемость.' },
    twoHandedSword: { name: 'Двуручный меч', class: 'Оружие', price: 50, damage: diceRandomizer(6, 2), property: [], rerity: 4, explanation: 'Огромный меч, требующий двух рук, смертоносен.' },
    longSpear: { name: 'Длинное копьё', class: 'Оружие', price: 10, damage: diceRandomizer(12), property: ['Досягаемость'], rerity: 6, explanation: 'Очень длинное копьё для боя на дистанции.' },
    longSword: { name: 'Длинный меч', class: 'Оружие', price: 15, damage: diceRandomizer(8), property: [], rerity: 6, explanation: 'Универсальный прямой меч, можно держать одной или двумя руками.' },
    whip: { name: 'Кнут', class: 'Оружие', price: 2, damage: diceRandomizer(4), property: ['Досягаемость', 'Фехтовальное'], rerity: 6, explanation: 'Длинный кожаный кнут, хлещет врагов на расстоянии.' },
    shortSword: { name: 'Короткий меч', class: 'Оружие', price: 10, damage: diceRandomizer(6), property: ['Легкое', 'Фехтовальное'], rerity: 7, explanation: 'Короткий и лёгкий меч, удобен в тесных помещениях.' },
    hammer: { name: 'Молот', class: 'Оружие', price: 10, damage: diceRandomizer(6, 2), property: [], rerity: 6, explanation: 'Тяжёлый кузнечный молот, приспособленный для боя.' },
    morgenstern: { name: 'Моргенштерн', class: 'Оружие', price: 15, damage: diceRandomizer(8), property: [], rerity: 6, explanation: 'Булава с шипами, наносит рваные раны.' },
    peak: { name: 'Пика', class: 'Оружие', price: 5, damage: diceRandomizer(10), property: ['Досягаемость'], rerity: 6, explanation: 'Длинная пика для построения против кавалерии.' },
    rapier: { name: 'Рапира', class: 'Оружие', price: 25, damage: diceRandomizer(8), property: ['Фехтовальное'], rerity: 5, explanation: 'Тонкий колющий клинок для изящного фехтования.' },
    bigAxe: { name: 'Секира', class: 'Оружие', price: 30, damage: diceRandomizer(12), property: ['Двуручное'], rerity: 4, explanation: 'Огромный широколезвийный топор для двух рук.' },
    scimitar: { name: 'Скимитар', class: 'Оружие', price: 25, damage: diceRandomizer(6), property: ['Легкое', 'Фехтовальное'], rerity: 5, explanation: 'Изогнутый меч с лезвием по внешней стороне.' },
    trident: { name: 'Трезубец', class: 'Оружие', price: 5, damage: diceRandomizer(6), property: [], rerity: 5, explanation: 'Копьё с тремя зубцами, удобно для ловли и боя.' },
    chain: { name: 'Цеп', class: 'Оружие', price: 10, damage: diceRandomizer(8), property: [], rerity: 7, explanation: 'Рукоять с цепью и шипастым шаром на конце.' },
  },
  militaryRangeWeapon: {
    handCrossbow: { name: 'Ручной арбалет', class: 'Дальнобойное оружие', price: 75, damage: diceRandomizer(6), property: ['Легкое'], rerity: 4, explanation: 'Компактный арбалет для стрельбы одной рукой.' },
    heavyCrossbow: { name: 'Тяжёлый арбалет', class: 'Дальнобойное оружие', price: 50, damage: diceRandomizer(10), property: [], rerity: 5, explanation: 'Мощный арбалет, пробивает любую броню.' },
    longBow: { name: 'Длинный лук', class: 'Дальнобойное оружие', price: 50, damage: diceRandomizer(8), property: [], rerity: 4, explanation: 'Большой лук из тиса, требует силы для натяжения.' },
    blowpipe: { name: 'Духовая трубка', class: 'Дальнобойное оружие', price: 10, damage: 1, property: [], rerity: 3, explanation: 'Трубка для метания маленьких дротиков с ядом.' },
  }
}