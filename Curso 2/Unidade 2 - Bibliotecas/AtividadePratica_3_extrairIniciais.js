// Crie uma função extrairIniciais(nome) que recebe um nome completo e retorna as iniciais de cada parte. Por exemplo, "John Doe" deve retornar "J.D."..

function extrairIniciais(nome) {
    
    return nome
        .split(" ")
        .map(parte => parte[0].toUpperCase())
        .join(".");
}

const iniciais = extrairIniciais("Daniela Costa de Sena");
console.log(iniciais);