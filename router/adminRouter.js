const express = require('express');
const {
	sendUsuarios,
	sendReservas,
	deleteUsers,
	deleteReservas,
	editUsers,
	editReservas,
} = require('../controllers/adminControllers');

const AdminRouter = express.Router();

//Aqui manejamos todas las peticiones de la adminPage

AdminRouter.get('/pedirUsers', sendUsuarios); //Peticion get para enviar los usuarios al front

AdminRouter.get('/pedirReservas', sendReservas); //Peticion get para enviar las reservas al front

AdminRouter.delete('/deleteUsers', deleteUsers); // Peticion delete para eliminar usuarios de la base de datos

AdminRouter.delete('/deleteReservas', deleteReservas); // Peticion delete para eliminar reservas de la base de datos

AdminRouter.put('/editUsers', editUsers); // Peticion put para editar datos de usuarios en la base de datos

AdminRouter.put('/editReservas', editReservas); // Peticion put para editar datos de las reservas en la base de datos

module.exports = AdminRouter;
