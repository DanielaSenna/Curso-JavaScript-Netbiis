import { CandidatosValidator } from "../validators/CandidatosValidator.js";
import * as CandidatosService from "../services/CandidatosService.js"
import Joi from "joi";

// PEGA A LISTA DE CANDIDATOS
export async function listarCandidatos(req, res){
    const candidatos = await CandidatosService.listarCandidatos();
    res.send(candidatos);
}

// BUSCA UM CANDIDATO PELO ID
export async function buscaCandidatoPorId(req, res) {
    const id = parseInt(req.params.id);
    if (isNaN(id) || id <= 0) {
        return res.status(400).send("ID Inválido");
    }

    const candidato = await CandidatosService.buscaCandidatoPorId(id);
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
    const validacao = CandidatosValidator.validate(body);
    
    if(validacao.error){
        return res.status(400).send({message: validacao.error.details[0].message})
    } 
    const result = await CandidatosService.criaCandidato(body)
    res.status(201).send(result);
}

// ATUALIZA OS DADOS DE UM CANDIDATO
export async function atualizaCandidato(req, res) {
    const id = parseInt(req.params.id);
    if (id <= 0 || isNaN(id)) {
        return res.status(400).send("ID Inválido")
    } 

    const body = req.body
    const validacao = CandidatosValidator.validate(body);
    if(validacao.error){
        return res.status(400).send({message: validacao.error.details[0].message});
    } 

    try {
        const result = await CandidatosService.atualizaCandidato(req.params.id, body)
        res.send(result);
    } catch (error) {
        res.status(404).send({ message: error.message }); 
    }
}

// EXCLUI UM CANDIDATO
export async function deleteCandidatos(req, res) {
    const id = parseInt(req.params.id);
    if (id <= 0 || isNaN(id)) {
        return res.status(400).send("ID Inválido")
    }

    try {
        await CandidatosService.deleteCandidatos(id);
        res.send('Candidato Excluído com Sucesso')
    } catch (error) {
        res.status(404).send(error.message); 
    }
}
