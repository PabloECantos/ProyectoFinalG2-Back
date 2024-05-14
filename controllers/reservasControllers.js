//Aqui manejaremos las autenticaciones de la  pagina de reservas
const fechaHoraActual = new Date();
const options = {
	timeZone: 'America/Argentina/Buenos_Aires',
	weekday: 'long',
	hour: 'numeric',
	minute: 'numeric',
	day: 'numeric',
	hour12: false,
};
const fechaHoraArgentina = fechaHoraActual.toLocaleString('es-AR', options);

console.log('first');

const reservamesa = require('../models/ReservasModel');

const saveReservas = async (req, res) => {
	const { name, quantity, date } = req.body;

	if (!date || !name || !quantity) {
		return res.status(400).json({
			msg: 'Todos los campos son obligatorios',
		});
	}

	try {
		//comprobamos si hay reservas disponibles
		let r = await reservamesa.find({ date });
		if (r) {
			return res.status(400).json({
				msg: 'Ya esta registrada esta reserva',
			});
		}

		//creamos instancia si no encuentra horario
		r = new reservamesa(req.body);

		// await r.save();

		res.status(201).json({
			msg: 'Funciona',
		});
		//Creamos la instancia

		// if ((fechaHoraActual) => registrarReserva.date) {
		// 	console.log('Hora incorrecta, elige otro horario');

		// 	console.log(fechaHoraActual);
		// 	console.log(registrarReserva);
		// 	res.status(500).json({
		// 		msg: 'Se ha producido un error',
		// 	});
		// } else {
		// 	registrarReserva = new ReservasClientes(req.body);
		// 	//guardamos en base de datos
		// 	await registrarReserva.save();
		// 	res.status(201).json({
		// 		msg: 'Reserva Registrada',
		// 	});
		// }
	} catch (error) {
		res.status(500).json({
			msg: 'Se ha producido un error',
		});
	}
};

module.exports = {
	saveReservas,
};
