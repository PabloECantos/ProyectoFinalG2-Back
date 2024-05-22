const express = require('express');
const dbConnection = require('./database/config');
const cors = require('cors');
const app = express();
require('dotenv').config();

app.use(express.json());

app.use(cors());

app.use('/auth', require('./router/reservasRouter'));

dbConnection();

app.listen(process.env.PORT, () => {
	console.log(`ejecutandose en el puertos ${process.env.PORT}`);
});
