import Joi from "joi";

export const LoginValidator = Joi.object({
    cpf: Joi.number().required(),
    senha: Joi.string().required()
});