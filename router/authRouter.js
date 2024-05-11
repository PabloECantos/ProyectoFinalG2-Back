//Crear Reserva

// app.get('/informacion', (req, res) => {
// 	res.send('Peticion get exitosa');
// });

// app.put('/informacion', (req, res) => {
// 	res.send('Peticion get exitosa');
// });

// app.post('/crearReserva', (req, res) => {
// 	const { name, time, site } = req.body;

// 	if (name === '' || !time || !site) {
// 		return res.send('Todos los campos son obligatorios');
// 	}
// 	res.send('Reserva creada exitosamente');
// });

// app.delete('/eliminar', (req, res) => {
// 	res.send('Eliminadooo');
// });

const express = require('express');
const routerAuth = express.Router();

routerAuth.post('/crearReserva', (req, res) => {
	res.send('Reserva creada');
});

routerAuth.post('/reservas', (req, res) => {
	res.json({
		msg: 'Reservas de clientes',
	});
});
//forma de exportar en node
module.exports = routerAuth;
