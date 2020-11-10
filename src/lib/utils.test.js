import * as utils from './utils.js'
import zadaniaDoTestow from '../test_resources/zadaniaDoTestow.json'
import zadaniaDoTestowTxt from '../test_resources/zadaniaDoTestow.txt'

// test('widzi zadaniaDoTestow', () => {
//     console.log('zadaniaDoTestow ' + (typeof zadaniaDoTestow) + ' lenght ' + zadaniaDoTestow.lenght 
//         + ' keys ' + Object.keys(zadaniaDoTestow.zadaniaDoTestow))
//     //console.log(zadaniaDoTestow)
//     //console.log(JSON.parse(zadaniaDoTestow))
//     expect(zadaniaDoTestow.lenght > 0)
// })

const zadaniaJson = Object.keys(zadaniaDoTestow).map(key => zadaniaDoTestow[key])

test('zadaniaDoTestow jest listą zadań', () => {
    //const zadaniaJson = Object.keys(zadaniaDoTestow).map(key => zadaniaDoTestow[key])
    //console.log('zadaniaJson ' + (typeof zadaniaJson) + ' ' + Array.isArray(zadaniaJson))


    expect(Array.isArray(zadaniaJson))
})

describe('utils.zadanieOIdDodajDoWybranych', () => {
    test('for empty zadania, empty wybrane returns empty array', () => {
        expect(utils.zadanieOIdDodajDoWybranych([], 1, [])).toStrictEqual([]);
    })

    test('for empty zadania, empty wybrane returns empty array', () => {
        expect((utils.zadanieOIdDodajDoWybranych([], 1, []).length)).toBe(0);
    })
    console.log([].length)
    test('for empty zadania, empty wybrane returns empty array', () => {
        expect(utils.zadanieOIdDodajDoWybranych(zadaniaJson, 101, []).length).toBe(1);
    })

    
})