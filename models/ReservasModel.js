const { Schema, model } = require('mongoose');

const ReservasSchema = Schema({
	name: {
		type: String,
		required: true,
	},

	tiempo: {
		type: Date,
		required: true,
	},

	cant: {
		type: String,
		required: true,
	},
	phone: {
		type: Number,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	comment: {
		type: String,
		required: true,
	},

	rol: {
		type: String,
		default: 'usuario',
	},
}); //Esquema de las reservas COMPLETAR

module.exports = model('Reservas', ReservasSchema);
