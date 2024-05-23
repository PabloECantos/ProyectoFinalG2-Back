//Aqui manejaremos las autenticaciones de la  pagina de reservas
const Reservas = require('../models/ReservasModel');
const ahora = new Date();

const opciones = {
	year: 'numeric',
	month: '2-digit',
	day: '2-digit',
	hour12: false,
};

const timepoMoment = new Intl.DateTimeFormat('es-AR', opciones).format(ahora);

const combineDateAndTime = (date, time) => {
	if (typeof time !== 'string' || !time.match(/^\d{2}:\d{2}$/)) {
		throw new Error('Invalid time format. Expected format: hh:mm');
	}

	const [hours, minutes] = time.split(':').map(Number);
	const result = new Date(date);
	result.setHours(hours);
	result.setMinutes(minutes);

	if (isNaN(result.getTime())) {
		throw new Error('Invalid date or time value');
	}

	return result;
};

const sendReservas = async (req, res) => {
	const { time } = req.body;
	if (!time) {
		return res.status(400).send('Time is required');
	}

	let timeAsDate;
	try {
		const currentDate = new Date();
		timeAsDate = combineDateAndTime(currentDate, time);
	} catch (error) {
		return res.status(400).send(`Error processing time: ${error.message}`);
	}

	const opciones = {
		hour: '2-digit',
		minute: '2-digit',
		hour12: false,
	};

	const tiempoMoment = new Intl.DateTimeFormat('es-AR', opciones).format(timeAsDate);
	console.log('Hora formateada:', tiempoMoment);

	const registros = await Reservas.find({});
	for (let i = 0; i < registros.length; i++) {
		const registroTime = registros[i].time;
		const registroTimeFormatted = new Intl.DateTimeFormat('es-AR', opciones).format(
			registroTime
		);

		console.log('Registro', i + 1, 'time:', registroTimeFormatted);

		if (
			registroTime.getHours() === timeAsDate.getHours() &&
			registroTime.getMinutes() === timeAsDate.getMinutes()
		) {
			console.log(
				'Se encontraron registros con el mismo valor de time:',
				registroTimeFormatted
			);
			return false;
		}
	}
	console.log(
		'No se encontraron registros con el mismo valor de time:',
		tiempoMoment
	);
	return true;
};

const saveReservas = async (req, res) => {
	const { name, time, cant, phone, email, comment } = req.body;

	try {
		const compLugar = await sendReservas(req, res);

		if (compLugar) {
			const currentDate = new Date();
			const timeAsDate = combineDateAndTime(currentDate, time);

			const nuevaReserva = new Reservas({
				name,
				time: timeAsDate,
				cant,
				phone,
				email,
				comment,
			});

			await nuevaReserva.save();
			return res.status(201).send('Reserva creada con éxito');
		} else {
			return res.status(400).send('Ya existe una reserva con la misma hora');
		}
	} catch (error) {
		return res.status(500).send('Error al crear la reserva: ' + error.message);
	}
};

module.exports = {
	saveReservas,
	sendReservas,
};
