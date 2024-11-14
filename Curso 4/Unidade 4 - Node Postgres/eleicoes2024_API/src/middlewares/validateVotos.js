import { VotosValidator } from '../validators/VotosValidator.js';
import AppError from '../errors/AppError.js';

export function validateVotos(req, res, next) {
    const { error } = VotosValidator.validate(req.body);

    if (error) {
        next(new AppError(error.details[0].message, 400))
    }
    return next()
}