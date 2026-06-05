import { diceRandomizer } from "../diceRandomizer"
import { arms } from "./arms"

export const potions = {

    healingPotion: {name: "Зелье лечения", class: "Зелье характеристик", effect: diceRandomizer(4, 2) + 2, target: "hits", price: 25},
    bhealingPotion: {name: "Большое зелье лечения", class: "Зелье характеристик", effect: diceRandomizer(4, 4) + 4, target: "hits", price: 50},
    ehealingPotion: {name: "Отличное зелье лечения", class: "Зелье характеристик", effect: diceRandomizer(8, 4) + 8, target: "hits", price: 250},
    phealingPotion: {name: "Превосходное зелье лечения", class: "Зелье характеристик", effect: diceRandomizer(10, 4) + 20, target: "hits", price: 2500},

    temporaryHealingPotion: {name: "Зелье временного здоровья", class: "Зелье характеристик", effect: diceRandomizer(4, 2) + 2, target: "time_hits", price: 50},
    btemporaryHealingPotion: {name: "Большое зелье временного здоровья", class: "Зелье характеристик", effect: diceRandomizer(4, 4) + 4, target: "time_hits", price: 100},
    etemporaryHealingPotion: {name: "Отличное зелье временного здоровья", class: "Зелье характеристик", effect: diceRandomizer(8, 4) + 8, target: "time_hits", price: 500},
    ptemporaryHealingPotion: {name: "Превосходное зелье временного здоровья", class: "Зелье характеристик", effect: diceRandomizer(10, 4) + 20, target: "time_hits", price: 5000},

    protectionPotion: {name: "Зелье защиты", class: "Зелье характеристик", effect: 2, target: "ac", price: 75},
    bprotectionPotion: {name: "Большое зелье защиты", class: "Зелье характеристик", effect: 4, target: "ac", price: 150},
    eprotectionPotion: {name: "Отличное зелье защиты", class: "Зелье характеристик", effect: 8, target: "ac", price: 750},
    pprotectionPotion: {name: "Превосходное зелье защиты", class: "Зелье характеристик", effect: 12, target: "ac", price: 7500},

    strenghtPotion: {name: "Зелье силы", class: "Зелье характеристик", effect: 1, target: "strengh", price: 75},
    bstrenghtPotion: {name: "Большое зелье силы", class: "Зелье характеристик", effect: 2, target: "strengh", price: 100},
    estrenghtPotion: {name: "Отличное зелье силы", class: "Зелье характеристик", effect: 4, target: "strengh", price: 500},
    pstrenghtPotion: {name: "Превосходное зелье силы", class: "Зелье характеристик", effect: 6, target: "strengh", price: 5000},

    dexterityPotion: {name: "Зелье ловкости", class: "Зелье характеристик", effect: 1, target: "dexterity", price: 75},
    bdexterityPotion: {name: "Большое зелье ловкости", class: "Зелье характеристик", effect: 2, target: "dexterity", price: 100},
    edexterityPotion: {name: "Отличное зелье ловкости", class: "Зелье характеристик", effect: 4, target: "dexterity", price: 500},
    pdexterityPotion: {name: "Превосходное зелье ловкости", class: "Зелье характеристик", effect: 6, target: "dexterity", price: 5000},

    physiquePotion: {name: "Зелье выносливости", class: "Зелье характеристик", effect: 1, target: "physique", price: 75},
    bphysiquePotion: {name: "Большое зелье выносливости", class: "Зелье характеристик", effect: 2, target: "physique", price: 100},
    ephysiquePotion: {name: "Отличное зелье выносливости", class: "Зелье характеристик", effect: 4, target: "physique", price: 500},
    pphysiquePotion: {name: "Превосходное зелье выносливости", class: "Зелье характеристик", effect: 6, target: "physique", price: 5000},

    intelligencePotion: {name: "Зелье интеллекта", class: "Зелье характеристик", effect: 1, target: "intelligence", price: 75},
    bintelligencePotion: {name: "Большое зелье интеллекта", class: "Зелье характеристик", effect: 2, target: "intelligence", price: 100},
    eintelligencePotion: {name: "Отличное зелье интеллекта", class: "Зелье характеристик", effect: 4, target: "intelligence", price: 500},
    pintelligencePotion: {name: "Превосходное зелье интеллекта", class: "Зелье характеристик", effect: 6, target: "intelligence", price: 5000},

    wisdomPotion: {name: "Зелье мудрости", class: "Зелье характеристик", effect: 1, target: "wisdom", price: 75},
    bwisdomPotion: {name: "Большое зелье мудрости", class: "Зелье характеристик", effect: 2, target: "wisdom", price: 100},
    ewisdomPotion: {name: "Отличное зелье мудрости", class: "Зелье характеристик", effect: 4, target: "wisdom", price: 500},
    pwisdomPotion: {name: "Превосходное зелье мудрости", class: "Зелье характеристик", effect: 6, target: "wisdom", price: 5000},
    
    charismaPotion: {name: "Зелье харизмы", class: "Зелье характеристик", effect: 1, target: "charisma", price: 75},
    bcharismaPotion: {name: "Большое зелье харизмы", class: "Зелье характеристик", effect: 2, target: "charisma", price: 100},
    echarismaPotion: {name: "Отличное зелье харизмы", class: "Зелье характеристик", effect: 4, target: "charisma", price: 500},
    pcharismaPotion: {name: "Превосходное зелье харизмы", class: "Зелье характеристик", effect: 6, target: "charisma", price: 5000},


    megaPotion: {name: "Мега зелье", class: "Мега зелье", effect: 2, price: 200},
    bmegaPotion: {name: "Большое мега зелье", class: "Мега зелье", effect: 3, price: 700},
    emegaPotion: {name: "Отличное мега зелье", class: "Мега зелье", effect: 5, price: 2500},
    pmegaPotion: {name: "Превосходное мега зелье", class: "Мега зелье", effect: 8, price: 7000},


    resistancePotion: {name: "Зелье сопротивления", class: "Зелье активатор", target: "resistance", price: 350},
    invulnerabilityPotion: {name: "Зелье неуязвимости", class: "Зелье активатор", target: "invulnerability", price: 1700},
    spikePotion: {name: "Зелье шипов", class: "Зелье активатор", target: "spikes", price: 1700},
    firePotion: {name: "Зелье атакующего пламени", class: "Зелье активатор", target: "fire attack", price: 400},


    beer: {name: "Пиво", class: "Пиво", effect: 5, price: 20},
    kvas: {name: "Квас", class: "Пиво", effect: 15, price: 55},
    kumiss: {name: "Кумыс", class: "Пиво", effect: 50, price: 650},


    chaosPotion: {name: "Зелье статистического хаоса", class: "Зелье хаоса", price: 8000}
    
}


export const magicWeapon = {
    vampirKnife: {name: "Вампирский клинок", stats: arms.simpleHandWeapons.knife, class: "Вампирское", effect: diceRandomizer(4), price: 150},
    vampirSpear: {name: "Вампирское острие", stats: arms.simpleHandWeapons.spear, class: "Вампирское", effect: diceRandomizer(6), price: 180},
    vampirSickle: {name: "Вампирский жнец", stats: arms.simpleHandWeapons.Sickle, class: "Вампирское", effect: diceRandomizer(4), price: 140},
    vampirTwoHandedSword: {name: "Вампирский двуручный меч", stats: arms.militaryHandWeapons.twoHandedSword, class: "Вампирское", effect: diceRandomizer(6, 2), price: 450},
    vampirBigAxe: {name: "Вампирская cекира", stats: arms.militaryHandWeapons.bigAxe, class: "Вампирское", effect: diceRandomizer(12), price: 700},
    vampirShortBow: {name: "Вампирский короткий лук", stats: arms.simpleRangeWeapon.shortBow, class: "Вампирское", effect: diceRandomizer(6), price: 500},
    vampirHeavyCrossbow: {name: "Вампирский тяжёлый арбалет", stats: arms.militaryRangeWeapon.heavyCrossbow, class: "Вампирское", effect: diceRandomizer(10), price: 750},
    vampirScimitar: {name: "Вампирский скимитар", stats: arms.militaryHandWeapons.scimitar, class: "Вампирское", effect: diceRandomizer(6), price: 500},
    
    bloodKnife: {name: "Кровавый клинок", stats: arms.simpleHandWeapons.knife, class: "Вампирское", effect: diceRandomizer(8), price: 350},
    bloodSpear: {name: "Кровавое острие", stats: arms.simpleHandWeapons.spear, class: "Вампирское", effect: diceRandomizer(12), price: 400},
    bloodSickle: {name: "Кровавый жнец", stats: arms.simpleHandWeapons.Sickle, class: "Вампирское", effect: diceRandomizer(8), price: 330},
    bloodTwoHandedSword: {name: "Кровавый двуручный меч", stats: arms.militaryHandWeapons.twoHandedSword, class: "Вампирское", effect: diceRandomizer(8, 4), price: 1000},
    bloodBigAxe: {name: "Кровавая cекира", stats: arms.militaryHandWeapons.bigAxe, class: "Вампирское", effect: diceRandomizer(20), price: 1400},
    bloodShortBow: {name: "Кровавый короткий лук", stats: arms.simpleRangeWeapon.shortBow, class: "Вампирское", effect: diceRandomizer(12), price: 1000},
    bloodHeavyCrossbow: {name: "Кровавый тяжёлый арбалет", stats: arms.militaryRangeWeapon.heavyCrossbow, class: "Вампирское", effect: diceRandomizer(20), price: 1550},
    bloodScimitar: {name: "Кровавый скимитар", stats: arms.militaryHandWeapons.scimitar, class: "Вампирское", effect: diceRandomizer(12), price: 1000},
    
    lifeStealerKnife: {name: "Забирающий жизнь клинок", stats: arms.simpleHandWeapons.knife, class: "Вампирское", effect: diceRandomizer(120), price: 800},
    lifeStealerSpear: {name: "Забирающее жизнь острие", stats: arms.simpleHandWeapons.spear, class: "Вампирское", effect: diceRandomizer(20), price: 900},
    lifeStealerSickle: {name: "Забирающий жизнь жнец", stats: arms.simpleHandWeapons.Sickle, class: "Вампирское", effect: diceRandomizer(12, 2), price: 770},
    lifeStealerTwoHandedSword: {name: "Забирающий жизнь двуручный меч", stats: arms.militaryHandWeapons.twoHandedSword, class: "Вампирское", effect: diceRandomizer(12, 4), price: 2100},
    lifeStealerBigAxe: {name: "Забирающий жизнь cекира", stats: arms.militaryHandWeapons.bigAxe, class: "Вампирское", effect: diceRandomizer(20, 2), price: 3000},
    lifeStealerShortBow: {name: "Забирающий жизнь короткий лук", stats: arms.simpleRangeWeapon.shortBow, class: "Вампирское", effect: diceRandomizer(12, 2), price: 2200},
    lifeStealerHeavyCrossbow: {name: "Забирающий жизнь тяжёлый арбалет", stats: arms.militaryRangeWeapon.heavyCrossbow, class: "Вампирское", effect: diceRandomizer(20, 2), price: 3500},
    lifeStealerScimitar: {name: "Забирающий жизнь скимитар", stats: arms.militaryHandWeapons.scimitar, class: "Вампирское", effect: diceRandomizer(12, 2), price: 2000},


    sparklingBaton: {name: "Искрящаяся дубинка", stats: arms.simpleHandWeapons.baton, class: "Огненное", effect: diceRandomizer(4), time: 2, price: 150},
    sparklingLightHammer: {name: "Искрящийся лёгкий молот", stats: arms.simpleHandWeapons.lightHammer, class: "Огненное", effect: diceRandomizer(4), time: 2, price: 180},
    sparklingClub: {name: "Искрящаяся палица", stats: arms.simpleHandWeapons.club, class: "Огненное", effect: diceRandomizer(4), time: 2, price: 180},
    sparklingHandAxe: {name: "Искрящийся ручной топор", stats: arms.simpleHandWeapons.handAxe, class: "Огненное", effect: diceRandomizer(4), time: 2, price: 270},
    sparklingBattleStaff: {name: "Искрящийся боевой посох", stats: arms.simpleHandWeapons.battleStaff, class: "Огненное", effect: diceRandomizer(4), time: 2, price: 180},
    sparklingLightCrossbow: {name: "Искрящийся легкий арбалет", stats: arms.simpleRangeWeapon.lightCrossbow, class: "Огненное", effect: diceRandomizer(4), time: 2, price: 600},
    sparklingGlaive: {name: "Искрящаяся глефа", stats: arms.militaryHandWeapons.glaive, class: "Огненное", effect: diceRandomizer(4), time: 2, price: 550},
    sparklingMorgenstern: {name: "Искрящийся моргенштерн", stats: arms.militaryHandWeapons.morgenstern, class: "Огненное", effect: diceRandomizer(4), time: 2, price: 480},
    sparklingChain: {name: "Искрящийся цеп", stats: arms.militaryHandWeapons.chain, class: "Огненное", effect: diceRandomizer(4), time: 2, price: 170},
    sparklingLongBow: {name: "Искрящийся длинный лук", stats: arms.militaryRangeWeapon.longBow, class: "Огненное", effect: diceRandomizer(4), time: 2, price: 900},

    fireBaton: {name: "Огненная дубинка", stats: arms.simpleHandWeapons.baton, class: "Огненное", effect: diceRandomizer(8), time: 5, price: 300},
    fireLightHammer: {name: "Огненный лёгкий молот", stats: arms.simpleHandWeapons.lightHammer, class: "Огненное", effect: diceRandomizer(8), time: 5, price: 360},
    fireClub: {name: "Огненная палица", stats: arms.simpleHandWeapons.club, class: "Огненное", effect: diceRandomizer(8), time: 5, price: 360},
    fireHandAxe: {name: "Огненный ручной топор", stats: arms.simpleHandWeapons.handAxe, class: "Огненное", effect: diceRandomizer(8), time: 5, price: 600},
    fireBattleStaff: {name: "Огненный боевой посох", stats: arms.simpleHandWeapons.battleStaff, class: "Огненное", effect: diceRandomizer(8), time: 5, price: 400},
    fireLightCrossbow: {name: "Огненный легкий арбалет", stats: arms.simpleRangeWeapon.lightCrossbow, class: "Огненное", effect: diceRandomizer(8), time: 5, price: 1200},
    fireGlaive: {name: "Огненная глефа", stats: arms.militaryHandWeapons.glaive, class: "Огненное", effect: diceRandomizer(8), time: 5, price: 1100},
    fireMorgenstern: {name: "Огненный моргенштерн", stats: arms.militaryHandWeapons.morgenstern, class: "Огненное", effect: diceRandomizer(8), time: 5, price: 1000},
    fireChain: {name: "Огненный цеп", stats: arms.militaryHandWeapons.chain, class: "Огненное", effect: diceRandomizer(8), time: 5, price: 400},
    fireLongBow: {name: "Огненный длинный лук", stats: arms.militaryRangeWeapon.longBow, class: "Огненное", effect: diceRandomizer(8), time: 5, price: 1800},

    sizzlingBaton: {name: "Испепелящая дубинка", stats: arms.simpleHandWeapons.baton, class: "Огненное", effect: diceRandomizer(20), time: 6, price: 650},
    sizzlingLightHammer: {name: "Испепелящий лёгкий молот", stats: arms.simpleHandWeapons.lightHammer, class: "Огненное", effect: diceRandomizer(20), time: 6, price: 800},
    sizzlingClub: {name: "Испепелящая палица", stats: arms.simpleHandWeapons.club, class: "Огненное", effect: diceRandomizer(20), time: 6, price: 800},
    sizzlingHandAxe: {name: "Испепелящий ручной топор", stats: arms.simpleHandWeapons.handAxe, class: "Огненное", effect: diceRandomizer(20), time: 6, price: 1200},
    sizzlingBattleStaff: {name: "Испепелящий боевой посох", stats: arms.simpleHandWeapons.battleStaff, class: "Огненное", effect: diceRandomizer(20), time: 6, price: 800},
    sizzlingLightCrossbow: {name: "Испепелящий легкий арбалет", stats: arms.simpleRangeWeapon.lightCrossbow, class: "Огненное", effect: diceRandomizer(20), time: 6, price: 2500},
    sizzlingGlaive: {name: "Испепелящая глефа", stats: arms.militaryHandWeapons.glaive, class: "Огненное", effect: diceRandomizer(20), time: 6, price: 2300},
    sizzlingMorgenstern: {name: "Испепелящий моргенштерн", stats: arms.militaryHandWeapons.morgenstern, class: "Огненное", effect: diceRandomizer(20), time: 6, price: 2000},
    sizzlingChain: {name: "Испепелящий цеп", stats: arms.militaryHandWeapons.chain, class: "Огненное", effect: diceRandomizer(20), time: 6, price: 850},
    sizzlingLongBow: {name: "Испепелящий длинный лук", stats: arms.militaryRangeWeapon.longBow, class: "Огненное", effect: diceRandomizer(20), time: 6, price: 4000},


    poisonedMace: {name: "Отравленная булова", stats: arms.simpleHandWeapons.mace, class: "Отравленное", effect: 3, price: 200},
    poisonedPropellantSpear: {name: "Отравленное метательное копье", stats: arms.simpleHandWeapons.propellantSpear, class: "Отравленное", effect: 3, price: 300},
    poisonedSling: {name: "Отравленная праща", stats: arms.simpleRangeWeapon.sling, class: "Отравленное", effect: 3, price: 220},
    poisonedHalberd: {name: "Отравленная алебарда", stats: arms.militaryHandWeapons.halberd, class: "Отравленное", effect: 3, price: 600},
    poisonedWarHammer: {name: "Отравленный боевой молот", stats: arms.militaryHandWeapons.warHammer, class: "Отравленное", effect: 3, price: 450},
    poisonedLongSpear: {name: "Отравленое длинное копье", stats: arms.militaryHandWeapons.longSpear, class: "Отравленное", effect: 3, price: 350},
    poisonedBlowpipe: {name: "Отравленная духовая трубка", stats: arms.militaryRangeWeapon.blowpipe, class: "Отравленное", effect: 3, price: 350},
    poisonedRapier: {name: "Отравленная рапира", stats: arms.militaryHandWeapons.rapier, class: "Отравленное", effect: 3, price: 700},
    
    

}
