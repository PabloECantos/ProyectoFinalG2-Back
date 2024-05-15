const express = require('express');
const {
	sendUsuarios,
	sendReservas,
	deleteUsers,
	deleteReservas,
} = require('../controllers/adminControllers');

const AdminRouter = express.Router();

//Aqui manejamos todas las peticiones de la adminPage

AdminRouter.get('/pedirUsers', sendUsuarios); //Peticion get para enviar los usuarios al front

AdminRouter.get('/pedirReservas', sendReservas); //Peticion get para enviar las reservas al front

AdminRouter.delete('/deleteUsers', deleteUsers); // Peticion delete para eliminar usuarios de la base de datos

AdminRouter.delete('/deleteReservas', deleteReservas); // Peticion delete para eliminar reservas de la base de datos

module.exports = AdminRouter;
