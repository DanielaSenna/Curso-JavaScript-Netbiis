import { EleitorValidator } from '../validators/EleitorValidator.js';

export function validateEleitor(req, res, next) {
    const { error } = EleitorValidator.validate(req.body);

    if (error) {
        // Retorna um erro se a validação falhar
        return res.status(400).json({ message: error.details[0].message });
    }
    
    // Se a validação for bem-sucedida, passa para o próximo middleware ou controller
    next();
}