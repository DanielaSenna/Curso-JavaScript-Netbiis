import { LoginValidator } from '../validators/LoginValidator.js';
import AppError from '../errors/AppError.js';

export function validateLogin(req, res, next) {
    const { error } = LoginValidator.validate(req.body);

    if (error) {
        next(new AppError(error.details[0].message, 400))
    }
    return next()
}