const funcoes = require('../index');

test("the array must be sorted", () => {
    expect(funcoes.quicksort([3, 2, 1])).toEqual([1, 2, 3]);
})

test("the array must be sorted", () => {
    expect(funcoes.quicksort([3, 32, 65, 74, 1245, 65, 2, 6, 83, 1, 34, 1])).toEqual([1, 1, 2, 3, 6, 32, 34, 65, 65, 74, 83, 1245]);
})