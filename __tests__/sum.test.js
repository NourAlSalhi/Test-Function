const sum = require('../functions/sum')

//it or test (description,fun,timeout)
//describe (des,fun) (contain all test cases)
describe('sum', () => {
    it('return 0 if no number', () => {
        expect(sum()).toBe(0)
    })

    it('return the number', () => {
        expect(sum(9)).toBe(9)
    })

    it('return the number 1+2', () => {
        expect(sum(9, 5)).toBe(14)
    })
})
