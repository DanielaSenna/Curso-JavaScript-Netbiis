import { Router } from "express";
import { AlunosValidator } from "../validators/AlunoValidator.js";

const router = Router();

router.get('/', (reg, res) => {
    res.send('Página de Alunos');
})

router.get('/:id', (req, res) => {
    const id = req.params.id;

    if (parseInt(id) <= 0 || isNaN(parseInt(id))) {
        res.status(400).send("ID Inválido")
    }
    const query = req.query;
    console.log(query)

    res.send(`Página do Aluno ${id}`)
})

router.post('/', (req, res) => {
    const body = req.body;
    const validacao = AlunosValidator.validate(body);
    
    if(validacao.error){
        res.status(400).send({message: validacao.error.details[0].message})
    }
    res.status(201).send('Aluno Criado');
})

router.put('/:id', (req, res) => {
    console.log(req.headers);
    res.header("Content-Type", "application/json")
    res.send({message: "Aluno " + req.params.id + " Atualizado"});
})

router.delete('/:id', (req, res) => {
    res.send("Aluno Deletado")
})

export default router;