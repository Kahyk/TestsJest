function contagem(conjunto, N) {
  if (!Array.isArray(conjunto)) throw new TypeError('conjunto deve ser array');
  if (!Number.isInteger(N)) throw new TypeError('N deve ser inteiro');

  if (N > conjunto.length) N = conjunto.length;
  let contador = 0;
  for (let i = 0; i < N; i++) {
    if (Number.isInteger(conjunto[i])) contador++;
  }
  return contador;
}
module.exports = contagem;
