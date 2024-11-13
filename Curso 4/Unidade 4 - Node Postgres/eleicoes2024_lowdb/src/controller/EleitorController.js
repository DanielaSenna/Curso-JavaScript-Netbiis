import { EleitorValidator } from "../validators/EleitorValidator.js";
import * as EleitorService from "../services/EleitorService.js"
import Joi from "joi";

// PEGA A LISTA DE ELEITOR
export async function listarEleitor(req, res){
    const eleitor = await EleitorService.listarEleitor();
    res.send(eleitor);
}

// BUSCA UM ELEITOR PELO ID
export async function buscaEleitorPorId(req, res) {
    const id = parseInt(req.params.id);
    if (isNaN(id) || id <= 0) {
        return res.status(400).send("ID Inválido");
    }

    const eleitor = await EleitorService.buscaEleitorPorId(req.params.id);
    if (eleitor) {
        res.send(eleitor);
    } else {
        res.status(404).send("Eleitor Não Encontrado");
    }
    
}

// CRIA UM NOVO ELEITOR
export async function criaEleitor(req, res) {
    const body = req.body;
    const validacao = EleitorValidator.validate(body);
    
    if(validacao.error){
        return res.status(400).send({message: validacao.error.details[0].message})
    } 
    const result = await EleitorService.criaEleitor(body)
    res.status(201).send(result);
}

// ATUALIZA OS DADOS DE UM ELEITOR
export async function atualizaEleitor(req, res) {
    const id = parseInt(req.params.id);
    if (id <= 0 || isNaN(id)) {
        return res.status(400).send("ID Inválido")
    } 

    const body = req.body
    const validacao = EleitorValidator.validate(body);
    if(validacao.error){
        return res.status(400).send({message: validacao.error.details[0].message});
    } 

    try {
        const result = await EleitorService.atualizaEleitor(req.params.id, body)
        res.send(result);
    } catch (error) {
        res.status(404).send({ message: error.message }); 
    }
}

// EXCLUI UM ELEITOR
export async function deleteEleitor(req, res) {
    const id = parseInt(req.params.id);
    if (id <= 0 || isNaN(id)) {
        return res.status(400).send("ID Inválido")
    }

    try {
        await EleitorService.deleteEleitor(id);
        res.send('Eleitor Excluído com Sucesso')
    } catch (error) {
        res.status(404).send(error.message); 
    }
}
