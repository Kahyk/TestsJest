const mdc = require('./mdc');

test('mdc de 24 e 36 é 12', () => {
  expect(mdc(24, 36)).toBe(12);
});

test('mdc funciona com números negativos', () => {
  expect(mdc(-54, 24)).toBe(6);
});
