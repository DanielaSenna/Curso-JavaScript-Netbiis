import pool from "../config/dbConfig.js";

// PEGA A LISTA DE CANDIDATOS
export async function listarCandidatos(){
    const result = await pool.query('SELECT * FROM candidato');
    return result.rows;
}

// BUSCA UM CANDIDATO PELO ID
export async function buscaCandidatoPorId(id) {
    const result = await pool.query('SELECT * FROM candidato WHERE id = $1', [id]);
    return result.rows[0];
}

// BUSCA UM CANDIDATO PELO NUMERO DA CAMPANHA 
export async function buscaCandidatoPorNumero(numero) {
    const result = await pool.query('SELECT * FROM candidato WHERE numero = $1', [numero]);
    return result.rows[0];
}


// CRIA UM NOVO CANDIDATO
export async function criaCandidato(candidato) {
   
    try {
        // Verifica se o candidato com o mesmo nome ou número já existe
        const { rows } = await pool.query(
            'SELECT * FROM candidato WHERE nome = $1 AND numero = $2',
            [candidato.nome, candidato.numero]
        );
       
        // Se já existir, retorna uma mensagem sem lançar erro
        if (rows.length > 0) {
            return { message: 'Já existe um candidato com este nome ou número' };
        }

        // Se não existir, insere o novo candidato
        const result = await pool.query(
            'INSERT INTO candidato (nome, numero, partido) VALUES ($1, $2, $3) RETURNING *',
            [candidato.nome, candidato.numero, candidato.partido]
        );

        return result.rows[0];
    } catch (error) {
        // Lança um erro em caso de problemas com a consulta ou inserção
        throw new Error(`Erro ao criar candidato: ${error.message}`);
    }
}

// ATUALIZA OS DADOS DE UM CANDIDATO
export async function atualizaCandidato(id, candidato) {
    const result = await pool.query(
        'UPDATE candidato SET nome = $1, numero = $2, partido = $3 WHERE id = $4 RETURNING *', 
        [candidato.nome, candidato.numero, candidato.partido, id]);
    return result.rows[0];
}

// EXCLUI UM CANDIDATO
export async function deleteCandidatos(id) {
    await pool.query('DELETE FROM candidato WHERE id = $1', [id]);
}

// ADICIONA CANDIDADO A ELEICAO
export async function adicionarCandidatoEleicao(idCandidato, idEleicao) {
    try {
        // Verifica se o candidato com o mesmo nome ou número já existe
        const { rows } = await pool.query(
            'SELECT * FROM candidato_eleicao WHERE candidato_id = $1 AND eleicao_id = $2',
            [idCandidato, idEleicao]
        );
       
        // Se já existir, retorna uma mensagem sem lançar erro
        if (rows.length > 0) {
            return { message: 'O candidato já está cadastrado na eleição' };
        }

        // Se não existir, insere o novo candidato
        const result = await pool.query(
            'INSERT INTO candidato_eleicao (candidato_id, eleicao_id) VALUES ($1, $2) RETURNING *',
            [idCandidato, idEleicao]
        );

        return result.rows[0];
    } catch (error) {
        // Lança um erro em caso de problemas com a consulta ou inserção
        throw new Error(`Erro ao criar candidato: ${error.message}`);
    }
}

// REMOVE CANDIDADO DA ELEICAO
export async function removerCandidatoEleicao(idCandidato, idEleicao) {
    
    try {
        const res = await pool.query('DELETE FROM candidato_eleicao WHERE candidato_id = $1 AND eleicao_id = $2', [idCandidato, idEleicao]);
        return res.rowCount > 0; // Retorna true se a exclusão foi bem-sucedida
    } catch (error) {
        console.error('Erro ao remover candidato da eleição:', error);
        throw error;
    }
}
