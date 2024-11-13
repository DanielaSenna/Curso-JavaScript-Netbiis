import { Router } from "express";
import CandidatosRouter from "./CandidatosRouter.js";
import VotosRouter from "./VotosRouter.js";
import EleitorRouter from "./EleitorRouter.js";

const router = Router();

router.use('/candidatos', CandidatosRouter);
router.use('/votos', VotosRouter);
router.use('/eleitor', EleitorRouter);

export default router;