const express = require('express');
const { sendUsuarios } = require('../controllers/adminControllers');

const AdminRouter = express.Router();

//Aqui manejamos todas las peticiones de la adminPage

AdminRouter.get('/pedirUsers', sendUsuarios); //Peticion get para enviar los usuarios al front

module.exports = AdminRouter;
