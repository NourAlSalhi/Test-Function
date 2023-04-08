const say = require('../functions/say')

test('say jest message', () => {
    expect(say()).toBe('Hello')
})