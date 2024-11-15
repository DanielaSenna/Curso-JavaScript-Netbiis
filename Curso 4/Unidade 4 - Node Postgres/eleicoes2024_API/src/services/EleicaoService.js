import * as EleicaoRepository from "../repositories/EleicaoRepository.js";
import AppError from "../errors/AppError.js";

// PEGA A LISTA DE ELEIÇÃO
export async function listarEleicao(){
    const result = await EleicaoRepository.listarEleicao();
    return result;
}

// BUSCA UMA ELEIÇÃO PELO ID
export async function buscaEleicaoPorId(id) {
    const result = await EleicaoRepository.buscaEleicaoPorId(id);
    if (!result) {
        throw new AppError('Eleição Não Encontrada', 400);
    }
    return result;
}

// CRIA UMA NOVA ELEIÇÃO
export async function criaEleicao(eleicao) {
    return await EleicaoRepository.criaEleicao(eleicao);
}

// ATUALIZA OS DADOS DE UMA ELEIÇÃO
export async function atualizaEleicao(id, eleicao) {
    const eleicaoExistente = await EleicaoRepository.buscaEleicaoPorId(id);
    if (!eleicaoExistente) {
        throw new AppError('Id de Eleição Não Encontrado', 400);
    }
    const result = await EleicaoRepository.atualizaEleicao(id, eleicao);
    return result;
}

// EXCLUI UMA ELEIÇÃO
export async function deleteEleicao(id) {
    const eleicaoExistente = await EleicaoRepository.buscaEleicaoPorId(id);
    if (!eleicaoExistente) {
        throw new AppError('Id de Eleição Não Encontrado', 400);
    }
    await EleicaoRepository.deleteEleicao(id);
}

// RESUMO ELEICAO
export async function resumoEleicao(id) {
    const res = await EleicaoRepository.buscaEleicaoPorId(id);
    if (!res) {
        throw new AppError('Id de Eleição Não Encontrado', 400);
    }
    res.votos = await EleicaoRepository.resumoEleicao(id);
    res.votos = res.votos.map(el => {
        return {
            id: el.id,
            nome: el.nome,
            votos: parseInt(el.votos)
        }
    }).sort((a, b) => b.votos - a.votos);
    return res;
}