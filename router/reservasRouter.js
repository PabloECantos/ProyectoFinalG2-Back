const express = require("express");
const {
  saveReservas,
  sendReservas,
} = require("../controllers/reservasControllers");
const reservasRouter = express.Router();

reservasRouter.post("/saveReservas", saveReservas);

reservasRouter.get("/sendReservas", sendReservas);

module.exports = reservasRouter;
