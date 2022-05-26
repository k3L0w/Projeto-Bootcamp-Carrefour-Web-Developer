//1. Crie a classe ContaBancaria, que possui os parâmetros agencia, numero, tipo, saldo;
class ContaBancaria {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    //2. Dentro de ContaBancaria, construa o getter...
    get saldo() {
        return this._saldo;
    }

    //...e o setter de saldo;
    set saldo(valor) {
        this._saldo = valor;
    }

    //3. Dentro de ContaBancaria, crie os métodos saca...
    sacar(valor) {
        if(valor > this._saldo) {
            return 'operação negada';
        }
        this._saldo = this._saldo - valor;

        return this._saldo;
    }

    //...e depositar;
    depositar(valor) {
        this._saldo = this._saldo + valor;
        
        return this._saldo;
    }
}

/* 4. Crie uma classe-filha chamada ContaCorrente...
que herda todos esses parâmetros e ainda possua o parâmetro cartaoCredito; */
class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero);
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;
    }

    //5. Ainda em ContaCorrente, construa o getter...
    get cartaoCredito () {
        return this._cartaoCredito;
    }

    //... e o setter de cartaoCredito;
    set cartaoCredito(valor) {
        this._cartaoCredito = valor;
    }
}

//7. Crie uma classe-filha chamada ContaPoupanca que herda todos os parâmetros de ContaBancaria;
class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero); 
        this.tipo = 'poupança';
    }
}

//8. Crie uma classe-filha chamada ContaUniversitaria que herda todos os parâmetros de ContaBancaria;
class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'Universitária';
    }

    //9. Faça com que o método saque de ContaUniversitaria apenas seja capaz de sacar valores menores que 500 reais.
    sacar(valor) {
        if(valor > 500) {
            return "Operação negada!";
        }

        this._saldo = this._saldo - valor;
    }
}