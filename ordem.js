function quicksort(arr) {
  if (!Array.isArray(arr)) throw new TypeError('arr deve ser array');
  if (arr.length <= 1) return arr.slice();

  const pivot = arr[Math.floor(arr.length / 2)];
  const menores = arr.filter(x => x < pivot);
  const iguais  = arr.filter(x => x === pivot);
  const maiores = arr.filter(x => x > pivot);
  return [...quicksort(menores), ...iguais, ...quicksort(maiores)];
}
module.exports = quicksort;
