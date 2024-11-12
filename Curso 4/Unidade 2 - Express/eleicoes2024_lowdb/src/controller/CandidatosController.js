import { CandidatosValidator } from "../validators/CandidatosValidator.js";
import * as CandidatosService from "../services/CandidatosService.js"

// PEGA A LISTA DE CANDIDATOS
export function listarCandidatos(req, res){
    const candidatos = CandidatosService.listarCandidatos();
    res.send(candidatos);
}

// BUSCA UM CANDIDATO PELO ID
export function buscaCandidatoPorId(req, res) {
    const id = parseInt(req.params.id);
   
    if (id <= 0 || isNaN(id)) {
        res.status(400).send("ID Inválido")
    } else {
        const candidato = CandidatosService.buscaCandidatoPorId(id)
        res.send(candidato)
    }
}

// BUSCA UM CANDIDATO PELO NUMERO DA CAMPANHA 
export function buscaCandidatoPorNumero(req, res) {
    const numero = parseInt(req.query.numero);

    if (isNaN(numero) || numero <= 0) {
        return res.status(400).send("Número de campanha inválido");
    }

    const candidato = CandidatosService.buscaCandidatoPorNumero(numero)

    if (candidato) {
        res.send(candidato);
    } else {
        res.status(404).send("Candidato não encontrado");
    }
}


// CRIA UM NOVO CANDIDATO
export function criaCandidato(req, res) {
    const body = req.body;
    const validacao = CandidatosValidator.validate(body);
    
    if(validacao.error){
        res.status(400).send({message: validacao.error.details[0].message})
    } 
    CandidatosService.criaCandidato(body)
    res.status(201).send("Candidato Criado");
}

// ATUALIZA OS DADOS DE UM CANDIDATO
export function atualizaCandidato(req, res) {
    const id = parseInt(req.params.id);
    
    if (id <= 0 || isNaN(id)) {
        res.status(400).send("ID Inválido")
    } 

    const body = req.body
    const validacao = CandidatosValidator.validate(body);
    
    if(validacao.error){
        res.status(400).send({message: validacao.error.details[0].message})
    } 
    CandidatosService.atualizaCandidato(body)
    res.send({message: "Aluno " + id + " Atualizado"});
}

// EXCLUI UM CANDIDATO
export function deleteCandidatos(req, res) {
    const id = parseInt(req.params.id);

    if (id <= 0 || isNaN(id)) {
        res.status(400).send("ID Inválido")
    }
    CandidatosService.deleteCandidatos(id)
    res.send('Candidato excluído com sucesso')   
}
