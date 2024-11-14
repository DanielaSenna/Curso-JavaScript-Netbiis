import * as CandidatosService from "../services/CandidatosService.js"

// PEGA A LISTA DE CANDIDATOS
export async function listarCandidatos(req, res){
    const candidatos = await CandidatosService.listarCandidatos();
    res.send(candidatos);
}

// BUSCA UM CANDIDATO PELO ID
export async function buscaCandidatoPorId(req, res, next) {
    try {
        const result = await CandidatosService.buscaCandidatoPorId(req.params.id);
        res.status(201).send(result);
    } catch (error) {
        next(error);
    }
}

// BUSCA UM CANDIDATO PELO NUMERO DA CAMPANHA 
export async function buscaCandidatoPorNumero(req, res, next) {
    try {
        const result = await CandidatosService.buscaCandidatoPorNumero(req.query.numero);
        res.status(201).send(result);
    } catch (error) {
        next(error);
    }
}

// CRIA UM NOVO CANDIDATO
export async function criaCandidato(req, res, next) {
    try {
        const result = await CandidatosService.criaCandidato(req.body);
        res.status(201).send(result);
    } catch (error) {
        next(error);
    }
}

// ATUALIZA OS DADOS DE UM CANDIDATO
export async function atualizaCandidato(req, res, next) {
    try {
        const result = await CandidatosService.atualizaCandidato(req.params.id, req.body)
        res.status(200).send(result);
    } catch (error) {
        next(error);
    }
}

// EXCLUI UM CANDIDATO
export async function deleteCandidatos(req, res, next) {
    try {
        await CandidatosService.deleteCandidatos(req.params.id);
        res.status(200).send({ message: "Eleitor Excluído com Sucesso"});
    } catch (error) {
        next(error);
    }
}

// ADICIONA CANDIDADO A ELEICAO
export async function adicionarCandidatoEleicao(req, res, next) {
    try {
        const result = await CandidatosService.adicionarCandidatoEleicao(req.body.candidato_id, req.body.eleicao_id)
        res.status(201).send(result);
    } catch (error) {
        next(error); 
    }
}

// REMOVE CANDIDADO DA ELEICAO
export async function removerCandidatoEleicao(req, res, next) {
    try {
        await CandidatosService.removerCandidatoEleicao(req.body.candidato_id, req.body.eleicao_id)
        res.status(200).send({ message: "Candidato Excluído com Sucesso da Eleição"});
    } catch (error) {
        next(error);
    }
}

