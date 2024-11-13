import * as EleitorRepository from "../repositories/EleitorRepository.js"

// PEGA A LISTA DE ELEITOR
export async function listarEleitor(){
    const result = await EleitorRepository.listarEleitor();
    return result;
}

// BUSCA UM ELEITOR PELO ID
export async function buscaEleitorPorId(id) {
    const result = await EleitorRepository.buscaEleitorPorId(id);
    return result;
}

// CRIA UM NOVO ELEITOR
export async function criaEleitor(eleitor) {
    const result = await EleitorRepository.criaEleitor(eleitor);
    return result;
}

// ATUALIZA OS DADOS DE UM ELEITOR
export async function atualizaEleitor(id, eleitor) {
    const result = await EleitorRepository.atualizaEleitor(id, eleitor);
    return result;
}

// EXCLUI UM ELEITOR
export async function deleteEleitor(id) {
    await EleitorRepository.deleteEleitor(id);
}