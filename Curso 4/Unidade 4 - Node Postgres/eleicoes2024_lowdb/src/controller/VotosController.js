import * as votosService from "../services/VotosService.js"

export async function listarVotos(req, res){
    const votos = await votosService.listarVotos();
    res.send(votos);
}

export async function inserirVoto(req, res) {
    const body = req.body;
    
    try {
        const result = await votosService.inserirVoto(body);
        if (!result) {
            res.status(400).send({message: 'Eleitor já votou'});
            return;
        }
        res.send(result);
    } catch (error) {
        if (error.message === 'Candidato não encontrado') {
            res.status(400).send({message: 'Número de candidato inválido'});
        } else {
            res.status(500).send({message: 'Erro no sistema'});
        }
    }
}
