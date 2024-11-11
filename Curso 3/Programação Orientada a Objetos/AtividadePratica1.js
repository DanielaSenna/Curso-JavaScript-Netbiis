class Nota {
    constructor(disciplina, valor){
        this.disciplina = disciplina
        this.valor = valor;
    }
}

class Aluno {
    constructor (nome, matricula){
        this.nome = nome 
        this.matricula = matricula 
        this.notas = []
    }

    adicionarNota(disciplina, valor) {
        const nota = new Nota(disciplina, valor);
        this.notas.push(nota);
    }

    calcularMedia() {
        if (this.notas.length === 0) {
          return 0;
        }
        
        const soma = this.notas.reduce((total, nota) => total + nota.valor, 0);
        return soma / this.notas.length;
    }

    exibirDados() {
        const media = this.calcularMedia();
        console.log(`Nome: ${this.nome}`);
        console.log(`Matrícula: ${this.matricula}`);
        console.log(`Média: ${media.toFixed(2)}`);
    }
}

const aluno = new Aluno("Daniela Sena", "2024982382387");

// aluno.notas = [new Nota('Português', 8), new Nota('Português', 7), new Nota('Português', 9.5)]

aluno.adicionarNota("Português", 8);
aluno.adicionarNota("Português", 9.5);
aluno.adicionarNota("Português", 7);

aluno.exibirDados();