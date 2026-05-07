class Conta {
    constructor(nomeCorrentista, banco, numeroConta, saldo) {
        this._nomeCorrentista = nomeCorrentista;
        this._banco = banco;
        this._numeroConta = numeroConta;
        this._saldo = saldo;
    }

    get nomeCorrentista() {
        return this._nomeCorrentista;
    }

    set nomeCorrentista(value) {
        this._nomeCorrentista = value;
    }

    get banco() {
        return this._banco;
    }

    set banco(value) {
        this._banco = value;
    }

    get numeroConta() {
        return this._numeroConta;
    }

    set numeroConta(value) {
        this._numeroConta = value;
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(value) {
        this._saldo = value;
    }
}

class Corrente extends Conta {
    constructor(nomeCorrentista, banco, numeroConta, saldo, saldoEspecial) {
        super(nomeCorrentista, banco, numeroConta, saldo);
        this._saldoEspecial = saldoEspecial;
    }

    get saldoEspecial() {
        return this._saldoEspecial;
    }

    set saldoEspecial(value) {
        this._saldoEspecial = value;
    }
}

class Poupanca extends Conta {
    constructor(nomeCorrentista, banco, numeroConta, saldo, juros, dataVencimento) {
        super(nomeCorrentista, banco, numeroConta, saldo);
        this._juros = juros;
        this._dataVencimento = dataVencimento;
    }

    get juros() {
        return this._juros;
    }

    set juros(value) {
        this._juros = value;
    }

    get dataVencimento() {
        return this._dataVencimento;
    }

    set dataVencimento(value) {
        this._dataVencimento = value;
    }
}

let contaCorrente = new Corrente("João Silva", "Banco do Brasil", "12345-6", 1500.00, 300.00);
let contaPoupanca = new Poupanca("Maria Oliveira", "Itaú", "67890-1", 2500.00, 0.05, "2024-12-31");