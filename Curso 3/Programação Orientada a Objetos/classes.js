class Pessoa {
    email;
    constructor (nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    apresentar(){
        return `Olá, eu sou ${this.nome} e tenho ${this.idade} anos`;
    }
}

const pessoa = new Pessoa('João', 20);
console.log(pessoa.apresentar())

pessoa.email = 'teste@gmail.com'
pessoa.idade = 21

console.log(pessoa.email)
console.log(pessoa.apresentar())
