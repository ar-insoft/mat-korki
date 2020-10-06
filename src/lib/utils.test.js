import * as utils from './utils.js'
import zadaniaDoTestow from '../test_resources/zadaniaDoTestow.json'

test('widzi zadaniaDoTestow', () => {
    console.log('zadaniaDoTestow ' + (typeof zadaniaDoTestow) + ' lenght ' + zadaniaDoTestow.lenght 
        + ' keys ' + Object.keys(zadaniaDoTestow.zadaniaDoTestow))
    //console.log(zadaniaDoTestow)
    //console.log(JSON.parse(zadaniaDoTestow))
    expect(zadaniaDoTestow.lenght > 0)
})

describe('utils.zadanieOIdDodajDoWybranych', () => {
    test('for empty zadania, empty wybrane returns empty array', () => {
        expect(utils.zadanieOIdDodajDoWybranych([], 1, [])).toStrictEqual([]);
    })

    test('for empty zadania, empty wybrane returns empty array', () => {
        expect(utils.zadanieOIdDodajDoWybranych(zadaniaDoTestow, 101, []).lenght).toBe(1);
    })

})