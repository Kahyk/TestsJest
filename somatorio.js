function somatorio(numeros) {
  if (!Array.isArray(numeros)) throw new TypeError('numeros deve ser array');
  return numeros.reduce((acc, n) => acc + n, 0);
}
module.exports = somatorio;
