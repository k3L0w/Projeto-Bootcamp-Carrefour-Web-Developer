const lista = [
    {
        name: 'sabao em po',
        preco: 30,
    },
    {
        name: 'cereal',
        preco: 12,
    },
    {
        name: 'toalha',
        preco: 30,
    },
];

const saldoDisponivel = 100; //meu saldo em caixa

function calculaSaldo(saldoDisponivel, lista) {
    return lista.reduce(function (prev, current, index) {
        console.log('rodada:', index + 1);
        console.log('previws:', {prev});
        console.log('current:', {current});
        console.log('');
        return prev - current.preco;
    }, saldoDisponivel);
}

console.log('');
console.log('Saldo:', calculaSaldo(saldoDisponivel, lista));
console.log('');
