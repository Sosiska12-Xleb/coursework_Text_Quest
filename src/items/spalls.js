import { diceRandomizer } from '../diceRandomizer.js'

export const spalls = {
  electricDischarge1: { name: 'Электроразряд 1 ур.', class: 'Атакующее заклинание', effect: diceRandomizer(8), price: 1, explanation: 'Посох выпускает слабый электрический заряд наносящий урон.' },
  electricDischarge2: { name: 'Электроразряд 2 ур.', class: 'Атакующее заклинание', effect: diceRandomizer(8, 2), price: 1, explanation: 'Посох выпускает сильный электрический заряд наносящий урон.' },
  electricDischarge3: { name: 'Электроразряд 3 ур.', class: 'Атакующее заклинание', effect: diceRandomizer(8, 3), price: 2, explanation: 'Посох выпускает мощьный электрический заряд наносящий урон.' },

  magicPlates1: { name: 'Магические пластиный 1 ур.', class: 'Заклинание характеристик', effect: 1, target: 'ac', price: 2, explanation: 'Посох воссоздает вокруг себя слабую магическую защиту, повышающий защиту существа.' },
  magicPlates2: { name: 'Магические пластиный 2 ур.', class: 'Заклинание характеристик', effect: 2, target: 'ac', price: 2, explanation: 'Посох воссоздает вокруг себя хорошую магическую защиту, повышающий защиту существа.' },
  magicPlates3: { name: 'Магические пластиный 3 ур.', class: 'Заклинание характеристик', effect: 3, target: 'ac', price: 3, explanation: 'Посох воссоздает вокруг себя сильную магическую защиту, повышающий защиту существа.' },

  healingSwing1: { name: 'Лечущий взмах 1 ур.', class: 'Заклинание характеристик', effect: diceRandomizer(4), price: 1, target: 'hits', explanation: 'Заклинание незначительно лечит существо несущее посох.' },
  healingSwing2: { name: 'Лечущий взмах 2 ур.', class: 'Заклинание характеристик', effect: diceRandomizer(6), price: 1, target: 'hits', explanation: 'Заклинание неплохо лечит существо несущее посох.' },
  healingSwing3: { name: 'Лечущий взмах 3 ур.', class: 'Заклинание характеристик', effect: diceRandomizer(8), price: 1, target: 'hits', explanation: 'Заклинание эффективно лечит существо несущее посох.' },

  lifeEnhancement1: { name: 'Повышение жизни 1 ур.', class: 'Заклинание характеристик', effect: diceRandomizer(6), price: 2, target: 'time_hits', explanation: 'Значение временных хитов незначительно увеличивается.' },
  lifeEnhancement2: { name: 'Повышение жизни 2 ур.', class: 'Заклинание характеристик', effect: diceRandomizer(8), price: 2, target: 'time_hits', explanation: 'Значение временных хитов умеренно увеличивается.' },
  lifeEnhancement3: { name: 'Повышение жизни 3 ур.', class: 'Заклинание характеристик', effect: diceRandomizer(8, 2), price: 3, target: 'time_hits', explanation: 'Значение временных хитов сильно увеличивается.' },

  fieryWhip1: { name: 'Огнненный хлыст 1 ур.', class: 'Огненное заклинание', effect: diceRandomizer(4, 2), time: diceRandomizer(6), price: 1, explanation: 'Посох воссозадет огненный хлыст бьющий по выбранному существу, поджигая его.' },
  fieryWhip2: { name: 'Огнненный хлыст 2 ур.', class: 'Огненное заклинание', effect: diceRandomizer(6, 2), time: diceRandomizer(6), price: 2, explanation: 'Посох воссозадет огненный хлыст бьющий по выбранному существу, поджигая его.' },
  fieryWhip3: { name: 'Огнненный хлыст 3 ур.', class: 'Огненное заклинание', effect: diceRandomizer(8, 2), time: diceRandomizer(6), price: 3, explanation: 'Посох воссозадет огненный хлыст бьющий по выбранному существу, поджигая его.' },

  fireStorm1: { name: 'Огнненная буря 1 ур.', class: 'Огненное заклинание', subclass: 'Массовое', effect: diceRandomizer(4, 2), time: diceRandomizer(6), price: 3, explanation: 'Из посоха высвобоьждается огненная буря, наносяшая урон всем существам в видимости.' },
  fireStorm2: { name: 'Огнненная буря 2 ур.', class: 'Огненное заклинание', subclass: 'Массовое', effect: diceRandomizer(6, 2), time: diceRandomizer(6), price: 4, explanation: 'Из посоха высвобоьждается огненная буря, наносяшая урон всем существам в видимости.' },
  fireStorm3: { name: 'Огнненная буря 3 ур.', class: 'Огненное заклинание', subclass: 'Массовое', effect: diceRandomizer(8, 2), time: diceRandomizer(6), price: 5, explanation: 'Из посоха высвобоьждается огненная буря, наносяшая урон всем существам в видимости.' },

  bloodyBite1: { name: 'Кровавый укус 1 ур.', class: 'Вампирское заклинание', effect: diceRandomizer(6), price: 1, explanation: 'Выбранное существо теряет свои жизненые силы, которые отдаются владельцу посоха.' },
  bloodyBite2: { name: 'Кровавый укус 2 ур.', class: 'Вампирское заклинание', effect: diceRandomizer(6, 2), price: 3, explanation: 'Выбранное существо теряет свои жизненые силы, которые отдаются владельцу посоха.' },
  bloodyBite3: { name: 'Кровавый укус 3 ур.', class: 'Вампирское заклинание', effect: diceRandomizer(6, 3), price: 4, explanation: 'Выбранное существо теряет свои жизненые силы, которые отдаются владельцу посоха.' },

  witheringSwarm1: { name: 'Иссушающий рой 1 ур.', class: 'Вампирское заклинание', effect: diceRandomizer(6), subclass: 'Массовое', price: 4, explanation: 'Происходит вызов роя летущих мышей вампиров, иссушающие всех врогов в видимости.' },
  witheringSwarm2: { name: 'Иссушающий рой 2 ур.', class: 'Вампирское заклинание', effect: diceRandomizer(6, 2), subclass: 'Массовое', price: 5, explanation: 'Происходит вызов роя летущих мышей вампиров, иссушающие всех врогов в видимости.' },
  witheringSwarm3: { name: 'Иссушающий рой 3 ур.', class: 'Вампирское заклинание', effect: diceRandomizer(6, 3), subclass: 'Массовое', price: 6, explanation: 'Происходит вызов роя летущих мышей вампиров, иссушающие всех врогов в видимости.' },

  poisonousSpray1: { name: 'Ядовитые брызги 1 ур.', class: 'Токсичное заклинание', effect: diceRandomizer(4), price: 2, explanation: 'Из посоха вылетает ядовитый снаряд, отравляющий врага.' },
  poisonousSpray2: { name: 'Ядовитые брызги 2 ур.', class: 'Токсичное заклинание', effect: diceRandomizer(6), price: 4, explanation: 'Из посоха вылетает ядовитый снаряд, отравляющий врага.' },
  poisonousSpray3: { name: 'Ядовитые брызги 3 ур.', class: 'Токсичное заклинание', effect: diceRandomizer(8), price: 6, explanation: 'Из посоха вылетает ядовитый снаряд, отравляющий врага.' },

  toxicCloud1: { name: 'Токсичное облако 1 ур.', class: 'Токсичное заклинание', effect: diceRandomizer(4), subclass: 'Массовое', price: 4, explanation: 'Вокруг врагов в видимости появляется токсичное облако отравляющее их.' },
  toxicCloud2: { name: 'Токсичное облако 2 ур.', class: 'Токсичное заклинание', effect: diceRandomizer(6), subclass: 'Массовое', price: 6, explanation: 'Вокруг врагов в видимости появляется токсичное облако отравляющее их.' },
  toxicCloud3: { name: 'Токсичное облако 3 ур.', class: 'Токсичное заклинание', effect: diceRandomizer(6, 2), subclass: 'Массовое', price: 8, explanation: 'Вокруг врагов в видимости появляется токсичное облако отравляющее их.' },

  magicalResistance: { name: 'Магическое сопротивление', class: 'Заклинание активатор', target: 'resistance', time: 4, price: 5, explanation: 'Существо несущее посох получает сопротивление к урону.' },

  tacticalBreakthrough1: { name: 'Тактический рывок 1 ур.', class: 'Заклинание характеристик', effect: 1, target: 'speed', price: 2, explanation: 'Существо несущее посох, становится быстрее.' },
  tacticalBreakthrough2: { name: 'Тактический рывок 2 ур.', class: 'Заклинание характеристик', effect: 2, target: 'speed', price: 2, explanation: 'Существо несущее посох, становится быстрее.' },
  tacticalBreakthrough3: { name: 'Тактический рывок 3 ур.', class: 'Заклинание характеристик', effect: 3, target: 'speed', price: 3, explanation: 'Существо несущее посох, становится быстрее.' },

  increaseStrength1: { name: 'Повышение силы 1 ур.', class: 'Заклинание характеристик', effect: 1, target: 'strength', price: 2, explanation: 'Существо несущее посох незначительно повышает значение силы.' },
  increaseStrength2: { name: 'Повышение силы 2 ур.', class: 'Заклинание характеристик', effect: 2, target: 'strength', price: 4, explanation: 'Существо несущее посох умеренно повышает значение силы.' },
  increaseStrength3: { name: 'Повышение силы 3 ур.', class: 'Заклинание характеристик', effect: 3, target: 'strength', price: 5, explanation: 'Существо несущее посох сильно повышает значение силы.' },

  increaseDexterity1: { name: 'Повышение ловкости 1 ур.', class: 'Заклинание характеристик', effect: 1, target: 'dexterity', price: 2, explanation: 'Существо несущее посох незначительно повышает значение ловкости.' },
  increaseDexterity2: { name: 'Повышение ловкости 2 ур.', class: 'Заклинание характеристик', effect: 2, target: 'dexterity', price: 4, explanation: 'Существо несущее посох умеренно повышает значение ловкости.' },
  increaseDexterity3: { name: 'Повышение ловкости 3 ур.', class: 'Заклинание характеристик', effect: 3, target: 'dexterity', price: 5, explanation: 'Существо несущее посох сильно повышает значение ловкости.' },

  increasePhysique1: { name: 'Повышение телосложения 1 ур.', class: 'Заклинание характеристик', effect: 1, target: 'physique', price: 2, explanation: 'Существо несущее посох незначительно повышает значение телосложения.' },
  increasePhysique2: { name: 'Повышение телосложения 2 ур.', class: 'Заклинание характеристик', effect: 2, target: 'physique', price: 4, explanation: 'Существо несущее посох умеренно повышает значение телосложения.' },
  increasePhysique3: { name: 'Повышение телосложения 3 ур.', class: 'Заклинание характеристик', effect: 3, target: 'physique', price: 5, explanation: 'Существо несущее посох сильно повышает значение телосложения.' },

  increaseIntelligence1: { name: 'Повышение интеллекта 1 ур.', class: 'Заклинание характеристик', effect: 1, target: 'intelligence', price: 2, explanation: 'Существо несущее посох незначительно повышает значение интеллекта.' },
  increaseIntelligence2: { name: 'Повышение интеллекта 2 ур.', class: 'Заклинание характеристик', effect: 2, target: 'intelligence', price: 4, explanation: 'Существо несущее посох умеренно повышает значение интеллекта.' },
  increaseIntelligence3: { name: 'Повышение интеллекта 3 ур.', class: 'Заклинание характеристик', effect: 3, target: 'intelligence', price: 5, explanation: 'Существо несущее посох сильно повышает значение интеллекта.' },

  increaseWisdom1: { name: 'Повышение мудрости 1 ур.', class: 'Заклинание характеристик', effect: 1, target: 'wisdom', price: 2, explanation: 'Существо несущее посох незначительно повышает значение мудрости.' },
  increaseWisdom2: { name: 'Повышение мудрости 2 ур.', class: 'Заклинание характеристик', effect: 2, target: 'wisdom', price: 4, explanation: 'Существо несущее посох умеренно повышает значение мудрости.' },
  increaseWisdom3: { name: 'Повышение мудрости 3 ур.', class: 'Заклинание характеристик', effect: 3, target: 'wisdom', price: 5, explanation: 'Существо несущее посох сильно повышает значение мудрости.' },

  increaseCharisma1: { name: 'Повышение харизмы 1 ур.', class: 'Заклинание характеристик', effect: 1, target: 'charisma', price: 2, explanation: 'Существо несущее посох незначительно повышает значение харизмы.' },
  increaseCharisma2: { name: 'Повышение харизмы 2 ур.', class: 'Заклинание характеристик', effect: 2, target: 'charisma', price: 4, explanation: 'Существо несущее посох умеренно повышает значение харизмы.' },
  increaseCharisma3: { name: 'Повышение харизмы 3 ур.', class: 'Заклинание характеристик', effect: 3, target: 'charisma', price: 5, explanation: 'Существо несущее посох сильно повышает значение харизмы.' },

  attackBoost1: { name: 'Повышение атаки 1 ур.', class: 'Заклинание атаки', effect: diceRandomizer(4), price: 2, explanation: 'До конца боя владелец посоха увеличивает бонус атаки от оружия.' },
  attackBoost2: { name: 'Повышение атаки 2 ур.', class: 'Заклинание атаки', effect: diceRandomizer(6), price: 3, explanation: 'До конца боя владелец посоха увеличивает бонус атаки от оружия.' },
  attackBoost3: { name: 'Повышение атаки 3 ур.', class: 'Заклинание атаки', effect: diceRandomizer(8), price: 4, explanation: 'До конца боя владелец посоха увеличивает бонус атаки от оружия.' },

  damageBoost1: { name: 'Повышение урона 1 ур.', class: 'Заклинание атаки', effect: diceRandomizer(6), price: 2, explanation: 'До конца боя владелец посоха увеличивает урон от атак.' },
  damageBoost2: { name: 'Повышение урона 2 ур.', class: 'Заклинание атаки', effect: diceRandomizer(8), price: 3, explanation: 'До конца боя владелец посоха увеличивает урон от атак.' },
  damageBoost3: { name: 'Повышение урона 3 ур.', class: 'Заклинание атаки', effect: diceRandomizer(12), price: 4, explanation: 'До конца боя владелец посоха увеличивает урон от атак.' },

  massLightning1: { name: 'Массовая молния 1 ур.', class: 'Атакующее заклинание', subclass: 'Массовое', effect: diceRandomizer(8, 2), price: 3, explanation: 'По всем врагам в видимости бьёт молния.' },
  massLightning2: { name: 'Массовая молния 2 ур.', class: 'Атакующее заклинание', subclass: 'Массовое', effect: diceRandomizer(8, 3), price: 3, explanation: 'По всем врагам в видимости бьёт молния.' },

  damageDiceBoost1: { name: 'Повышение множителя урона 1 ур.', class: 'Заклинание атаки', effect: 1, price: 5, explanation: 'До конца боя увеличивается множитель (кол-во костей) от атак.' },
  damageDiceBoost2: { name: 'Повышение множителя урона 2 ур.', class: 'Заклинание атаки', effect: 2, price: 9, explanation: 'До конца боя увеличивается множитель (кол-во костей) от атак.' },

  lifesphere: { name: 'Жизнесфера', class: 'Заклинание активатор', target: 'invulnerability', price: 13, explanation: 'Вледелец посоха получает полную неуязвимость от атак.' },
}
