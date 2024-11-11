// Crie a função multiplicaArray(arr, multiplicador) que recebe um array de números e um valor multiplicador. A função deve retornar um novo array onde cada elemento foi multiplicado pelo valor do multiplicador.

function multiplicaArray(arr, multiplicador) {
    // Retorna um novo array com cada elemento multiplicado pelo valor do multiplicador
    return arr.map(numero => numero * multiplicador);
}

// Exemplo de uso
const numeros = [1, 2, 3, 4, 5];
const resultado = multiplicaArray(numeros, 3);

console.log(resultado); // Saída: [3, 6, 9, 12, 15]
