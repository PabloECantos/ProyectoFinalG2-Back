const express = require('express');
const app = express();
require('dotenv').config();
// const dbConnection = require('');
// const cors = require('cors');
// dbConnection();

//Lectura y paseo del body
app.use(express.json());

app.use('/auth', require('./router/authRouter'));

app.listen(process.env.PORT, () => {
	console.log(`Ejecutandose en el puerto ${process.env.PORT}`);
});
