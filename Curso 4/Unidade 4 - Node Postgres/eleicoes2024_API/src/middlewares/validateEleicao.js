import { EleicaoValidator } from '../validators/EleicaoValidator.js';
import AppError from '../errors/AppError.js';

export function validateEleicao(req, res, next) {
    const { error } = EleicaoValidator.validate(req.body);

    if (error) {
        next(new AppError(error.details[0].message, 400))
    }
    return next()
}