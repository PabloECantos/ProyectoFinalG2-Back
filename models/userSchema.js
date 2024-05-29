const { Schema, model } = require('mongoose');

const userModel = new Schema({
	nombre: {
		type: String,
		required: true,
	},

	apellido: {
		type: String,
		required: true,
	},

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
});

module.exports = model('Usuario', userModel);
