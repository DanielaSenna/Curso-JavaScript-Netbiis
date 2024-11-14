import pool from "../config/dbConfig.js";

// PEGA A LISTA DE ELEITOR
export async function listarEleitor(){
    const result = await pool.query('SELECT * FROM eleitor');
    return result.rows;
}

// BUSCA UM ELEITOR PELO ID
export async function buscaEleitorPorId(id) {
    const result = await pool.query('SELECT * FROM eleitor WHERE id = $1', [id]);
    return result.rows[0] ?? false;
}

// BUSCA ELEITOR POR CPF
export async function obterEleitorPorCpf(cpf) {
    const result = await pool.query('SELECT * FROM eleitor WHERE cpf = $1', [cpf]);
    return result.rows[0] ?? false;
}

// CRIA UM NOVO ELEITOR
export async function criaEleitor(eleitor) {
    const result = await pool.query(
        'INSERT INTO eleitor (nome, cpf, senha, perfil) VALUES ($1, $2, $3, $4) RETURNING *',
        [eleitor.nome, eleitor.cpf, eleitor.senha, eleitor.perfil || 2]
    );

    return result.rows[0];
}

// ATUALIZA OS DADOS DE UM ELEITOR
export async function atualizaEleitor(id, eleitor) {
    const result = await pool.query(
        'UPDATE eleitor SET nome = $1, cpf = $2 WHERE id = $3 RETURNING *', 
        [eleitor.nome, eleitor.cpf, id]);
    return result.rows[0];
}

// EXCLUI UM ELEITOR
export async function deleteEleitor(id) {
    await pool.query('DELETE FROM eleitor WHERE id = $1', [id]);
}

export async function buscaSenhaEleitorPorId(id) {
    const result = await pool.query('SELECT senha FROM eleitor WHERE id = $1', [id]);
    return result.rows[0]?.senha;
}

export async function atualizaSenhaEleitor(id, novaSenhaHash) {
    const result = await pool.query(
        'UPDATE eleitor SET senha = $1 WHERE id = $2 RETURNING *', 
        [novaSenhaHash, id]
    );
    return result.rows[0];
}