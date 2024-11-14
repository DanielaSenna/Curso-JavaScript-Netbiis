import { CandidatosValidator } from '../validators/CandidatosValidator.js';
import AppError from '../errors/AppError.js';

export function validateCandidato(req, res, next) {
    const { error } = CandidatosValidator.validate(req.body);

    if (error) {
        next(new AppError(error.details[0].message, 400))
    }
    return next()
}