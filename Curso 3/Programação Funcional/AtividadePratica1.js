// Função para filtrar usuários com idade maior que 18
function filtrarIdade(usuarios) {
    return usuarios.filter(usuario => usuario.idade > 18);
}

// Função para transformar a lista, retornando apenas nome e idade
function transformarLista(usuarios){
    return usuarios.map(usuario => ({ nome: usuario.nome, idade: usuario.idade }));
}

// Função para ordenar a lista por idade de forma crescente
function ordenarPorIdade(usuarios){
    return usuarios.sort((a, b) => a.idade - b.idade);
}

// Função para calcular a média de idade dos usuários
function calcularMediaIdade (usuarios){
    const totalIdade = usuarios.reduce((soma, usuario) => soma + usuario.idade, 0);
    return totalIdade / usuarios.length;
}

// Função principal para compor todas as operações
function processarLista(){
    const maior18Anos = filtrarIdade(usuarios)

    const listaTransformada = transformarLista(maior18Anos)

    const ordenados = ordenarPorIdade(listaTransformada)
    
    const mediaIdade = calcularMediaIdade(ordenados);

    return {
        usuarios: ordenados,
        mediaIdade: mediaIdade
    };
}

const usuarios = [
    { nome: "Alice", idade: 22, telefone: "123456789", email: "alice@email.com" },
    { nome: "Bob", idade: 17, telefone: "987654321", email: "bob@email.com" },
    { nome: "Carol", idade: 25, telefone: "111222333", email: "carol@email.com" },
    { nome: "David", idade: 19, telefone: "444555666", email: "david@email.com" },
    { nome: "Eve", idade: 16, telefone: "777888999", email: "eve@email.com" }
  ];


// Executa o processamento da lista
const resultado = processarLista(usuarios);

resultado.usuarios.forEach(user => console.log(user));
console.log("Média de idade:", resultado.mediaIdade);
