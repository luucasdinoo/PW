let saldo = 1000; // Saldo inicial
const transacoes = [];

function depositar(valor) {
  saldo += valor;
  transacoes.push({ tipo: 'Depósito', valor: valor, data: new Date().toLocaleString() });
}

function sacar(valor) {
  if (valor > saldo) {
    return "Saldo insuficiente!";
  } else {
    saldo -= valor;
    transacoes.push({ tipo: 'Saque', valor: valor, data: new Date().toLocaleString() });
  }
}

function verSaldo() {
  return `Seu saldo atual é: R$ ${saldo.toFixed(2)}`;
}

function verHistorico() {
  let historico = 'Histórico de Transações:\n';
  transacoes.forEach((transacao, index) => {
    historico += `${index + 1}. ${transacao.tipo} de R$ ${transacao.valor.toFixed(2)} em ${transacao.data}\n`;
  });
  return historico;
}

function executarAcao() {
  const opcao = document.getElementById('options').value;
  const valor = parseFloat(document.getElementById('amount').value);

  let resultado = '';

  switch (opcao) {
    case 'depositar':
      if (!isNaN(valor) && valor > 0) {
        depositar(valor);
        resultado = `Depósito de R$ ${valor.toFixed(2)} realizado com sucesso.`;
      } else {
        resultado = 'Valor inválido!';
      }
      break;
    case 'sacar':
      if (!isNaN(valor) && valor > 0) {
        const saque = sacar(valor);
        if (saque) {
          resultado = saque;
        } else {
          resultado = `Saque de R$ ${valor.toFixed(2)} realizado com sucesso.`;
        }
      } else {
        resultado = 'Valor inválido!';
      }
      break;
    case 'verSaldo':
      resultado = verSaldo();
      break;
    case 'verHistorico':
      resultado = verHistorico();
      break;
    case 'sair':
      resultado = 'Programa encerrado.';
      break;
    default:
      resultado = 'Opção inválida!';
      break;
  }

  document.getElementById('resultado').innerText = resultado;
}
