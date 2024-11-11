

export function listarAlunos(req, res){
    res.send("Página de Alunos")
}

export function buscarAlunoPorId(req, res){
    const id = req.params.id;

    if (parseInt(id) <= 0 || isNaN(parseInt(id))) {
        res.status(400).send("ID Inválido")
    }
    const query = req.query;
    console.log(query)

    res.send(`Página do Aluno ${id}`)
}

export function criarAluno(req, res){
    const body = req.body;
    const validacao = AlunosValidator.validate(body);
    
    if(validacao.error){
        res.status(400).send({message: validacao.error.details[0].message})
    }
    res.status(201).send('Aluno Criado');
}

export function atualizarAluno(req, res){
    const body = req.body;
    console.log(body)
    res.send({message: "Aluno " + req.params.id + " Atualizado"});
}

export function deletarAluno(req, res){
    res.send("Aluno Deletado");
}