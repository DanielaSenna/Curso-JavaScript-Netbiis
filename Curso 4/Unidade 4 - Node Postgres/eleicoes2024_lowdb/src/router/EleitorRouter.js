import { Router } from "express";
import * as EleitorController from "../controller/EleitorController.js"
import { validateEleitor } from '../middlewares/validateEleitor.js';
import { ValidarIdMiddleware } from '../middlewares/IdValidator.js';

const router = Router();

// PEGA A LISTA DE ELEITOR
router.get('/', EleitorController.listarEleitor)

// BUSCA UM ELEITOR PELO ID
router.get('/:id', ValidarIdMiddleware, EleitorController.buscaEleitorPorId)

// CRIA UM NOVO ELEITOR
router.post('/', validateEleitor, EleitorController.criaEleitor)

// ATUALIZA OS DADOS DE UM ELEITOR
router.put('/:id', ValidarIdMiddleware, EleitorController.atualizaEleitor)

// EXCLUI UM ELEITOR
router.delete('/:id', ValidarIdMiddleware, EleitorController.deleteEleitor)

export default router;