import Joi from "joi";

export const EleicaoValidator = Joi.object({
    nome: Joi.string().required(),
    descricao: Joi.string().required()
})
