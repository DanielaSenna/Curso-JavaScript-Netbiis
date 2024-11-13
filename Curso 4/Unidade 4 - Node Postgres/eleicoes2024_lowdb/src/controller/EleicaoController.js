import { EleicaoValidator } from "../validators/EleicaoValidator.js";
import * as EleicaoService from "../services/EleicaoService.js"
import Joi from "joi";

// PEGA A LISTA DE ELEIÇÃO
export async function listarEleicao(req, res){
    const eleicao = await EleicaoService.listarEleicao();
    res.send(eleicao);
}

// BUSCA UM ELEIÇÃO PELO ID
export async function buscaEleicaoPorId(req, res) {
    const id = parseInt(req.params.id);
    if (isNaN(id) || id <= 0) {
        return res.status(400).send("ID Inválido");
    }

    const eleicao = await EleicaoService.buscaEleicaoPorId(req.params.id);
    if (eleicao) {
        res.send(eleicao);
    } else {
        res.status(404).send("Eleitor Não Encontrado");
    }
    
}

// CRIA UMA NOVA ELEIÇÃO
export async function criaEleicao(req, res) {
    const body = req.body;
    const validacao = EleicaoValidator.validate(body);
    
    if(validacao.error){
        return res.status(400).send({message: validacao.error.details[0].message})
    } 
    const result = await EleicaoService.criaEleicao(body)
    res.status(201).send(result);
}

// ATUALIZA OS DADOS DE UMA ELEIÇÃO
export async function atualizaEleicao(req, res) {
    const id = parseInt(req.params.id);
    if (id <= 0 || isNaN(id)) {
        return res.status(400).send("ID Inválido")
    } 

    const body = req.body
    const validacao = EleicaoValidator.validate(body);
    if(validacao.error){
        return res.status(400).send({message: validacao.error.details[0].message});
    } 

    try {
        const result = await EleicaoService.atualizaEleicao(req.params.id, body)
        res.send(result);
    } catch (error) {
        res.status(404).send({ message: error.message }); 
    }
}

// EXCLUI UMA ELEIÇÃO
export async function deleteEleicao(req, res) {
    const id = parseInt(req.params.id);
    if (id <= 0 || isNaN(id)) {
        return res.status(400).send("ID Inválido")
    }

    try {
        await EleicaoService.deleteEleicao(id);
        res.send('Eleição Excluída com Sucesso')
    } catch (error) {
        res.status(404).send(error.message); 
    }
}
