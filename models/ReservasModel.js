const { Schema, model } = require('mongoose');

const ReservasSchema = Schema({
	name: {
		type: String,
		required: true,
	},
	quantity: {
		type: Number,
		required: true,
	},
	date: {
		type: Date,
		required: true,
	},

	rol: {
		type: String,
		default: 'usuario',
	},
}); //Esquema de las reservas COMPLETAR

module.exports = model('ReservasClientes', ReservasSchema);
