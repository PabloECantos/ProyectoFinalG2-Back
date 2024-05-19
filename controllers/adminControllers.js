// Aqui manejaremos las autenticaciones de la adminPage

const ReservasModel = require('../models/ReservasModel'); //Importo el modelo de las reservas
const UsersModel = require('../models/UsersModel'); //Importo el modelo de usuarios

const sendUsuarios = async (req, res) => {
	try {
		//Busco todos los usuarios de la base de datos
		const listUsers = await UsersModel.find();

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
		const UsuarioEliminar = await UsersModel.findById(req.params.id);

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

const editUsers = async (req, res) => {
	try {
		const userEdit = await UsersModel.findById(req.body._id);

		if (!userEdit) {
			return res.status(400).json({
				msg: 'No existe ningun Usuario con este ID',
			});
		}
		await UsersModel.findByIdAndUpdate(req.body._id, req.body);
		res.status(200).json({
			msg: 'Usuario Editado Correctamente',
		});
	} catch (error) {
		res.status(500).json({
			msg: 'Por favor comunicarse con un administrador',
		});
	}
};

const editReservas = async (req, res) => {};

module.exports = {
	sendUsuarios,
	sendReservas,
	deleteUsers,
	deleteReservas,
	editUsers,
	editReservas,
};
