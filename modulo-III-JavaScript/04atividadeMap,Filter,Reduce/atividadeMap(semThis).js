

/*
Map
  Pratique a sintaxe de multiplicação de números, agora utilizando o parâmetro sem o parámetro this de um objeto criado por você.
*/

//multiplicando qualquer número de um array por 2.

function mapSemThis(arr) {
    return arr.map(function(item) {
        return item * 2
    });
}

//array
const nums = [2, 4, 6, 9, 10];

console.log('novo array:', mapSemThis(nums));

console.log('Array original', nums);

console.log('')