// Classes

class ContaBancaria {
    constructor(agencia, numero, tipo, saldo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this.saldo = saldo;
    }

    getSaldo() {
        return this.saldo;
    }

    setSaldo(saldo) {
        this.saldo = saldo;
    }

    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            return true;
        } else {
            return false;
        }
    }

    depositar(valor) {
        this.saldo += valor;
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, saldo, cartaoCredito = 0) {
        super(agencia, numero, "Conta Corrente", saldo);
        this.cartaoCredito = cartaoCredito;
    }

    getCartaoCredito() {
        return this.cartaoCredito;
    }

    setCartaoCredito(cartaoCredito) {
        this.cartaoCredito = cartaoCredito;
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero, saldo) {
        super(agencia, numero, "Conta Poupança", saldo);
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero, saldo) {
        super(agencia, numero, "Conta Universitária", saldo);
    }

    sacar(valor) {
        if (valor <= 500 && valor <= this.saldo) {
            this.saldo -= valor;
            return true;
        } else {
            return false;
        }
    }
}

// Variáveis globais

const contas = [];

// Funções

function inserirConta() {
    const agencia = document.getElementById("agencia").value;
    const numero = document.getElementById("numero").value;
    const tipo = document.getElementById("tipo").value;
    const saldo = parseFloat(document.getElementById("saldo").value);

    if (agencia && numero && tipo && !isNaN(saldo)) {
        let novaConta;
        if (tipo === "Conta Corrente") {
            novaConta = new ContaCorrente(agencia, numero, saldo);
        } else if (tipo === "Conta Poupança") {
            novaConta = new ContaPoupanca(agencia, numero, saldo);
        } else if (tipo === "Conta Universitária") {
            novaConta = new ContaUniversitaria(agencia, numero, saldo);
        }

        contas.push(novaConta);
        alert("Conta inserida com sucesso!");
    } else {
        alert("Preencha todos os campos corretamente.");
    }
}

function deletarConta() {
    const index = prompt("Digite o índice da conta que deseja deletar:");
    if (index !== null && !isNaN(index) && index >= 0 && index < contas.length) {
        contas.splice(index, 1);
        alert("Conta deletada com sucesso!");
    } else {
        alert("Índice inválido.");
    }
}

function visualizarContas() {
    const listaContas = document.getElementById("listaContas");
    listaContas.innerHTML = "";

    for (let i = 0; i < contas.length; i++) {
        const conta = contas[i];
        const listItem = document.createElement("li");
        listItem.textContent = `${conta.tipo} - Agência: ${conta.agencia}, Número: ${conta.numero}, Saldo: R$ ${conta.saldo.toFixed(2)}`;
        listaContas.appendChild(listItem);
    }
}

// Event Listeners

document.getElementById("inserirBtn").addEventListener("click", inserirConta);
document.getElementById("deletarBtn").addEventListener("click", deletarConta);
document.getElementById("visualizarBtn").addEventListener("click", visualizarContas);
// Função para inserir uma nova conta na lista
function inserirConta() {
    const agencia = document.getElementById("agencia").value;
    const numero = document.getElementById("numero").value;
    const tipo = document.getElementById("tipo").value;
    const saldo = parseFloat(document.getElementById("saldo").value);

    if (agencia && numero && tipo && !isNaN(saldo)) {
        let novaConta;
        if (tipo === "Conta Corrente") {
            novaConta = new ContaCorrente(agencia, numero, saldo);
        } else if (tipo === "Conta Poupança") {
            novaConta = new ContaPoupanca(agencia, numero, saldo);
        } else if (tipo === "Conta Universitária") {
            novaConta = new ContaUniversitaria(agencia, numero, saldo);
        }

        contas.push(novaConta);
        alert("Conta inserida com sucesso!");
    } else {
        alert("Preencha todos os campos corretamente.");
    }
}