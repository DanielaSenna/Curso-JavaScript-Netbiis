import pool from "../config/dbConfig.js"

export async function listarVotos(){
    const result = await pool.query('SELECT * FROM voto');
    return result.rows;
}

export async function inserirVoto(voto) {
    const { eleicao_id, eleitor_id, numero } = voto;
    const query = {
        text: 'INSERT INTO voto (eleicao_id, eleitor_id, data_hora, numero) VALUES ($1, $2, NOW(), $3) RETURNING *',
        values: [eleicao_id, eleitor_id, numero]
    };

    try {
        const res = await pool.query(query.text, query.values);
        return res.rows[0];
    } catch (error) {
        console.error(error);
        return false;
    }
}

export async function verificarEleitorVotou(eleicao_id, eleitor_id, numero) {
    const query = {
        text: 'SELECT * FROM voto WHERE eleicao_id = $1 AND eleitor_id = $2',
        values: [eleicao_id, eleitor_id]
    };

    try {
        const res = await pool.query(query.text, query.values);
        return res.rows.length > 0;
    }
    catch (error) {
        console.error(error);
        return false;
    }
}

export async function verificarCandidatoExiste(numero) {
    const query = {
        text: 'SELECT * FROM candidato WHERE numero = $1',
        values: [numero]
    };

    try {
        const res = await pool.query(query.text, query.values);
        return res.rows.length > 0;
    } catch (error) {
        console.error(error);
        return false;
    }
}