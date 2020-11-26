

/**
 * Szuka zadania o wskazanym id w liście zadania i tworzy nową listę wybranych.
 * @param {array} zadania - lista wszystkich zadan.
 * @param {string} id - id zadania.
 * @param {array} wybrane - dotychczasowa lista wybranych.
 * @return {Point} A Point object.
 */
export function zadanieOIdDodajDoWybranych(zadania, id, wybrane) {
    //console.log('zadanieOIdDodajDoWybranych', typeof zadania, zadania)
    const zadanie = zadania.filter(el => el.id === id).reduceRight((accumulator, currentValue) => currentValue, {})
    return []
}

export function zadaniaByParent(zadania, parent_id) {
    return zadania.filter(el => el.parent_id === parent_id)
}

export function zadanieById(zadania, id) {
    return zadania.find(el => el.id === id)
}