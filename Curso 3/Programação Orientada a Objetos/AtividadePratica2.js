
class Funcionario {
    constructor(nome, cpf, email) {
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;

        if (this.constructor === Funcionario){
            throw new Error('Veiculo é uma classe abstrata e não pode ser instanciada')
        }
    }
  
    calcularSalario() {
      throw new Error("O método calcularSalario deve ser implementado");
    }
  
    exibirDados() {
      console.log(`Nome: ${this.nome}`);
      console.log(`CPF: ${this.cpf}`);
      console.log(`Email: ${this.email}`);
    }
}
  
class FuncionarioHorista extends Funcionario {
    constructor(nome, cpf, email, horasTrabalhadas, valorHora) {
      super(nome, cpf, email);
      this.horasTrabalhadas = horasTrabalhadas;
      this.valorHora = valorHora;
    }
  
    calcularSalario() {
      return this.horasTrabalhadas * this.valorHora;
    }
}
  
class FuncionarioMensalista extends Funcionario {
    constructor(nome, cpf, email, salarioFixo, descontoPercentual) {
        super(nome, cpf, email);
        this.salarioFixo = salarioFixo;
        this.descontoPercentual = descontoPercentual;
    }
    
    calcularSalario() {
        return this.salarioFixo - ((this.salarioFixo * this.descontoPercentual) / 100);
    }
}
const horista = new FuncionarioHorista("Maria Silva", "123.456.789-10", "maria@email.com", 160, 25);
  
const mensalista = new FuncionarioMensalista("João Pereira", "987.654.321-00", "joao@email.com", 3000, 10);

horista.exibirDados();
console.log(`Salário: R$${horista.calcularSalario().toFixed(2)}\n`);
  
mensalista.exibirDados();
console.log(`Salário: R$${mensalista.calcularSalario().toFixed(2)}`);
  