const funcoes = require('../index');

test('the sum must be 10', () => {
    expect(funcoes.somatorio([1, 2, 3, 4])).toBe(10);
});

test('the sum must be 543', () => {
    expect(funcoes.somatorio([123, 200, 220])).toBe(543);
})