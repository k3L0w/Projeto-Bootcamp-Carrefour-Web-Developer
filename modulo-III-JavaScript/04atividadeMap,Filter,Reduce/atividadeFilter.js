/*
. Filter
  Filtre e retorne todos os números pares de um array.
*/

function filtraPares(arr) {
    return arr.filter(callback);
}

function callback(item) {
    return item % 2 === 0;
}

const meuArray = [1, 7, 9, 11, 12, 20];

console.log(filtraPares(meuArray));
console.log('');