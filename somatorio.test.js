const somatorio = require('./somatorio');

test('soma elementos inteiros', () => {
  expect(somatorio([1,2,3,4,5])).toBe(15);
});

test('funciona com números decimais e negativos', () => {
  expect(somatorio([2.5, -1.5, 4])).toBe(5);
});
