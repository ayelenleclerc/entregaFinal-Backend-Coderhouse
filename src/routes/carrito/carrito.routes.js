const express = require("express");
const router = express.Router();
const carritoController = require("../../controllers/carritoController.js");

router.get("/", carritoController.getAllCarrito);

router.get("/:carritoId", carritoController.getCarritoById);

router.put("/:carritoId", carritoController.updateCarrito);

router.post("/", carritoController.createNewCarrito);

router.delete("/:carritoId", carritoController.deleteCarrito);

module.exports = router;
