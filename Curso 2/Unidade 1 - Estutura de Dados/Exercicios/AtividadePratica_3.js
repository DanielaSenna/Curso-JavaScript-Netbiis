// Crie um array de objetos onde cada objeto representa um aluno com suas notas. Use for...of para iterar sobre o array, e for...in para somar as notas de cada aluno. Depois, filtre e exiba os alunos que têm uma média acima de 7.

const alunos = [
    { nome: "Alice", notas: { prova1: 8, prova2: 7.5, prova3: 6 } },
    { nome: "Bruno", notas: { prova1: 9, prova2: 8.5, prova3: 7 } },
    { nome: "Carla", notas: { prova1: 5, prova2: 6, prova3: 7 } },
    { nome: "Diego", notas: { prova1: 7.5, prova2: 9, prova3: 8.5 } }
];

// Array para armazenar alunos com média acima de 7
const alunosAprovados = [];

// Loop for...of para iterar sobre cada aluno
for (let aluno of alunos) {
    let somaNotas = 0;
    let quantidadeNotas = 0;

    // Loop for...in para somar as notas do aluno
    for (let nota in aluno.notas) {
        somaNotas += aluno.notas[nota];
        quantidadeNotas++;
    }

    // Calcula a média
    const media = somaNotas / quantidadeNotas;

    // Verifica se a média é maior que 7 e adiciona o aluno ao array de aprovados
    if (media > 7) {
        alunosAprovados.push({ nome: aluno.nome, media: media });
    }
}

// Exibindo os alunos aprovados
console.log("Alunos com média acima de 7:");
for (let aprovado of alunosAprovados) {
    console.log(`Nome: ${aprovado.nome}, Média: ${aprovado.media.toFixed(2)}`);
}