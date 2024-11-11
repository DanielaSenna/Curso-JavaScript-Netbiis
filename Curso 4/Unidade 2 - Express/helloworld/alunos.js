import express from 'express';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.get('/alunos', (req, res) => {
    res.send('Página de Alunos');
})

app.get('/alunos/:id', (req, res) => {
    const id = req.params.id;

    if (parseInt(id) <= 0 || isNaN(parseInt(id))) {
        res.status(400).send("ID Inválido")
    }
    const query = req.query;
    console.log(query)

    res.send(`Página do Aluno ${id}`)
})

app.post('/alunos', (req, res) => {
    const body = req.body;
    res.status(201).send('Aluno Criado');
})

app.put('/alunos:id', (req, res) => {
    console.log(req.headers);
    res.header("Content-Type", "application/json")
    res.send({message: "Aluno " + req.params.id + " Atualizado"});
})

app.delete('/alunos', (req, res) => {
    res.send('Aluno Excluido');
})

app.use('/static', express.static('public'));

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})