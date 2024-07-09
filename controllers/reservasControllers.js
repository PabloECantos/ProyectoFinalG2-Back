const Reservas = require("../models/ReservasModel");

const saveReservas = async (req, res) => {
  const { name, tiempo, cant, phone, email, comment } = req.body;

  console.log(name);
  console.log(cant);
  console.log(tiempo);
  console.log(phone);
  console.log(email);
  console.log(comment);

  try {
    let nuevaReserva = await Reservas.find({ tiempo });
    let CantidadDelDia = nuevaReserva.length;

    if (CantidadDelDia === 8) {
      return res
        .status(400)
        .json("El horario no esta disponible para esa fecha");
    }

    nuevaReserva = new Reservas(req.body);
    await nuevaReserva.save();
    return res.status(201).send("Reserva creada con éxito");
  } catch (error) {
    return res
      .status(500)
      .send("Comunicarse con un administrador" + error.message);
  }
};

const sendReservas = async (req, res) => {
  console.log("hola mundo");
};

module.exports = {
  saveReservas,
  sendReservas,
};
