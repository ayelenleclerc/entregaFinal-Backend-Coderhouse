const express = require("express");
const errorMiddleware = require("./middlewares/error.middleware.js");
const apiRoutes = require("../segundaEntregaOLD/routers/app.routers");

const app = express();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use("/api", apiRoutes);

//Middleware del error
app.use(errorMiddleware);

module.exports = app;
