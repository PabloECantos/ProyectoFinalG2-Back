// Aqui manejaremos las autenticaciones de la adminPage

const sendUsuarios = async (req, res) => {
	try {
		const listUsers = await Usuarios.find();

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
