import * as votosRepository from "../repositories/VotosRepository.js";


// PEGA A LISTA DE ELEITOR
export async function listarVotos(){
    const result = await votosRepository.listarVotos();
    return result;
}

export async function inserirVoto(voto) {
    const candidatoExiste = await votosRepository.verificarCandidatoExiste(voto.numero);
    if (!candidatoExiste) {
        throw new Error('Candidato não encontrado');
    }

    const eleitorVotou = await votosRepository.verificarEleitorVotou(voto.eleicao_id, voto.eleitor_id, voto.numero);
    if (eleitorVotou) {
        return false;
    } 
    
    return await votosRepository.inserirVoto(voto);
    
}
