
class Endereco {
    constructor (params){
        this.cep = params.cep;
        this.rua = params.rua;
        this.numero = params.numero;
        this.cidade = params.cidade;
        this.uf = params.uf;
    }

    mostrarEndereco(){
        return `Endereco: ${this.rua}, ${this.numero}, ${this.cidade} - ${this.uf}, ${this.cep}`
    }
}

class Pessoa {
   
    constructor (params){
        this.nome = params.nome;
        this.idade = params.idade;
        if (params.endereco instanceof Endereco){
            this.endereco = new Endereco(params.endereco)
        } else {
            throw new Error('O endereço deve ser uma instância da classe Endereço')
        }
    }

    apresentar(){
        return `Olá, eu sou ${this.nome} e tenho ${this.idade} anos. Moro em ${this.endereco.mostrarEndereco()}`;
    }
}

const endereco = new Endereco({
    cep: '64575-000',
    rua: 'Av. Paulista',
    numero: 100,
    cidade: 'São Paulo',
    uf: 'SP'
})

const pessoa = new Pessoa({
    nome: 'João', 
    idade: 20,
    endereco: endereco
});

console.log(pessoa.apresentar())