const express = require('express');
const { saveReservas, sendReservas } = require('../controllers/reservasControllers');
const reservasRouter = express.Router();

//Aqui manejamos todas las peticiones de las reservas

reservasRouter.post('/saveReservas', saveReservas); //Peticion post para guardar las reservas en la base de datos

reservasRouter.get('/sendReservas', sendReservas); 

module.exports = reservasRouter;
