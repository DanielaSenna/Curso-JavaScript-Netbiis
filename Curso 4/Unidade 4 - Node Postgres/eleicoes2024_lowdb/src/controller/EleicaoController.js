import * as EleicaoService from "../services/EleicaoService.js"

// PEGA A LISTA DE ELEIÇÃO
export async function listarEleicao(req, res){
    const eleicao = await EleicaoService.listarEleicao();
    res.send(eleicao);
}

// BUSCA UM ELEIÇÃO PELO ID
export async function buscaEleicaoPorId(req, res, next) {
    const eleicao = await EleicaoService.buscaEleicaoPorId(req.params.id);
    if (!eleicao) {    
        next(new Error("Eleição Não Encontrado"));
        return;
    }
    res.send(eleicao);
    
}

// CRIA UMA NOVA ELEIÇÃO
export async function criaEleicao(req, res) {
    const body = req.body;
    
    const result = await EleicaoService.criaEleicao(body)
    res.status(201).send(result);
}

// ATUALIZA OS DADOS DE UMA ELEIÇÃO
export async function atualizaEleicao(req, res, next) {
    try {
        const result = await EleicaoService.atualizaEleicao(req.params.id, body)
        if (!result) {    
            next(new Error("Eleição Não Encontrado"));
            return;
        }
        res.send(result);
    } catch (error) {
        res.status(404).send({ message: error.message }); 
    }
}

// EXCLUI UMA ELEIÇÃO
export async function deleteEleicao(req, res, next) {
    try {
        const result = await EleicaoService.deleteEleicao(req.params.id);
        if (!result) {    
            next(new Error("Eleição Não Encontrado"));
            return;
        }
        res.send('Eleição Excluída com Sucesso')
    } catch (error) {
        res.status(404).send(error.message); 
    }
}

// RESUMO ELEICAO
export async function resumoEleicao(req, res) {
    const result = await EleicaoService.resumoEleicao(req.params.id);
    res.send(result);
}