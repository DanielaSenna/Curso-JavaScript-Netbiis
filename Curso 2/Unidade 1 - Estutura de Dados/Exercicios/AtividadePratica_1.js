// Crie um array de números e use um loop for...of para calcular e exibir a soma de todos os elementos do array.
const arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

let soma = 0;
for (let el of arr) {
    soma += el;
}
console.log(soma);