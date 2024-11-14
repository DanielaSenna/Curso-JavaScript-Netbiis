import { Router } from "express";
import * as EleitorController from "../controller/EleitorController.js"
import { validateEleitor } from '../middlewares/validateEleitor.js';
import { ValidarIdMiddleware } from '../middlewares/IdValidator.js';
import { validateLogin } from '../middlewares/validateLogin.js'
import { validateEleitorUpdate } from '../middlewares/validateEleitorUpdate.js';
import { EleitorAuthMiddleware } from "../middlewares/AuthMiddlewares.js"
import { AdminAuth } from '../middlewares/AdminAuth.js';

const router = Router();

// PEGA A LISTA DE ELEITOR
router.get('/', EleitorAuthMiddleware, EleitorController.listarEleitor)

// BUSCA UM ELEITOR PELO ID
router.get('/info', EleitorAuthMiddleware, EleitorController.obterMinhasInformacoes)

// BUSCA UM ELEITOR PELO ID
router.get('/:id', ValidarIdMiddleware, EleitorController.buscaEleitorPorId)

// CRIA UM NOVO ELEITOR
router.post('/', validateEleitor, EleitorController.criaEleitor)

// ATUALIZA OS DADOS DE UM ELEITOR
router.put('/:id', ValidarIdMiddleware, validateEleitorUpdate, EleitorController.atualizaEleitor)

// EXCLUI UM ELEITOR
router.delete('/:id', ValidarIdMiddleware, EleitorController.deleteEleitor)

// LOGIN
router.post('/login', validateLogin, EleitorController.login)

// ATUALIZAR SENHA
router.put('/:id/senha', ValidarIdMiddleware, EleitorController.atualizaSenhaEleitor);

export default router;