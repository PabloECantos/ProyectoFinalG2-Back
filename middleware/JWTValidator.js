const jwt = require('jsonwebtoken')

const validarJWT = (req, res, next) => {
    const token = req.header('TokenJWT')

    if (!token) {
        return res.status(403).json({
            msg: "El usuario no se encuentra autorizado a acceder al recurso",
            type: "error"
        })
    }

    try {
        const body = jwt.verify(token, process.env.SECRET_KEY)
    } catch (error) {
        return res.status(401).json({ msg: "La sesión expiró", type: "error" })
    }

    next()
}


module.exports = validarJWT