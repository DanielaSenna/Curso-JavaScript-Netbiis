function somar(a, b){
    return a + b;
}

function calcularIMC(peso, altura){
    let resultado = peso / (altura ** 2);
    return resultado.toFixed(2);
}

let soma = somar(10, 20);
let imc = calcularIMC(70, 1.75);

console.log(soma);
console.log(imc)

// Função Anônima
let anonima = function(){
    console.log("Função Anônima")
}
anonima();

// Arrow Functions
let arrow = () => {
    console.log('Arrow Function');
}
arrow();

// Arrow Function com retorno implícito
let somar_ = (a, b) => a + b;
let imcCalc_ = (peso, altura) => (peso / (altura**2)).toFixed(2);

console.log(somar_(2, 3));
console.log(imcCalc_(30, 1.70));
