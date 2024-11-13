import Joi from "joi";

export const VotosValidator = Joi.object({
    eleitor_id: Joi.number().required(),
    eleicao_id: Joi.number().required(),
    numero: Joi.number().required()
});
