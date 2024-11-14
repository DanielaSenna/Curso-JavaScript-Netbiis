import Joi from "joi";

export const EleitorValidator = Joi.object({
    nome: Joi.string().required(),
    cpf: Joi.string().pattern(/^\d{11}$/).required(),
    senha: Joi.string().required(),
    perfil: Joi.number().valid(1, 2).required()
})

export const atualizaEleitorSchema = Joi.object({
    nome: Joi.string().required(),
    cpf: Joi.string().pattern(/^\d{11}$/).required()
})