import * as EleitorService from "../services/EleitorService.js"

// PEGA A LISTA DE ELEITOR
export async function listarEleitor(req, res){
    const eleitor = await EleitorService.listarEleitor();
    res.send(eleitor);
}

// BUSCA UM ELEITOR PELO ID
export async function buscaEleitorPorId(req, res, next) {
    try {
        const result = await EleitorService.buscaEleitorPorId(req.params.id);
        res.status(201).send(result);
    } catch (error) {
        next(error);
    }
    
}

// CRIA UM NOVO ELEITOR
export async function criaEleitor(req, res, next) {
    try {
        const eleitorData = {
            ...req.body,
            perfil: req.body.perfil || 2 // Define o perfil padrão como 2 se não fornecido
        };
        const result = await EleitorService.criaEleitor(eleitorData);
        res.status(201).send(result);
    } catch (error) {
        next(error);
    }
}

// ATUALIZA OS DADOS DE UM ELEITOR
export async function atualizaEleitor(req, res, next) {
    try {
        const { nome, cpf } = req.body;
        const result = await EleitorService.atualizaEleitor(req.params.id, { nome, cpf })
        res.status(200).send(result);
    } catch (error) {
        next(error);
    }
}

// EXCLUI UM ELEITOR
export async function deleteEleitor(req, res, next) {
    try {
        await EleitorService.deleteEleitor(req.params.id);
        res.status(200).send({ message: "Eleitor excluído com sucesso"});
    } catch (error) {
        next(error);
    }
}

export async function login(req, res, next) {
    try {
        const result = await EleitorService.login(req.body);
        res.status(200).send(result);
    } catch (error) {
        next(error);
    }
}

export async function atualizaSenhaEleitor(req, res, next) {
    try {
        const id = req.params.id;
        const { senhaAntiga, novaSenha } = req.body;

        const result = await EleitorService.atualizaSenhaEleitor(id, senhaAntiga, novaSenha);

        res.status(200).json({ message: 'Senha atualizada com sucesso', eleitor: result });
    } catch (error) {
        next(error);
    }
}

export async function obterMinhasInformacoes(req, res, next) {
    try {
        const result = await EleitorService.buscaEleitorPorId(req.params.id);
        res.status(201).send(result);
    } catch (error) {
        next(error);
    }
    
}