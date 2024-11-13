import { Router } from "express";
import * as EleitorController from "../controller/EleitorController.js"

const router = Router();

// PEGA A LISTA DE ELEITOR
router.get('/', EleitorController.listarEleitor)

// BUSCA UM ELEITOR PELO ID
router.get('/:id', EleitorController.buscaEleitorPorId)

// CRIA UM NOVO ELEITOR
router.post('/', EleitorController.criaEleitor)

// ATUALIZA OS DADOS DE UM ELEITOR
router.put('/:id', EleitorController.atualizaEleitor)

// EXCLUI UM ELEITOR
router.delete('/:id', EleitorController.deleteEleitor)

export default router;