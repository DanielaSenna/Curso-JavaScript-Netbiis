// Escreva a função filtraPares(arr) que recebe um array de números e retorna um novo array contendo apenas os números pares.

function filtraPares(arr) {
    return arr.filter(numero => numero % 2 === 0);
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = filtraPares(numeros);

console.log(pares);