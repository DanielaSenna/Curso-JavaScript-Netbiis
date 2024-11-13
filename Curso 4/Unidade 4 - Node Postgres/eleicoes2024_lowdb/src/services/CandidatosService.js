import * as CandidatosRepository from "../repositories/CandidatosRepository.js"

// PEGA A LISTA DE CANDIDATOS
export async function listarCandidatos(){
    const result = await CandidatosRepository.listarCandidatos();
    return result;
}

// BUSCA UM CANDIDATO PELO ID
export async function buscaCandidatoPorId(id) {
    const result = await CandidatosRepository.buscaCandidatoPorId(id);
    return result;
}

// BUSCA UM CANDIDATO PELO NUMERO DA CAMPANHA 
export function buscaCandidatoPorNumero(numero) {
    return CandidatosRepository.buscaCandidatoPorNumero(numero)
}

// CRIA UM NOVO CANDIDATO
export async function criaCandidato(candidato) {
    const result = await CandidatosRepository.criaCandidato(candidato);
    return result;
}

// ATUALIZA OS DADOS DE UM CANDIDATO
export async function atualizaCandidato(id, candidato) {
    const result = await CandidatosRepository.atualizaCandidato(id, candidato);
    return result;
}

// EXCLUI UM CANDIDATO
export async function deleteCandidatos(id) {
    await CandidatosRepository.deleteCandidatos(id);
}

// ADICIONA CANDIDADO A ELEICAO
export async function adicionarCandidatoEleicao(candidatoId, eleicaoId) {
    const result = await CandidatosRepository.adicionarCandidatoEleicao(candidatoId, eleicaoId);
    return result;
}

// REMOVE CANDIDADO DA ELEICAO
export async function removerCandidatoEleicao(candidatoId, eleicaoId) {
    const candidatoRemovido = await CandidatosRepository.removerCandidatoEleicao(candidatoId, eleicaoId);
    if (!candidatoRemovido) {
        throw new Error('Falha ao remover candidato da eleição');
    }
    return candidatoRemovido;
}

