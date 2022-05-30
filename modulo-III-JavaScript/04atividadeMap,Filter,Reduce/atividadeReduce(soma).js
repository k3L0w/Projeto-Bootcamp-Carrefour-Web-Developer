/*
. Reduce
  Some todos os números de um array
  Crie uma função que recebe uma lista de preços e um número representando o saldo disponível. Calcule qual será o saldo final após subtrair todos os preços da lista enviada.
*/

function somaNumeros(arr) {
    return arr.reduce(function(prev, current) {
        console.log({prev});
        console.log({current});
        return prev + current;
    });
}

const arr = [1, 2];

console.log('');
console.log('Soma de previews + current: ', somaNumeros(arr));

console.log('');
