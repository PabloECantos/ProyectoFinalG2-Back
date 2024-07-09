const express = require("express");
const app = express();
const cors = require("cors");
const dbConnection = require("./database/config");
require("dotenv").config();

app.use(express.json());

app.use(cors());

app.use("/auth", require("./router/reservasRouter"));

app.use("/user", require("./router/userRouter"));

app.use("/admin", require("./router/adminRouter"));

app.use("/reservas", require("./router/reservasRouter"));

dbConnection();

app.listen(process.env.PORT, () => {
  console.log(`Ejecutandose en el puerto ${process.env.PORT}`);
});
