// Crie uma função contarPalavras(frase) que conta o número de palavras em uma frase. Por exemplo, "Olá, tudo bem?" deve retornar 3. Utilize o método split() para dividir a string por espaços.

function contarPalavras(frase){
    return frase.split(" ").length
}
console.log("A quantidade de palavras na frase é " + contarPalavras("Olá, tudo bem?"))
