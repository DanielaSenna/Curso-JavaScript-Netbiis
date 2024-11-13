import { CandidatosValidator } from "../validators/CandidatosValidator.js";
import * as CandidatosService from "../services/CandidatosService.js"
import Joi from "joi";

// PEGA A LISTA DE CANDIDATOS
export function listarCandidatos(req, res){
    const candidatos = CandidatosService.listarCandidatos();
    res.send(candidatos);
}

// BUSCA UM CANDIDATO PELO ID
export function buscaCandidatoPorId(req, res) {
    const id = parseInt(req.params.id);
    if (isNaN(id) || id <= 0) {
        res.status(400).send("ID Inválido")
    }
    
    const candidato = CandidatosService.buscaCandidatoPorId(req.params.id)
    if (candidato) {
        res.send(candidato);
    } else {
        res.status(404).send("Candidato Não Encontrado");
    }
    
}

// BUSCA UM CANDIDATO PELO NUMERO DA CAMPANHA 
export function buscaCandidatoPorNumero(req, res) {
    const numero = parseInt(req.query.numero);
    console.log(req.query.numero)
    if (isNaN(numero) || numero <= 0) {
        res.status(400).send("Número de Campanha Inválido");
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
export function criaCandidato(req, res) {
    const body = req.body;
    const validacao = CandidatosValidator.validate(body);
    
    if(validacao.error){
        res.status(400).send({message: validacao.error.details[0].message})
        return;
    } 
    CandidatosService.criaCandidato(body)
    res.status(201).send("Candidato Criado");
}

// ATUALIZA OS DADOS DE UM CANDIDATO
export function atualizaCandidato(req, res) {
    const id = parseInt(req.params.id);
    if (id <= 0 || isNaN(id)) {
        return res.status(400).send("ID Inválido")
    } 

    const body = req.body
    const validacao = CandidatosValidator.validate(body);
    if(validacao.error){
        return res.status(400).send({message: validacao.error.details[0].message});
    } 

    if (body.id !== id) {
        return res.status(400).send({ message: "O ID no corpo da requisição deve coincidir com o ID da URL" });
    }

    try {
        CandidatosService.atualizaCandidato(body)
        res.send({message: "Candidato " + id + " Atualizado"});
    } catch (error) {
        res.status(404).send({ message: error.message }); 
    }
}

// EXCLUI UM CANDIDATO
export function deleteCandidatos(req, res) {
    const id = parseInt(req.params.id);
    if (id <= 0 || isNaN(id)) {
        res.status(400).send("ID Inválido")
    }

    try {
        CandidatosService.deleteCandidatos(id);
        res.send('Candidato Excluído com Sucesso')
    } catch (error) {
        res.status(404).send(error.message); 
    }
}
