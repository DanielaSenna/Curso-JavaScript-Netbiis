import pool from "../config/dbConfig.js";

// PEGA A LISTA DE CANDIDATOS
export async function listarCandidatos(){
    const result = await pool.query('SELECT * FROM candidato');
    return result.rows;
}

// BUSCA UM CANDIDATO PELO ID
export async function buscaCandidatoPorId(id) {
    const result = await pool.query('SELECT * FROM candidato WHERE id = $1', [id]);
    return result.rows[0] ?? false;
}

// BUSCA UM CANDIDATO PELO NUMERO DA CAMPANHA 
export async function buscaCandidatoPorNumero(numero) {
    const result = await pool.query('SELECT * FROM candidato WHERE numero = $1', [numero]);
    return result.rows[0] ?? false;
}


// CRIA UM NOVO CANDIDATO
export async function criaCandidato(candidato) {
    const result = await pool.query(
        'INSERT INTO candidato (nome, numero, partido) VALUES ($1, $2, $3) RETURNING *',
        [candidato.nome, candidato.numero, candidato.partido]
    );

    return result.rows[0];
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

// BUSCA CANDIDADO A ELEICAO
export async function buscaCandidatoEleicao(idCandidato, idEleicao){
    const result = await pool.query(
        'SELECT * FROM candidato_eleicao WHERE candidato_id = $1 AND eleicao_id = $2', 
        [idCandidato, idEleicao]
    );
    return result.rows[0] ?? false;
}

// ADICIONA CANDIDADO A ELEICAO
export async function adicionarCandidatoEleicao(idCandidato, idEleicao) {
    const result = await pool.query(
        'INSERT INTO candidato_eleicao (candidato_id, eleicao_id) VALUES ($1, $2) RETURNING *',
        [idCandidato, idEleicao]
    );

    return result.rows[0];
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
