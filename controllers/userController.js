const Usuario = require('../models/userSchema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const loginUsuarios = async (req, res) => {
    const { mail, password } = req.body
    const userObject = await Usuario.findOne({ mail:mail })
    const isAdmin = userObject.isAdmin
    if (!userObject) {
        return res.status(401).json({ msg: "Combinacion de usuario y contraseña incorrectos", type: "error" })
    } else if ((await bcrypt.compare(password, userObject.password)) == false) {
        return res.status(401).json({ msg: "Combinacion de usuario y contraseña incorrectos", type: "error" })
    }
    //Se crea payload del usuario
    const payload = { name: userObject.mail, id: userObject._id, rol: userObject.userType }
    const token = jwt.sign(payload, process.env.SECRET_KEY, {
        expiresIn: '30m'
    })
    return res.status(200).json({ msg: "Usuario Logueado correctamente", type: "success", token,isAdmin})
};

const registrarUsuarios = async (req, res) => {
    const { mail, password } = req.body
    let User = await Usuario.findOne({ mail: mail })
    //validaciones
    if (!mail || !password) {
        return res.status(400).json({ msg: "Los campos no deben estar vacios", type: "error" })
    } else if (User) {
        return res.status(400).json({ msg: "El usuario ya se encuentra registrado", type: "error" })
    } else {
        User = new Usuario(req.body)
        const salt = bcrypt.genSaltSync(10);
        User.password = bcrypt.hashSync(password, salt);
        try {
            await User.save()
            return res.status(201).json({
                msg: "Usuario creado correctamente",
                type: "success"
            })
        } catch (error) {
            return res.status(500).json({ msg: "Error interno del servidor", type: "error" });
        }
    }
};

module.exports={loginUsuarios,registrarUsuarios}