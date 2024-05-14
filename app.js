const express = require('express');
const dbConnection = require('./database/config');
const app = express();
require('dotenv').config();

app.use(express.json());

app.use('/auth', require('./router/reservasRouter'));

dbConnection();

app.listen(process.env.PORT, () => {
	console.log(`ejecutandose en el puertos ${process.env.PORT}`);
});
