import * as EleicaoRepository from "../repositories/EleicaoRepository.js"
import * as CandidatosService from "./CandidatosService.js"

// PEGA A LISTA DE ELEIÇÃO
export async function listarEleicao(){
    const result = await EleicaoRepository.listarEleicao();
    return result;
}

// BUSCA UMA ELEIÇÃO PELO ID
export async function buscaEleicaoPorId(id) {
    const result = await EleicaoRepository.buscaEleicaoPorId(id);
    return result;
}

// CRIA UMA NOVA ELEIÇÃO
export async function criaEleicao(eleicao) {
    const result = await EleicaoRepository.criaEleicao(eleicao);
    return result;
}

// ATUALIZA OS DADOS DE UMA ELEIÇÃO
export async function atualizaEleicao(id, eleicao) {
    const result = await EleicaoRepository.atualizaEleicao(id, eleicao);
    return result;
}

// EXCLUI UMA ELEIÇÃO
export async function deleteEleicao(id) {
    await EleicaoRepository.deleteEleicao(id);
}

// RESUMO ELEICAO
export async function resumoEleicao(id) {
    const res = await EleicaoRepository.buscaEleicaoPorId(id);
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