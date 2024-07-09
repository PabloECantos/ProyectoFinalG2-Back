const ReservasModel = require("../models/ReservasModel");
const userSchema = require("../models/userSchema");

const sendUsuarios = async (req, res) => {
  try {
    const listUsers = await userSchema.find();

    res.status(200).json({
      listUsers,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Por favor comunicarse con un administrador",
    });
  }
};

const sendReservas = async (req, res) => {
  try {
    const listReservas = await ReservasModel.find();

    res.status(200).json({
      listReservas,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Por favor comunicarse con un administrador",
    });
  }
};

const deleteUsers = async (req, res) => {
  try {
    const UsuarioEliminar = await userSchema.findById(req.params.id);

    if (!UsuarioEliminar) {
      return res.status(400).json({
        msg: "No existe ningun Usuario con este ID",
      });
    }

    await userSchema.findByIdAndDelete(req.params.id);

    res.status(200).json({
      msg: "Usuario Eliminado Correctamente",
    });
  } catch (error) {
    res.status(500).json({
      msg: "Por favor comunicarse con un administrador",
    });
  }
};

const deleteReservas = async (req, res) => {
  try {
    const reservasEliminar = await ReservasModel.findById(req.params.id);

    if (!reservasEliminar) {
      return res.status(400).json({
        msg: "No existe ninguna reserva con este ID",
      });
    }

    await ReservasModel.findByIdAndDelete(req.params.id);

    res.status(200).json({
      msg: "Reserva Eliminada Correctamente",
    });
  } catch (error) {
    res.status(500).json({
      msg: "Por favor comunicarse con un administrador",
    });
  }
};

const editReservas = async (req, res) => {
  try {
    const reservaEdit = await ReservasModel.findById(req.body._id);

    if (!reservaEdit) {
      return res.status(400).json({
        msg: "No existe ninguna Reserva con este ID",
      });
    }

    await ReservasModel.findByIdAndUpdate(req.body._id, req.body);

    res.status(200).json({
      msg: "Reserva Editada Correctamente",
    });
  } catch (error) {
    res.status(500).json({
      msg: "Por favor comunicarse con un administrador",
    });
  }
};

module.exports = {
  sendUsuarios,
  sendReservas,
  deleteUsers,
  deleteReservas,
  editReservas,
};
