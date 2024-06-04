const express = require('express');
const {
	sendUsuarios,
	sendReservas,
	deleteUsers,
	deleteReservas,
	editUsers,
	editReservas,
} = require('../controllers/adminControllers');
const validarJWT = require('../middleware/JWTValidator');

const AdminRouter = express.Router();

//Aqui manejamos todas las peticiones de la adminPage

AdminRouter.get('/sendUsers', validarJWT, sendUsuarios); //Peticion get para enviar los usuarios al front

AdminRouter.get('/sendReservas', validarJWT, sendReservas); //Peticion get para enviar las reservas al front

AdminRouter.delete('/deleteUsers/:_id', validarJWT, deleteUsers); // Peticion delete para eliminar usuarios de la base de datos

AdminRouter.delete('/deleteReservas/:_id', validarJWT, deleteReservas); // Peticion delete para eliminar reservas de la base de datos

AdminRouter.put('/editReservas', validarJWT, editReservas); // Peticion put para editar datos de las reservas en la base de datos

module.exports = AdminRouter;
