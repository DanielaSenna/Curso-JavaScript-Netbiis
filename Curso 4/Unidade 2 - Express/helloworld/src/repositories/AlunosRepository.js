import db from "../config/dbConfig.js"

export function listarAlunos(req, res){
    return db.data.alunos;
}

export function buscarAlunoPorId(id){
    return db.data.alunos.find(aluno => aluno.id == id);
}

export function criarAluno(aluno){
    db.data.alunos.push(aluno);
    db.write();
}

export function atualizarAluno(aluno){
    const index = db.data.alunos.findIndex(a => a.id == aluno.id);
    db.data.alunos[index] = aluno;
    db.write();
}

export function deletarAluno(id){
    const index = db.data.alunos.findIndex(a => a.id == id);
    db.data.alunos.splice(index, 1);
    db.write();
}