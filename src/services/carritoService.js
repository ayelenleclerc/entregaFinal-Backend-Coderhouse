const Carrito = require("../database/Carrito.js");

const getAllCarrito = () => {
  const allCarritos = Carrito.getAllCarrito();
  return allCarritos;
};
const getCarritoById = (id) => {
  const Carrito = Carrito.getCarritoById(id);
  return Carrito;
};
const createNewCarrito = (newCarrito) => {
  const createdCarrito = Carrito.createNewCarrito(newCarrito);
  return createdCarrito;
};

const updateCarrito = (id, changes) => {
  const updateCarrito = Carrito.updateCarrito(id, changes);
  return updateCarrito;
};
const deleteCarrito = (id) => {
  Carrito.deleteCarrito(id);
  return;
};

const createProduct = (id, newProduct) => {
  const newProduct = Carrito.createProduct(id, newProduct);
  return newProduct;
};

const deleteProduct = (id, id_prod) => {
  Carrito.deleteProduct(id, id_prod);
  return;
};

module.exports = {
  getAllCarrito,
  getCarritoById,
  createNewCarrito,
  updateCarrito,
  deleteCarrito,
  createProduct,
  deleteProduct,
};
