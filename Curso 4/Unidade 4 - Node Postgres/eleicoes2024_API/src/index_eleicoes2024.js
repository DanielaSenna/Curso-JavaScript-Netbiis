import express from 'express';
import AppRouter from "./router/AppRouter.js"
import LogMiddleware from './middlewares/LogMiddleware.js';
import ErrorHandler from "./middlewares/ErrorHandler.js"
import helmet from 'helmet'
import cors from 'cors'
import dotenv from 'dotenv';

dotenv.config()

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(LogMiddleware);


app.use('/', AppRouter);

app.use(ErrorHandler);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})