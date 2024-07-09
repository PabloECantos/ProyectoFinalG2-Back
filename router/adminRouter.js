const express = require("express");
const {
  sendUsuarios,
  sendReservas,
  deleteUsers,
  deleteReservas,
  editReservas,
} = require("../controllers/adminControllers");
const validarJWT = require("../middleware/JWTValidator");

const AdminRouter = express.Router();

AdminRouter.get("/sendUsers", validarJWT, sendUsuarios);

AdminRouter.get("/sendReservas", validarJWT, sendReservas);

AdminRouter.delete("/deleteUsers/:id", validarJWT, deleteUsers);

AdminRouter.delete("/deleteReservas/:id", validarJWT, deleteReservas);

AdminRouter.put("/editReservas", validarJWT, editReservas);

module.exports = AdminRouter;
