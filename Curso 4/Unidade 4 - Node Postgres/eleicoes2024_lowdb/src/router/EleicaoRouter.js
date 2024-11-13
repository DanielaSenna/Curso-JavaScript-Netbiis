import { Router } from "express";
import * as EleicaoController from "../controller/EleicaoController.js"

const router = Router();

// PEGA A LISTA DE ELEIÇÃO
router.get('/', EleicaoController.listarEleicao)

// BUSCA UMA ELEIÇÃO PELO ID
router.get('/:id', EleicaoController.buscaEleicaoPorId)

// CRIA UMA NOVA ELEIÇÃO
router.post('/', EleicaoController.criaEleicao)

// ATUALIZA OS DADOS DE UMA ELEIÇÃO
router.put('/:id', EleicaoController.atualizaEleicao)

// EXCLUI UMA ELEIÇÃO
router.delete('/:id', EleicaoController.deleteEleicao)

export default router;