import { atualizaEleitorSchema } from '../validators/EleitorValidator.js';
import AppError from '../errors/AppError.js';

export function validateEleitorUpdate(req, res, next) {
    const { error } = atualizaEleitorSchema.validate(req.body);


    if (error) {
        next(new AppError(error.details[0].message, 400))
    }
    return next()
}