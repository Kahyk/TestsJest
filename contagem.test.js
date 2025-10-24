const contagem = require('./contagem');

test('conta inteiros nos primeiros N itens', () => {
  expect(contagem([1, 2.5, 3, 4, 'a', 5, 6.7], 5)).toBe(3); // 1,3,4
});

test('N maior que o tamanho do array é ajustado', () => {
  expect(contagem([1, 2, 'x'], 10)).toBe(2);
});
