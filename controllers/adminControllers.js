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

module.exports = {
	sendUsuarios,
	sendReservas,
};
