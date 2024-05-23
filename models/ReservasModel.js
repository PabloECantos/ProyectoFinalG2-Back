const { Schema, model } = require('mongoose');

const ReservasSchema = Schema({
	name: {
		type: String,
		required: true,
	},

	date: {
		type: Date,
		required: false,
	},

	time: {
		type: Date,
		required: true,
	},

	cant: {
		type: Number,
		required: true,
	},
	phone: {
		type: Number,
		required: false,
	},
	email: {
		type: String,
		required: false,
	},
	comment: {
		type: String,
		required: false,
	},

	rol: {
		type: String,
		default: 'usuario',
	},
}); //Esquema de las reservas COMPLETAR

module.exports = model('Reservas', ReservasSchema);
