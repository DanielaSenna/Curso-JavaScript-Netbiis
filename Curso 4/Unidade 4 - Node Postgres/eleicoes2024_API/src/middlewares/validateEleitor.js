import { EleitorValidator } from '../validators/EleitorValidator.js';
import AppError from '../errors/AppError.js';

export function validateEleitor(req, res, next) {
    const { error } = EleitorValidator.validate(req.body);

    if (error) {
        next(new AppError(error.details[0].message, 400))
    }
    return next()
}