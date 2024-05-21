const userRouter = require('express').Router()
const { loginUsuarios, registrarUsuarios } = require('../controllers/userController');
const validarJWT = require('../middleware/JWTValidator');

userRouter.post('/login',loginUsuarios);
userRouter.post('/register',registrarUsuarios);

module.exports=userRouter