//Aqui manejaremos las autenticaciones de la  pagina de reservas
const e = require('cors');
const Reservas = require('../models/ReservasModel');

const sendReservas = async (req, res) => {
	const { time, date } = req.body;
	const tiempoIngresado = new Date(time);
	const registros = await Reservas.find({});
	for (let i = 0; i < registros.length; i++) {
		console.log('Registro', i + 1, 'time:', registros[i].time);

		console.log(
			`TiempoIngresado ${tiempoIngresado} , tiempo en for ${registros[i].time}`
		);
		if (registros.length === 0) {
			return true;
		} else if (tiempoIngresado === registros[i].time) {
			console.log('Se encontraron registros con el mismo valor de time:', registros);
			return false;
		} else {
			console.log('No se encontraron registros');
			return true;
		}
	}
	console.log(registros.length);
};

const saveReservas = async (req, res) => {
	const { name, time, cant, date, phone, email, comment } = req.body;

	const compLugar = await sendReservas(req);

	if (!name || !time || !cant) {
		return res.status(400).json({
			msg: 'Por favor, complete los campos obligatorios',
		});
	}

	try {
		if (compLugar === true) {
			let reserva = new Reservas(req.body);

			await reserva.save();
			return res.status(201).json({
				msg: 'Reserva Registrada',
			});
		} else {
			return res.status(400).json({
				msg: 'El horario que deseas no se encuentra disponible!',
			});
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({
			msg: 'Se ha producido un error',
		});
	}
};

module.exports = {
	saveReservas,
	sendReservas,
};
