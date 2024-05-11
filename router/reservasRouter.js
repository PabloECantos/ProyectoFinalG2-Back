const express = require('express');
const { saveReservas } = require('../controllers/reservasControllers');

const reservasRouter = express.Router();

//Aqui manejamos todas las peticiones de las reservas

reservasRouter.post('/saveReservas', saveReservas); //Peticion post para guardar las reservas en la base de datos

module.exports = reservasRouter;
