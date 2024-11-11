// Desenvolva a função contaOcorrencias(arr, num) que recebe um array de números e um número num. A função deve retornar quantas vezes o número num aparece no array.

function contaOcorrencias(arr, num) {
    return arr.filter(elemento => elemento === num).length;
}

const numeros = [1, 2, 3, 4, 5, 3, 2, 3, 1];
const ocorrencias = contaOcorrencias(numeros, 3);

console.log(ocorrencias); // Saída: 3
