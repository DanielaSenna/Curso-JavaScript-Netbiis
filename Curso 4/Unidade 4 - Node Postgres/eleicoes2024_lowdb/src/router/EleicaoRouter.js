import { Router } from "express";
import * as EleicaoController from "../controller/EleicaoController.js"
import { validateEleicao } from '../middlewares/validateEleicao.js';
import { ValidarIdMiddleware } from '../middlewares/IdValidator.js';

const router = Router();

// PEGA A LISTA DE ELEIÇÃO
router.get('/', EleicaoController.listarEleicao)

// BUSCA UMA ELEIÇÃO PELO ID
router.get('/:id', ValidarIdMiddleware, EleicaoController.buscaEleicaoPorId)

// CRIA UMA NOVA ELEIÇÃO
router.post('/', validateEleicao, EleicaoController.criaEleicao)

// ATUALIZA OS DADOS DE UMA ELEIÇÃO
router.put('/:id', ValidarIdMiddleware, EleicaoController.atualizaEleicao)

// EXCLUI UMA ELEIÇÃO
router.delete('/:id', ValidarIdMiddleware, EleicaoController.deleteEleicao)

router.get('/:id/resumo', EleicaoController.resumoEleicao)

export default router;