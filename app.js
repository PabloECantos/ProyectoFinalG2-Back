const express = require('express');

const app = express();
const cors = require('cors');
const dbConnection = require('./database/config');
require('dotenv').config();

app.use(express.json());

app.use(cors()); //Ayuda para las peticiones HTTPS

app.use('/user', require('./router/userRouter'))

app.use('/admin', require('./router/adminRouter')); //Rutas para el admin

app.use('/reservas', require('./router/reservasRouter')); //Rutas para las reservas

dbConnection(); //Conexion con la base de datos

app.listen(process.env.PORT, () => {
	console.log(`Ejecutandose en el puerto ${process.env.PORT}`); //Levantamos nuestro servidor
});