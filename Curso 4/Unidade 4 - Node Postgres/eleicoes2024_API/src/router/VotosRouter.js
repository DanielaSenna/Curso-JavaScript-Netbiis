import { Router } from "express";
import * as VotosController from "../controller/VotosController.js";
import { validateVotos } from '../middlewares/validateVotos.js';

const router = Router();

// PEGA A LISTA DE ELEITOR
router.get('/', VotosController.listarVotos)

router.post('/', validateVotos, VotosController.inserirVoto)

export default router;