const fibonacci = require('./fibonacci');

test('retorna os 10 primeiros corretamente', () => {
  expect(fibonacci(10)).toEqual([0,1,1,2,3,5,8,13,21,34]);
});

test('n <= 0 retorna array vazio; n=1 retorna [0]', () => {
  expect(fibonacci(0)).toEqual([]);
  expect(fibonacci(1)).toEqual([0]);
});
