const funcoes = require('../index');

test('the result for 3 is prime must be true', () => {
    expect(funcoes.ehPrimo(3)).toBe(true);
})
test('the result for 4 is prime must be false', () => {
    expect(funcoes.ehPrimo(4)).toBe(false);
})