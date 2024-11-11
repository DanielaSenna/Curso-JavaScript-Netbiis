// let: o valor pode ser alterado
// var: descontinuado
// const: o valor não pode ser alterado
let nome = 'Daniela';
nome = 'Carlos';
console.log(nome);

const sobrenome = 'Costa';
// sobrenome = 'Oliveira'; // Erro
console.log(sobrenome);


// Tipos primitivos
// string
let nome2 = 'Daniela'; 
console.log(typeof nome2);

// number
let idade = 25;
console.log(typeof idade);

// boolean
let possuiFaculdade = true;
console.log(typeof possuiFaculdade);

// undefined
let preco;
console.log(typeof preco);

// null
let altura = null;
console.log(typeof altura);

// object
let pessoa = {
  nome: 'Daniela',
  idade: 40,
  possuiFaculdade: true
};
console.log(typeof pessoa);

// array
let familia = [1, 2, 3, 4];
console.log(typeof familia);


pessoa.possuiFaculdade = false;
familia[0] = 5;

console.log(pessoa.possuiFaculdade);
console.log(familia[1]);
