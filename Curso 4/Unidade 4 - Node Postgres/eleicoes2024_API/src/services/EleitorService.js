import * as EleitorRepository from "../repositories/EleitorRepository.js"
import AppError from "../errors/AppError.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';



const {compare, hash} = bcrypt;

// PEGA A LISTA DE ELEITOR
export async function listarEleitor(){
    const result = await EleitorRepository.listarEleitor();
    return result;
}

// BUSCA UM ELEITOR PELO ID
export async function buscaEleitorPorId(id) {
    const result = await EleitorRepository.buscaEleitorPorId(id);
    if (!result) {
        throw new AppError('Eleitor Não Encontrado', 400);
    }
    return result;
}

// CRIA UM NOVO ELEITOR
export async function criaEleitor(eleitor) {
    const eleitorExistente = await EleitorRepository.obterEleitorPorCpf(eleitor.cpf);
    if (eleitorExistente) {
        throw new AppError('CPF já Cadastrado', 400);
    }
    const hashSenha = await hash(eleitor.senha, 10)
    eleitor.senha = hashSenha;
    return await EleitorRepository.criaEleitor(eleitor);
}

// ATUALIZA OS DADOS DE UM ELEITOR
export async function atualizaEleitor(id, eleitor) {
    const eleitorExistente = await EleitorRepository.buscaEleitorPorId(id);
    if (!eleitorExistente) {
        throw new AppError('Id de Eleitor Não Encontrado', 400);
    }
    // Atualizar apenas os campos permitidos
    const eleitorAtualizado = {
        nome: eleitor.nome,
        cpf: eleitor.cpf
    };
    const result = await EleitorRepository.atualizaEleitor(id, eleitorAtualizado);
    return result;
}

// EXCLUI UM ELEITOR
export async function deleteEleitor(id) {
    const eleitorExistente = await EleitorRepository.buscaEleitorPorId(id);
    if (!eleitorExistente) {
        throw new AppError('Id de Eleitor Não Encontrado', 400);
    }
    await EleitorRepository.deleteEleitor(id);
}

export async function login(loginReq) {
    const eleitor = await EleitorRepository.obterEleitorPorCpf(loginReq.cpf);
    if(!eleitor){
        throw new AppError('CPF ou senha Incorretos', 400);
    }
    const senhaCorreta = await compare(loginReq.senha, eleitor.senha);
    if(!senhaCorreta){
        throw new AppError('CPF ou Senha Incorretos', 400); 
    }
   
    const token = gerarToken({id: eleitor.id, nome: eleitor.nome, cpf: eleitor.cpf});
    return {token};
}

function gerarToken(data){
    return jwt.sign(data, process.env.JWT_SECRET, {expiresIn: '1h'});
}

export async function atualizaSenhaEleitor(id, senhaAntiga, novaSenha) {
    const senhaAtual = await EleitorRepository.buscaSenhaEleitorPorId(id);
    if (!senhaAtual) {
        throw new AppError('Id de Eleitor Não Encontrado', 401);
    }

    const senhaCorreta = await bcrypt.compare(senhaAntiga, senhaAtual);
    if (!senhaCorreta) {
        throw new AppError('Senha antiga incorreta', 401);
    }

    const novaSenhaHash = await bcrypt.hash(novaSenha, 10);
    return await EleitorRepository.atualizaSenhaEleitor(id, novaSenhaHash);
}