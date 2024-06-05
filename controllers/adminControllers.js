// Aqui manejaremos las autenticaciones de la adminPage

const ReservasModel = require('../models/ReservasModel'); //Importo el modelo de las reservas
const userSchema = require('../models/userSchema');

const sendUsuarios = async (req, res) => {
	try {
		//Busco todos los usuarios de la base de datos
		const listUsers = await userSchema.find();

		//Envio la lista de usuarios
		res.status(200).json({
			listUsers,
		});
	} catch (error) {
		res.status(500).json({
			msg: 'Por favor comunicarse con un administrador',
		});
	}
};

const sendReservas = async (req, res) => {
	try {
		//Busco todas las reservas de la base de datos
		const listReservas = await ReservasModel.find();

		//Envio la lista de reservas al front
		res.status(200).json({
			listReservas,
		});
	} catch (error) {
		res.status(500).json({
			msg: 'Por favor comunicarse con un administrador',
		});
	}
};

const deleteUsers = async (req, res) => {
	try {
		//Busco en base de datos si existe un usuario con este ID
		const UsuarioEliminar = await userSchema.findById(req.params.id);
		console.log(UsuarioEliminar);
		//En caso de no existir un usuario con ese ID comunico que no existe
		if (!UsuarioEliminar) {
			return res.status(400).json({
				msg: 'No existe ningun Usuario con este ID',
			});
		}

		// En caso de existir un usuario con ese ID lo borro de la base de datos
		await UsersModel.findByIdAndDelete(req.params.id);

		// Comunico que la accion se realizo con exito
		res.status(200).json({
			msg: 'Usuario Eliminado Correctamente',
		});
	} catch (error) {
		res.status(500).json({
			msg: 'Por favor comunicarse con un administrador',
		});
	}
};

const deleteReservas = async (req, res) => {
	try {
		//Busco en base de datos si existe una reserva con este ID
		const reservasEliminar = await ReservasModel.findById(req.params.id);

		//En caso de no existir una reserva con ese ID comunico que no existe
		if (!reservasEliminar) {
			return res.status(400).json({
				msg: 'No existe ninguna reserva con este ID',
			});
		}

		// En caso de existir una reserva con ese ID lo borro de la base de datos
		await ReservasModel.findByIdAndDelete(req.params.id);

		// Comunico que la accion se realizo con exito
		res.status(200).json({
			msg: 'Reserva Eliminada Correctamente',
		});
	} catch (error) {
		res.status(500).json({
			msg: 'Por favor comunicarse con un administrador',
		});
	}
};

const editReservas = async (req, res) => {
	try {
		//Busco en la base de datos si existe una Reserva con este ID
		const reservaEdit = await ReservasModel.findById(req.body._id);

		//En caso de no existir una Reserva con este ID comunico que no existe
		if (!reservaEdit) {
			return res.status(400).json({
				msg: 'No existe ninguna Reserva con este ID',
			});
		}

		//En caso de si existir en la base de datos lo edito
		await ReservasModel.findByIdAndUpdate(req.body._id, req.body);

		//Comunico que fue editado correctamente
		res.status(200).json({
			msg: 'Reserva Editada Correctamente',
		});
	} catch (error) {
		res.status(500).json({
			msg: 'Por favor comunicarse con un administrador',
		});
	}
};

module.exports = {
	sendUsuarios,
	sendReservas,
	deleteUsers,
	deleteReservas,
	editReservas,
};
