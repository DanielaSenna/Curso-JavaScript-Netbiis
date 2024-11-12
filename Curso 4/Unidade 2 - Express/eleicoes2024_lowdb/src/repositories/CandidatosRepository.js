import db from "../config/dbConfig.js"

// PEGA A LISTA DE CANDIDATOS
export function listarCandidatos(){
    return db.data.candidatos;
}

// BUSCA UM CANDIDATO PELO ID
export function buscaCandidatoPorId(id) {
    return db.data.candidatos.find(candidato => candidato.id == id);
}

// BUSCA UM CANDIDATO PELO NUMERO DA CAMPANHA 
export function buscaCandidatoPorNumero(numero) {
    return db.data.candidatos.find(candidato => candidato.numero == numero);
}


// CRIA UM NOVO CANDIDATO
export function criaCandidato(candidato) {
    db.data.candidatos.push(candidato);
    db.write();
}

// ATUALIZA OS DADOS DE UM CANDIDATO
export function atualizaCandidato(candidato) {
    const index = db.data.candidatos.findIndex(a => a.id == candidato.id);
    db.data.candidatos[index] = candidato;
    db.write();
}

// EXCLUI UM CANDIDATO
export function deleteCandidatos(id) {
    const index = db.data.candidatos.findIndex(a => a.id == id);
    db.data.candidatos.splice(index, 1);
    db.write();
}