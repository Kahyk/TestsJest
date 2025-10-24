const ehPrimo = require('./num-primo');

test('17 é primo e 18 não é', () => {
  expect(ehPrimo(17)).toBe(true);
  expect(ehPrimo(18)).toBe(false);
});

test('casos de borda: <=1 é falso e 2 é verdadeiro', () => {
  expect(ehPrimo(1)).toBe(false);
  expect(ehPrimo(0)).toBe(false);
  expect(ehPrimo(-5)).toBe(false);
  expect(ehPrimo(2)).toBe(true);
});
