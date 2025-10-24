// allFunctions.test.js
const contagem = require('./contagem');
const fibonacci = require('./fibonacci');
const mdc = require('./mdc');
const ehPrimo = require('./num-primo');
const quicksort = require('./ordem');
const somatorio = require('./somatorio');

describe('Testes dos Algoritmos Fundamentais', () => {
  
  // Somatório
  test('sunFunc 10+20 = 30', () => {
    expect(somatorio([10, 20])).toBe(30);
  });

  test('sunFunc -10+20 = 30', () => {
    expect(somatorio([-10, 20, 20])).toBe(30);
  });


  // Número primo
  test('primeFunc 10 = false', () => {
    expect(ehPrimo(10)).toBe(false);
  });

  test('primeFunc 3 = true', () => {
    expect(ehPrimo(3)).toBe(true);
  });


  // Contagem de inteiros
  test('contFunc 10 = true', () => {
    const dados = [1,2,3,4,5,6,7,8,9,10];
    expect(contagem(dados, 10) > 0).toBe(true);
  });

  test('contFunc 3 = false', () => {
    const dados = [1.1, 'x', 2.2];
    expect(contagem(dados, 3) > 0).toBe(false);
  });


  // Fibonacci
  test('fibonacciFunc 5 = 0, 1, 1, 2, 3', () => {
    expect(fibonacci(5)).toEqual([0,1,1,2,3]);
  });

  test('fibonacciFunc 1 = 0', () => {
    expect(fibonacci(1)).toEqual([0]);
  });


  // MDC
  test('mdcFunc 5 10 = 5', () => {
    expect(mdc(5, 10)).toBe(5);
  });

  test('mdcFunc 1 = 1', () => {
    expect(mdc(1, 1)).toBe(1);
  });


  // Quicksort
  test('quicksortFunc 5,4,3,1 = 1,3,4,5', () => {
    expect(quicksort([5,4,3,1])).toEqual([1,3,4,5]);
  });

  test('quicksortFunc 100,4,3,150 = 3,4,100,150', () => {
    expect(quicksort([100,4,3,150])).toEqual([3,4,100,150]);
  });
});
