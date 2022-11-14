const express = require("express");
const errorMiddleware = require("./middleware/error.middleware");
const apiRoutes = require("./routers/app.routes");

const app = express();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//Middleware del error
app.use(errorMiddleware);

//Routes
app.use("/api", apiRoutes);

module.exports = app;
