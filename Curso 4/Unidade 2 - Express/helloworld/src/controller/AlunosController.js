import { AlunosValidator } from "../validators/AlunoValidator.js";
import * as AlunosService from "../services/AlunosService.js"

export function listarAlunos(req, res){
    //db.data.alunos.push({id: 1, nome: "Daniela", idade: 20})
    //db.write()
    //res.send("Página de Alunos")
    const alunos = AlunosService.listarAlunos();
    res.send(alunos);
}

export function buscarAlunoPorId(req, res){
    const id = parseInt(req.params.id);

    if (id <= 0 || isNaN(id)) {
        res.status(400).send("ID Inválido")
    }
    /*
    const query = req.query;
    console.log(query)
    res.send(`Página do Aluno ${id}`)
    */
    const aluno = AlunosService.buscarAlunoPorId(id);
    res.send(aluno);
}

export function criarAluno(req, res){
    const body = req.body;
    const validacao = AlunosValidator.validate(body);
    
    if(validacao.error){
        res.status(400).send({message: validacao.error.details[0].message})
    }
    AlunosService.criarAluno(body)
    res.status(201).send('Aluno Criado');
}

export function atualizarAluno(req, res){
    const body = req.body;
    const validacao = AlunosValidator.validate(body);
    
    if(validacao.error){
        res.status(400).send({message: validacao.error.details[0].message})
    }
    body.id = req.params.id;
    AlunosService.atualizarAluno(body)
    res.send({message: "Aluno " + req.params.id + " Atualizado"});
}

export function deletarAluno(req, res){
    const id = parseInt(req.params.id);

    if (id <= 0 || isNaN(id)) {
        res.status(400).send("ID Inválido")
    }
    AlunosService.deletarAluno(id)
    res.send("Aluno Deletado");
}