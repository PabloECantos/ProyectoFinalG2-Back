const express = require('express');
require('dotenv').config();

const app = express();

app.listen(process.env.PORT, () => {
	console.log(`Ejecutandose en el puerto ${process.env.PORT}`);
});

app.use('/admin', require('./router/adminRouter'));

app.use('/reservas', require('./router/reservasRouter'));
