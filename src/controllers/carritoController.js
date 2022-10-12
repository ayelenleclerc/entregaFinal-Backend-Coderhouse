const { v4: uuid } = require("uuid");
const carritoService = require("../services/carritoService.js");

const getAllCarrito = (req, res) => {
  try {
    const allCarritos = carritoService.getAllCarrito();
    res.send({ status: "OK", data: allCarritos });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getCarritoById = (req, res) => {
  const {
    params: { carritoId },
  } = req;
  if (!carritoId) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "El parámetro ':carritoId' no puede estar vacio" },
    });
  }
  try {
    const carrito = carritoService.getCarritoById(carritoId);
    res.send({ status: "OK", data: carrito });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const createNewCarrito = (req, res) => {
  const { body } = req;
  if (!body.user) {
    return;
  }

  const newCarrito = {
    id: uuid(),
    timestamp: Date.now(),
    user: body.user,
    products: {
      name: body.name,
      description: body.description,
      code: body.code,
      img: body.img,
      price: body.price,
      stock: body.stock,
    },
  };
  try {
    const createdCarrito = carritoService.createNewCarrito(newCarrito);
    res.status(201).send({ status: "ok", data: createdCarrito });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const updateCarrito = (req, res) => {
  const {
    body,
    params: { carritoId },
  } = req;

  if (!carritoId) {
    req.status(400).send({
      status: "FAILED",
      data: { error: "El parámetro ':carritoId' no puede estar vacio" },
    });
  }
  try {
    const updateCarrito = carritoService.updateCarrito(carritoId, body);
    res.send({ status: "ok", data: updateCarrito });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const deleteCarrito = (req, res) => {
  const {
    params: { carritoId },
  } = req;

  if (!carritoId) {
    req.status(400).send({
      status: "FAILED",
      data: { error: "El parámetro ':carritoId' no puede estar vacio" },
    });
  }

  try {
    carritoService.deleteCarrito(carritoId);
    res.status(204).send({ statis: "ok" });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  getAllCarrito,
  getCarritoById,
  createNewCarrito,
  updateCarrito,
  deleteCarrito,
};
