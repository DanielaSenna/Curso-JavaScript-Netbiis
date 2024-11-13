import * as EleitorService from "../services/EleitorService.js"

// PEGA A LISTA DE ELEITOR
export async function listarEleitor(req, res){
    const eleitor = await EleitorService.listarEleitor();
    res.send(eleitor);
}

// BUSCA UM ELEITOR PELO ID
export async function buscaEleitorPorId(req, res, next) {
    const eleitor = await EleitorService.buscaEleitorPorId(req.params.id);
    if (!eleitor) {    
        next(new Error("Eleitor Não Encontrado"));
        return;
    }
    res.send(eleitor);
    
}

// CRIA UM NOVO ELEITOR
export async function criaEleitor(req, res) {
    const body = req.body;
    
    const result = await EleitorService.criaEleitor(body)
    res.status(201).send(result);
}

// ATUALIZA OS DADOS DE UM ELEITOR
export async function atualizaEleitor(req, res, next) {
    const body = req.body    
    try {
        const result = await EleitorService.atualizaEleitor(req.params.id, body)
        if (!result) {    
            next(new Error("Eleitor Não Encontrado"));
            return;
        }
        res.send(result);
    } catch (error) {
        res.status(404).send({ message: error.message }); 
    }
}

// EXCLUI UM ELEITOR
export async function deleteEleitor(req, res, next) {
    try {
        const result = await EleitorService.deleteEleitor(req.params.id);
        if (!result) {    
            next(new Error("Eleitor Não Encontrado"));
            return;
        }
        res.send('Eleitor Excluído com Sucesso')
    } catch (error) {
        res.status(404).send(error.message); 
    }
}
