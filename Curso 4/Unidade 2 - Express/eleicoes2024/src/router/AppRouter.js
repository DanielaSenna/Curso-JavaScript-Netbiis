import CandidatosRouter from "./CandidatosRouter.js"
import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    res.send('Hello World');
})

router.use("/candidatos", CandidatosRouter);

export default router;