const array = require('../functions/Matchers')

describe('check array ', () => {
    it('check if array contain 4 element', () => {
        expect(array.length).toBe(4)
    })

    //or to check length > toHaveLength
    it('check if array contain 4 element', () => {
        expect(array).toHaveLength(4)
    })

    it('check if array contain Number 2', () => {
        expect(array).toContain(2)
    })

    // add not to reverce the result
    it('check if array not to contain Number 7', () => {
        expect(array).not.toContain(7)
    })

    // or use for loop
    it('check if array not to contain Number 0', () => {
        for (let i = 0; i < array.length; i++) {
            expect(array[i]).not.toBe(0)
        }
    })

    it('check if string contain react by regex', () => {
        expect('learn react').toMatch(/React/i)
    })

    it('check if have property', () => {
        const user ={
            name:'ahmed',
            age:10
        }
        expect(user).toHaveProperty('name','ahmed')
    })
})