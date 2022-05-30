/*
Map
  Pratique a sintaxe de multiplicação de números, uma vez utilizando o parâmetro this de um objeto criado por você.
*/

const maca = {
    value: 2
}

const laranja = {
    value: 3
}

const banana = {
    value: 4
}

const uva = {
    value: 5
}

//função mapComThis com o array (arr)
function mapComThis(arr, thisArg) {
    //retornando a operação map (array mapeado)
    return arr.map(function(item){
        return item * this.value;
    }, thisArg);
}

const nums = [1, 2];

//logar a função
console.log('this -> maca', mapComThis(nums, maca))
console.log('this -> laranja', mapComThis(nums, laranja))
console.log('this -> banana', mapComThis(nums, banana))
console.log('this -> uva', mapComThis(nums, uva))