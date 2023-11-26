let alunos = [];

function cadastrarAluno() {
  const nome = prompt("Digite o nome do aluno:");
  alunos.push({ nome, notas: [] });
}

function cadastrarNotas() {
  const nomeAluno = prompt("Digite o nome do aluno:");
  const aluno = alunos.find(aluno => aluno.nome === nomeAluno);

  if (aluno) {
    const notas = [];
    for (let i = 0; i < 3; i++) {
      const nota = parseFloat(prompt(`Digite a nota ${i + 1} para ${nomeAluno}:`));
      notas.push(Math.round(nota));
    }
    aluno.notas = notas;
  } else {
    alert("Aluno não encontrado.");
  }
}

function calcularMedia(notas) {
  const soma = notas.reduce((acc, nota) => acc + nota, 0);
  return Math.round(soma / notas.length);
}

function getStatus(media) {
  if (media >= 7) {
    return "Aprovado";
  } else if (media >= 5) {
    return "Em recuperação";
  } else {
    return "Reprovado";
  }
}

function exibirBoletim() {
  const nomeAluno = prompt("Digite o nome do aluno:");
  const aluno = alunos.find(aluno => aluno.nome === nomeAluno);

  if (aluno) {
    const media = calcularMedia(aluno.notas);
    const status = getStatus(media);

    const output = document.getElementById("output");
    output.innerHTML = `
      <h2>Boletim de ${nomeAluno}</h2>
      <p>Notas: ${aluno.notas.join(", ")}</p>
      <p>Média: ${media}</p>
      <p>Status: ${status}</p>
    `;
  } else {
    alert("Aluno não encontrado.");
  }
}

function sair() {
  alert("Saindo do sistema.");
}
