// Condicionais Simples
let numero1 = 9;

if (numero1 >= 10) {
    console.log('O número é maior ou igual a 10');
}

if (numero1 < 10) {
    console.log('O número é menor que 10');
}


// Condicionais Compostas
let numero2 = 10;

if (numero2 >= 10) {
    console.log('O número é maior ou igual a 10');
} else {
    console.log('O número é menor que 10');
}


// Condicionais Aninhadas
const numero3 = 11;

if (numero3 > 10) {
  console.log('O número é maior que 10');
} else if (numero3 < 10) {
  console.log('O número é menor que 10');
} else if (numero3 === 10){
    console.log('O número é igual a 10');
} else {
    console.log('O valor não é um número');
}