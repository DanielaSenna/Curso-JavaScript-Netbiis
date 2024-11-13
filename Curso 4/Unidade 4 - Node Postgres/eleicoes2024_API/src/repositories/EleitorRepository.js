import pool from "../config/dbConfig.js";

// PEGA A LISTA DE ELEITOR
export async function listarEleitor(){
    const result = await pool.query('SELECT * FROM eleitor');
    return result.rows;
}

// BUSCA UM ELEITOR PELO ID
export async function buscaEleitorPorId(id) {
    const result = await pool.query('SELECT * FROM eleitor WHERE id = $1', [id]);
    return result.rows[0];
}


// CRIA UM NOVO ELEITOR
export async function criaEleitor(eleitor) {
   
    try {
        // Verifica se o eleitor com o mesmo nome ou cpf já existe
        const { rows } = await pool.query(
            'SELECT * FROM eleitor WHERE cpf = $1',
            [eleitor.cpf]
        );
       
        // Se já existir, retorna uma mensagem sem lançar erro
        if (rows.length > 0) {
            return { message: 'Já existe um eleitor com este cpf' };
        }

        // Se não existir, insere o novo eleitor
        const result = await pool.query(
            'INSERT INTO eleitor (nome, cpf, senha) VALUES ($1, $2, $3) RETURNING *',
            [eleitor.nome, eleitor.cpf, eleitor.senha]
        );

        return result.rows[0];
    } catch (error) {
        // Lança um erro em caso de problemas com a consulta ou inserção
        throw new Error(`Erro ao criar o eleitor: ${error.message}`);
    }
}

// ATUALIZA OS DADOS DE UM ELEITOR
export async function atualizaEleitor(id, eleitor) {
    const result = await pool.query(
        'UPDATE eleitor SET nome = $1, cpf = $2, senha = $3 WHERE id = $4 RETURNING *', 
        [eleitor.nome, eleitor.cpf, eleitor.senha, id]);
    return result.rows[0];
}

// EXCLUI UM ELEITOR
export async function deleteEleitor(id) {
    await pool.query('DELETE FROM eleitor WHERE id = $1', [id]);
}
