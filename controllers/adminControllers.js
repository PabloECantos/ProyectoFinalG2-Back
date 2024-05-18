// Aqui manejaremos las autenticaciones de la adminPage

const ReservasModel = require('../models/ReservasModel');
const UsersModel = require('../models/UsersModel'); //Importo el modelo de usuarios

const sendUsuarios = async (req, res) => {
	try {
		const listUsers = await UsersModel.find();

		res.status(200).json({
			//Envio la lista de usuarios
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
		const listReservas = await ReservasModel.find();

		res.status(200).json({
			//Envio la lista de reservas
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

module.exports = {
	sendUsuarios,
	sendReservas,
	deleteUsers,
	deleteReservas,
};
