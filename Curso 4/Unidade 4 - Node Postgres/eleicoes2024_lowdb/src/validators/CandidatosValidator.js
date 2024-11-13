import Joi from 'joi';

export const CandidatosValidator = Joi.object({
    nome: Joi.string().required(),
    numero: Joi.number().required(),
    partido: Joi.string().required()
})


