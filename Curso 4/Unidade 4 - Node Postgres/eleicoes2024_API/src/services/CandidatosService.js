import * as CandidatosRepository from "../repositories/CandidatosRepository.js"
import AppError from "../errors/AppError.js";
import * as EleicaoRepository from "../repositories/EleicaoRepository.js";

// PEGA A LISTA DE CANDIDATOS
export async function listarCandidatos(){
    const result = await CandidatosRepository.listarCandidatos();
    return result;
}

// BUSCA UM CANDIDATO PELO ID
export async function buscaCandidatoPorId(id) {
    const result = await CandidatosRepository.buscaCandidatoPorId(id);
    if (!result) {
        throw new AppError('Candidato Não Encontrado', 400);
    }
    return result;
}

// BUSCA UM CANDIDATO PELO NUMERO DA CAMPANHA 
export async function buscaCandidatoPorNumero(numero) {
    const result = await CandidatosRepository.buscaCandidatoPorNumero(numero);
    if (!result) {
        throw new AppError('Não foi encontrado candidato com esse número', 400);
    }
    return result;
}

// CRIA UM NOVO CANDIDATO
export async function criaCandidato(candidato) {
    const candidatoExistente = await CandidatosRepository.buscaCandidatoPorNumero(candidato.numero);
    if (candidatoExistente) {
        throw new AppError('Número já Cadastrado', 400);
    }
    return await CandidatosRepository.criaCandidato(candidato);
    
}

// ATUALIZA OS DADOS DE UM CANDIDATO
export async function atualizaCandidato(id, candidato) {
    const candidatoExistente = await CandidatosRepository.buscaCandidatoPorId(id);
    if (!candidatoExistente) {
        throw new AppError('Id de Candidato Não Encontrado', 400);
    }
    const result = await CandidatosRepository.atualizaCandidato(id, candidato);
    return result;
}

// EXCLUI UM CANDIDATO
export async function deleteCandidatos(id) {
    const candidatoExistente = await CandidatosRepository.buscaCandidatoPorId(id);
    if (!candidatoExistente) {
        throw new AppError('Id de Candidato Não Encontrado', 400);
    }
    await CandidatosRepository.deleteCandidatos(id);
}

// ADICIONA CANDIDADO A ELEICAO
export async function adicionarCandidatoEleicao(candidatoId, eleicaoId) {
    const candidato = await CandidatosRepository.buscaCandidatoPorId(candidatoId);
    const eleicao = await EleicaoRepository.buscaEleicaoPorId(eleicaoId);
    const candidatoExistente = await CandidatosRepository.buscaCandidatoEleicao(candidatoId, eleicaoId);
    if (!candidato) {
        throw new AppError('Id de Candidato Não Encontrado', 400);
    }
    if (!eleicao) {
        throw new AppError('Id de Eleição Não Encontrado', 400);
    }
    if (candidatoExistente) {
        throw new AppError('O Candidato já está Cadastrado na Eleição', 400);
    }
    return await CandidatosRepository.adicionarCandidatoEleicao(candidatoId, eleicaoId);
}

// REMOVE CANDIDADO DA ELEICAO
export async function removerCandidatoEleicao(candidatoId, eleicaoId) {
    const candidato = await CandidatosRepository.buscaCandidatoPorId(candidatoId);
    const eleicao = await EleicaoRepository.buscaEleicaoPorId(eleicaoId);
    const candidatoExistente = await CandidatosRepository.buscaCandidatoEleicao(candidatoId, eleicaoId);
    if (!candidato) {
        throw new AppError('Id de Candidato Não Encontrado', 400);
    }
    if (!eleicao) {
        throw new AppError('Id de Eleição Não Encontrado', 400);
    }
    if (!candidatoExistente) {
        throw new AppError('Essa Eleição Não Existe', 400);
    }
    await CandidatosRepository.removerCandidatoEleicao(candidatoId, eleicaoId);
}

