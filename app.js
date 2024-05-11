const express = require('express');
const dbConnection = require('./database/config');
require('dotenv').config();

dbConnection(); //Conexion con la base de datos
const app = express();
const cors = require('cors');

app.listen(process.env.PORT, () => {
	console.log(`Ejecutandose en el puerto ${process.env.PORT}`); //Levantamos nuestro servidor
});

app.use(cors()); //Ayuda para las peticiones HTTPS

app.use('/admin', require('./router/adminRouter')); //Rutas para el admin

app.use('/reservas', require('./router/reservasRouter')); //Rutas para las reservas
