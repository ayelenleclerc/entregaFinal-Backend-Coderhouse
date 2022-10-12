const Carrito = require("../database/Carrito.js");

const getAllCarrito = () => {
  const allCarritos = Carrito.getAllCarrito();
  return allCarritos;
};
const getCarritoById = (CarritoId) => {
  const Carrito = Carrito.getCarritoById(CarritoId);
  return Carrito;
};
const createNewCarrito = (newCarrito) => {
  const createdCarrito = Carrito.createNewCarrito(newCarrito);
  return createdCarrito;
};

const updateCarrito = (CarritoId, changes) => {
  const updateCarrito = Carrito.updateCarrito(CarritoId, changes);
  return updateCarrito;
};
const deleteCarrito = (CarritoId) => {
  Carrito.deleteCarrito(CarritoId);
  return;
};

module.exports = {
  getAllCarrito,
  getCarritoById,
  createNewCarrito,
  updateCarrito,
  deleteCarrito,
};
