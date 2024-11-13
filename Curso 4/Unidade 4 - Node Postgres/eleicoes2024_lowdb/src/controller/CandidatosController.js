import * as CandidatosService from "../services/CandidatosService.js"

// PEGA A LISTA DE CANDIDATOS
export async function listarCandidatos(req, res){
    const candidatos = await CandidatosService.listarCandidatos();
    res.send(candidatos);
}

// BUSCA UM CANDIDATO PELO ID
export async function buscaCandidatoPorId(req, res, next) {
    const candidato = await CandidatosService.buscaCandidatoPorId(req.params.id);
    if (!candidato) {    
        next(new Error("Candidato Não Encontrado"));
        return;
    }
    res.send(candidato);
    
}

// BUSCA UM CANDIDATO PELO NUMERO DA CAMPANHA 
export function buscaCandidatoPorNumero(req, res) {
    const numero = parseInt(req.query.numero);
    console.log(req.query.numero)
    if (isNaN(numero) || numero <= 0) {
        return res.status(400).send("Número de Campanha Inválido");
    }

    try {
        // Busca o candidato pelo número da campanha
        const candidato = CandidatosService.buscaCandidatoPorNumero(req.query.numero);
        
        // Retorna o candidato se encontrado, caso contrário retorna erro 404
        if (candidato) {
            res.send(candidato);
        } else {
            res.status(404).send("Candidato não encontrado");
        }
    } catch (error) {
        res.status(404).send({ message: error.message }); 
    }
}

// CRIA UM NOVO CANDIDATO
export async function criaCandidato(req, res) {
    const body = req.body;
    
    const result = await CandidatosService.criaCandidato(body)
    res.status(201).send(result);
}

// ATUALIZA OS DADOS DE UM CANDIDATO
export async function atualizaCandidato(req, res, next) {
    const body = req.body
    try {
        const result = await CandidatosService.atualizaCandidato(req.params.id, body)
        if (!result) {    
            next(new Error("Candidato Não Encontrado"));
            return;
        }
        res.send(result);
    } catch (error) {
        res.status(404).send({ message: error.message }); 
    }
}

// EXCLUI UM CANDIDATO
export async function deleteCandidatos(req, res, next) {
    try {
        const result = await CandidatosService.deleteCandidatos(req.params.id);
        if (!result) {    
            next(new Error("Candidato Não Encontrado"));
            return;
        }
        res.send('Candidato Excluído com Sucesso')
    } catch (error) {
        res.status(404).send(error.message); 
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
export async function removerCandidatoEleicao(req, res) {
    const { candidato_id, eleicao_id } = req.body;

    try {
        const result = await CandidatosService.removerCandidatoEleicao(candidato_id, eleicao_id);
        if (result) {
            res.send({ message: 'Candidato removido da eleição' });
        } else {
            res.status(404).send({ message: 'Candidato ou eleição não encontrados' });
        }
    } catch (error) {
        res.status(500).send({ message: 'Erro ao remover candidato da eleição' });
    }
}

