const userRouter = require('express').Router();
const {
	loginUsuarios,
	registrarUsuarios,
} = require('../controllers/userController');

userRouter.post('/login', loginUsuarios); //Peticion post para loguear los usuarios

userRouter.post('/register', registrarUsuarios); //Peticion post para registrar a los usuarios

module.exports = userRouter;
