import Joi from 'joi';
import AppError from "../errors/AppError.js"


export function ValidarIdMiddleware(req, res, next){
    try {
        Joi.assert(req.params.id, Joi.number().required());
    } catch (error) {
        next(new AppError('Id Inválido', 400));
    }
    return next();
}