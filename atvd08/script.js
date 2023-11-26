function QuadradoMagico(matriz) {
    // Verificando se a matriz é quadrada
    const tamanho = matriz.length;
    for (let i = 0; i < tamanho; i++) {
        if (matriz[i].length !== tamanho) {
            return false;
        }
    }

    // Calculando a soma da primeira linha para comparar
    let somaReferencia = 0;
    for (let i = 0; i < tamanho; i++) {
        somaReferencia += matriz[0][i];
    }

    // Verificando se as somas das linhas, colunas e diagonais são iguais à soma da primeira linha
    for (let i = 1; i < tamanho; i++) {
        let somaLinha = 0;
        let somaColuna = 0;

        for (let j = 0; j < tamanho; j++) {
            somaLinha += matriz[i][j];
            somaColuna += matriz[j][i];
        }

        if (somaLinha !== somaReferencia || somaColuna !== somaReferencia) {
            return false;
        }
    }

    // Verificando a diagonal principal
    let somaDiagonalPrincipal = 0;
    for (let i = 0; i < tamanho; i++) {
        somaDiagonalPrincipal += matriz[i][i];
    }

    if (somaDiagonalPrincipal !== somaReferencia) {
        return false;
    }

    // Verificando a diagonal secundária
    let somaDiagonalSecundaria = 0;
    for (let i = 0; i < tamanho; i++) {
        somaDiagonalSecundaria += matriz[i][tamanho - 1 - i];
    }

    if (somaDiagonalSecundaria !== somaReferencia) {
        return false;
    }

    // Se passou por todas as verificações, é um quadrado mágico
    return true;
}

// Exemplo de uso
const matrizQuadradaMagica = [
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8]
];

const matrizQuadradaMagica1 = [
    [1, 6, 5],
    [8, 4, 0],
    [3, 2, 7]
];

const matrizQuadradaMagica2 = [
    [3, 8, 7],
    [10, 6, 2],
    [5, 4, 9]
];

const matrizQuadradaMagica3 = [
    [9, 2, 1],
    [1, 3,6],
    [3, 11, 1]
];
console.log(QuadradoMagico(matrizQuadradaMagica));
console.log(QuadradoMagico(matrizQuadradaMagica1));
console.log(QuadradoMagico(matrizQuadradaMagica2));
console.log(QuadradoMagico(matrizQuadradaMagica3));  



