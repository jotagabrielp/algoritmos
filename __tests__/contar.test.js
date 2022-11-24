const funcoes = require('../index');

test("the string should have all numbers from 1 to 10", () => {
    expect(funcoes.contar(10)).toBe("1 2 3 4 5 6 7 8 9 10 ");
})

test("the string should have all numbers from 1 to 23", () => {
    expect(funcoes.contar(23)).toBe("1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 ");
});