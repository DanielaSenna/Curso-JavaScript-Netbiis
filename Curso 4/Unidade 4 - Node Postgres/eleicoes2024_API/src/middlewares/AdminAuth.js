export function AdminAuth(req, res, next) {
    if (!req.eleitor || !req.eleitor.perfil) {
        return res.status(401).json({ message: "Unauthorized access" });
    }
    
    if (req.eleitor.perfil !== 'admin') {
        return res.status(403).json({ message: "Forbidden" });
    }
    
    next();
}