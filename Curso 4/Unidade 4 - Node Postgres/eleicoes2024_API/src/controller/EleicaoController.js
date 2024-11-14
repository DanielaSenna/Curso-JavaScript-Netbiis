import * as EleicaoService from "../services/EleicaoService.js"

// PEGA A LISTA DE ELEIÇÃO
export async function listarEleicao(req, res){
    const eleicao = await EleicaoService.listarEleicao();
    res.send(eleicao);
}

// BUSCA UM ELEIÇÃO PELO ID
export async function buscaEleicaoPorId(req, res, next) {
    try {
        const result = await EleicaoService.buscaEleicaoPorId(req.params.id);
        res.status(201).send(result);
    } catch (error) {
        next(error);
    }
}

// CRIA UMA NOVA ELEIÇÃO
export async function criaEleicao(req, res, next) {
    try {
        const result = await EleicaoService.criaEleicao(req.body);
        res.status(201).send(result);
    } catch (error) {
        next(error);
    }
}

// ATUALIZA OS DADOS DE UMA ELEIÇÃO
export async function atualizaEleicao(req, res, next) {
    try {
        const result = await EleicaoService.atualizaEleicao(req.params.id, req.body)
        res.status(200).send(result);
    } catch (error) {
        next(error);
    }
}

// EXCLUI UMA ELEIÇÃO
export async function deleteEleicao(req, res, next) {
    try {
        await EleicaoService.deleteEleicao(req.params.id);
        res.status(200).send({ message: "Eleição excluída com sucesso"});
    } catch (error) {
        next(error);
    }
}

// RESUMO ELEICAO
export async function resumoEleicao(req, res, next) {
    try {
        const result = await EleicaoService.resumoEleicao(req.params.id);
        res.status(201).send(result);
    } catch (error) {
        next(error);
    }
}