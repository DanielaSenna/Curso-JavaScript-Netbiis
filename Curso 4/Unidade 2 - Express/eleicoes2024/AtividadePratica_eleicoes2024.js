import express from 'express';

const app = express();
app.use(express.json());

let candidatos = [
    { id: 1, nome: 'Candidato A', numero: 10, partido: 'Partido A', foto: 'fulano.jpg', votos: 0},
    { id: 2, nome: 'Candidato B', numero: 11, partido: 'Partido B', foto: 'fulano.jpg', votos: 0},
    { id: 3, nome: 'Candidato C', numero: 12, partido: 'Partido C', foto: 'fulano.jpg', votos: 0},
];

// PEGA A LISTA DE CANDIDATOS
app.get('/candidatos', (req, res) => {
    res.send(candidatos);
})

// BUSCA UM CANDIDATO PELO ID
app.get('/candidatos/id/:id', (req, res) => {
    const id = parseInt(req.params.id);
   
    if (id <= 0 || isNaN(id)) {
        res.status(400).send("ID Inválido")
    } else {
        const candidato = candidatos.find(c => c.id === id);
        res.send(candidato)
    }
})

// BUSCA UM CANDIDATO PELO NUMERO DA CAMPANHA 
app.get('/candidatos/numero', (req, res) => {
    const numero = parseInt(req.query.numero);

    if (isNaN(numero) || numero <= 0) {
        return res.status(400).send("Número de campanha inválido");
    }

    const candidato = candidatos.find(c => c.numero === numero);

    if (candidato) {
        res.send(candidato);
    } else {
        res.status(404).send("Candidato não encontrado");
    }
});


// CRIA UM NOVO CANDIDATO
app.post('/candidatos', (req, res) => {
    const body = req.body;
    
    // Verifica se já existe um candidato com o mesmo número
    const numero = parseInt(body.numero)
    const candidato = candidatos.find(c => c.numero === numero)
    if (candidato) {
        return res.status(400).json({ error: 'Já existe um candidato com esse número' });
    }else {

        const novoCandidato = {
            id: candidatos.length + 1,
            nome: body.nome,
            partido: body.partido,
            numero: body.numero,
            fotos: body.fotos,
            votos: body.votos
        };
        
        candidatos.push(novoCandidato);
        
        res.status(201).send("Candidato criado");
    }
})

// ATUALIZA OS DADOS DE UM CANDIDATO
app.put('/candidatos/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const body = req.body
    
    if (id <= 0 || isNaN(id)) {
        res.status(400).send("ID Inválido")
    } else {
        const candidato = candidatos.find(c => c.id === id);
        candidato.nome = body.nome;
        candidato.numero = body.numero;
        candidato.partido = body.partido;
        candidato.foto = body.foto;
        candidato.votos = body.votos;

        res.send(candidato);
    }
})

// EXCLUI UM CANDIDATO
app.delete('/candidatos/:id', (req, res) => {
    const id = parseInt(req.params.id);

    if (id <= 0 || isNaN(id)) {
        res.status(400).send("ID Inválido")
    } else {
        const index = candidatos.findIndex(c => c.id === id);
        candidatos.splice(index, 1);
        res.send('Candidato excluído com sucesso')
    }
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})