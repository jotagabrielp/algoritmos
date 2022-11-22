const funcoes = require('../index');

test('the array must be 10 numbers of fibonnaci', () => {
    expect(funcoes.fibo(10)).toBe("1 1 2 3 5 8 13 21 34 55 ");
})

test('the array must be 2 numbers of fibonnaci', () => {
    expect(funcoes.fibo(2)).toBe("1 1 ");
})