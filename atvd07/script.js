class ContaBancaria {
    constructor(agencia, numero, tipo, saldo) {
      this.agencia = agencia;
      this.numero = numero;
      this.tipo = tipo;
      this._saldo = saldo;
    }
  
    get saldo() {
      return this._saldo;
    }
  
    set saldo(novoSaldo) {
      this._saldo = novoSaldo;
    }
  
    sacar(valor) {
      if (valor <= this._saldo) {
        this._saldo -= valor;
        console.log(`Saque de R$ ${valor} realizado. Novo saldo: R$ ${this._saldo}`);
      } else {
        console.log('Saldo insuficiente');
      }
    }
  
    depositar(valor) {
      this._saldo += valor;
      console.log(`Depósito de R$ ${valor} realizado. Novo saldo: R$ ${this._saldo}`);
    }
  }
  
  class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaoCredito, saldo = 0) {
      super(agencia, numero, 'Conta Corrente', saldo);
      this.cartaoCredito = cartaoCredito;
    }
  
    get cartaoCredito() {
      return this._cartaoCredito;
    }
  
    set cartaoCredito(novoCartao) {
      this._cartaoCredito = novoCartao;
    }
  }
  
  class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero, saldo = 0) {
      super(agencia, numero, 'Conta Poupança', saldo);
    }
  }
  
  class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero, saldo = 0) {
      super(agencia, numero, 'Conta Universitária', saldo);
    }
  
    sacar(valor) {
      if (valor <= 500) {
        super.sacar(valor);
      } else {
        console.log('Saque máximo permitido é de R$ 500 para Conta Universitária');
      }
    }
  }
  
  // Exemplo de utilização:
  
  // Criando uma conta corrente
  const minhaContaCorrente = new ContaCorrente('001', '12345', '1234');
  console.log(minhaContaCorrente);
  
  // Realizando operações na conta corrente
  minhaContaCorrente.depositar(1000);
  minhaContaCorrente.sacar(500);
  console.log(minhaContaCorrente.saldo);
  
  // Criando uma conta poupança
  const minhaContaPoupanca = new ContaPoupanca('002', '54321');
  console.log(minhaContaPoupanca);
  
  // Criando uma conta universitária
  const minhaContaUniversitaria = new ContaUniversitaria('003', '13579');
  console.log(minhaContaUniversitaria);
  
  // Tentando sacar valor maior que o permitido na conta universitária
  minhaContaUniversitaria.sacar(600);
  