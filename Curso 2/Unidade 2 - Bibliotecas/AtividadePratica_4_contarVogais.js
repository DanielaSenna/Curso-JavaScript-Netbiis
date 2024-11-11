// Escreva uma função contarVogais(str) que retorna o número de vogais (a, e, i, o, u) presentes na string. Teste a função com diferentes frases e palavras..

function contarVogais(str) {
    const vogais = "aeiouAEIOU";
    let contador = 0;

    for (let char of str) {
        if (vogais.includes(char)) {
            contador++;
        }
    }

    return contador;
}


console.log(contarVogais("Daniela Costa de Sena"));
console.log(contarVogais("JavaScript")); 
