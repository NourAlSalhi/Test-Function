const input = require('../functions/input');

describe('validateInput', () => {
    it('check if name is empty', () => {
        expect(input()).toBe('unKnown');
    })
    it('check for space in start or end', () => {
        expect(input(" nour ")).toBe('nour');
    })
    it('check if length name < 10', () => {
        expect(input("nour_nour_nour")).toBe('nour_nour_');
    })
})