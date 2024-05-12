// Aqui manejaremos las autenticaciones de la adminPage

const UsersModel = require('../models/UsersModel'); //Importo el modelo de usuarios

const sendUsuarios = async (req, res) => {
	try {
		const listUsers = await UsersModel.find();

		res.status(200).json({
			listUsers,
		});
	} catch (error) {
		res.status(500).json({
			msg: 'Por favor comunicarse con un administrador',
		});
	}
};

module.exports = {
	sendUsuarios,
};
