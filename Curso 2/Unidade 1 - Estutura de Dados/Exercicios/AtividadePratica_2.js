// Crie um objeto com pelo menos 5 propriedades diferentes (nome, idade, cidade, etc.). Use um loop for...in para iterar sobre as propriedades do objeto e imprimir tanto as chaves quanto os valores.

// Criando o objeto com cinco propriedades
const pessoa = {
    nome: "Daniela Sena",
    idade: 30,
    cidade: "São Paulo",
    profissão: "Tutora Pedagógica",
    hobby: "Leitura"
};

// Usando o loop for...in para iterar sobre as propriedades do objeto
for (let chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`);
}