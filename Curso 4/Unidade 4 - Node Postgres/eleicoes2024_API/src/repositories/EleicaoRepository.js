import pool from "../config/dbConfig.js";

// PEGA A LISTA DE ELEIÇÃO
export async function listarEleicao(){
    const result = await pool.query('SELECT * FROM eleicao');
    return result.rows;
}

// BUSCA UMA ELEIÇÃO PELO ID
export async function buscaEleicaoPorId(id) {
    const result = await pool.query('SELECT * FROM eleicao WHERE id = $1', [id]);
    return result.rows[0];
}


// CRIA UMA NOVA ELEIÇÃO
export async function criaEleicao(eleicao) {
   
    try {
        // Verifica se o eleitor com o mesmo nome ou cpf já existe
        const { rows } = await pool.query(
            'SELECT * FROM eleicao WHERE nome = $1',
            [eleicao.nome]
        );
       
        // Se já existir, retorna uma mensagem sem lançar erro
        if (rows.length > 0) {
            return { message: 'Já existe um eleicao com este nome' };
        }

        // Se não existir, insere o novo eleitor
        const result = await pool.query(
            'INSERT INTO eleicao (nome, data, descricao) VALUES ($1, NOW(), $2) RETURNING *',
            [eleicao.nome, eleicao.descricao]
        );

        return result.rows[0];
    } catch (error) {
        // Lança um erro em caso de problemas com a consulta ou inserção
        throw new Error(`Erro ao criar a eleicao: ${error.message}`);
    }
}

// ATUALIZA OS DADOS DE UMA ELEIÇÃO
export async function atualizaEleicao(id, eleicao) {
    const result = await pool.query(
        'UPDATE eleicao SET nome = $1, descricao = $2 WHERE id = $3 RETURNING *', 
        [eleicao.nome, eleicao.descricao, id]);
    return result.rows[0];
}

// EXCLUI UMA ELEIÇÃO
export async function deleteEleicao(id) {
    await pool.query('DELETE FROM eleicao WHERE id = $1', [id]);
}

// RESUMO ELEICAO
export async function resumoEleicao(id) {
    const result = await pool.query("SELECT * FROM vw_apuracao_final WHERE eleicao_id = $1", [id]);
    return result.rows;
}