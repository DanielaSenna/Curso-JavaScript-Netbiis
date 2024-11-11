// Função Pura

function calcularIMC(peso, altura){
    return peso / (altura * altura);
}

// Função Impura 
let volume = 0;
function aumentarVolume(incremento){
    volume += incremento;
    return volume;
}

console.log(calcularIMC(80, 1.8) === calcularIMC(80, 1.8));
console.log(aumentarVolume(80) === aumentarVolume(80))