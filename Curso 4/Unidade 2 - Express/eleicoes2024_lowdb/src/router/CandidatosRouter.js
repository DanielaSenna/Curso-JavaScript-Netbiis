import { Router } from "express";
import * as CandidatosController from "../controller/CandidatosController.js"

const router = Router();

// PEGA A LISTA DE CANDIDATOS
router.get('/', CandidatosController.listarCandidatos)

// BUSCA UM CANDIDATO PELO ID
router.get('/:id', CandidatosController.buscaCandidatoPorId)

// BUSCA UM CANDIDATO PELO NUMERO DA CAMPANHA 
router.get('/numero', CandidatosController.buscaCandidatoPorNumero)

// CRIA UM NOVO CANDIDATO
router.post('/', CandidatosController.criaCandidato)

// ATUALIZA OS DADOS DE UM CANDIDATO
router.put('/:id', CandidatosController.atualizaCandidato)

// EXCLUI UM CANDIDATO
router.delete('/:id', CandidatosController.deleteCandidatos)

export default router;

/*
// PEGA A LISTA DE CANDIDATOS
router.get('/', (req, res) => {
    res.send(candidatos);
})

// BUSCA UM CANDIDATO PELO ID
router.get('/id/:id', (req, res) => {
    const id = parseInt(req.params.id);
   
    if (id <= 0 || isNaN(id)) {
        res.status(400).send("ID Inválido")
    } else {
        const candidato = candidatos.find(c => c.id === id);
        res.send(candidato)
    }
})

// BUSCA UM CANDIDATO PELO NUMERO DA CAMPANHA 
router.get('/numero', (req, res) => {
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
router.post('/', (req, res) => {
    const body = req.body;
    const validacao = CandidatosValidator.validate(body);
    
    if(validacao.error){
        res.status(400).send({message: validacao.error.details[0].message})
    } else{
        // Verifica se já existe um candidato com o mesmo número
        const numero = body.numero
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
    }
})

// ATUALIZA OS DADOS DE UM CANDIDATO
router.put('/:id', (req, res) => {
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
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);

    if (id <= 0 || isNaN(id)) {
        res.status(400).send("ID Inválido")
    } else {
        const index = candidatos.findIndex(c => c.id === id);
        candidatos.splice(index, 1);
        res.send('Candidato excluído com sucesso')
    }
})

export default router;
*/