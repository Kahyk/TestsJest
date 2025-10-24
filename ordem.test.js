const quicksort = require('./ordem');

test('ordena array com números repetidos', () => {
  expect(quicksort([5,4,3,3,1])).toEqual([1,3,3,4,5]);
});

test('array vazio e unitário retornam corretamente', () => {
  expect(quicksort([])).toEqual([]);
  expect(quicksort([42])).toEqual([42]);
});
