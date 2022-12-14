const funcoes = require('../index');

test('the result must be the greatest divider in common between 32 and 64', () => {
    expect(funcoes.mdc(32, 64)).toBe(32);
})

test('the result must be the greatest divider in common between 48 and 90', () => {
    expect(funcoes.mdc(48, 90)).toBe(6);
})