import * as CandidatosRepository from "../repositories/CandidatosRepository.js"

// PEGA A LISTA DE CANDIDATOS
export function listarCandidatos(){
    return CandidatosRepository.listarCandidatos();
}

// BUSCA UM CANDIDATO PELO ID
export function buscaCandidatoPorId(id) {
    return CandidatosRepository.buscaCandidatoPorId(id)
}

// BUSCA UM CANDIDATO PELO NUMERO DA CAMPANHA 
export function buscaCandidatoPorNumero(numero) {
    return CandidatosRepository.buscaCandidatoPorNumero(numero)
}

// CRIA UM NOVO CANDIDATO
export function criaCandidato(candidato) {
    return CandidatosRepository.criaCandidato(candidato)
}

// ATUALIZA OS DADOS DE UM CANDIDATO
export function atualizaCandidato(candidato) {
   return CandidatosRepository.atualizaCandidato(candidato)
}

// EXCLUI UM CANDIDATO
export function deleteCandidatos(id) {
   return CandidatosRepository.deleteCandidatos(id)
}