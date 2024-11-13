import Joi from "joi";

export const EleitorValidator = Joi.object({
    nome: Joi.string().required(),
    cpf: Joi.number().required(),
    senha: Joi.number().required()
})
