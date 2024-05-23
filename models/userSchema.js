const { Schema, model } = require('mongoose');

const userModel = new Schema({
	mail: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	isAdmin: {
		type: Boolean,
		default: false,
	},

	nombre: {
		type: String,
		required: true,
	},

	apellido: {
		type: String,
		required: true,
	},
});

module.exports = model('Usuario', userModel);
