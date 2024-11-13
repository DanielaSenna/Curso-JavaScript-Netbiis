import e, { Router } from "express";
import * as VotosController from "../controller/VotosController.js";

const router = Router();

router.post('/', VotosController.inserirVoto)

export default router;