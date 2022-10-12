const DB = require("./data.json");
const { saveDb } = require("./utils.js");

const getAllCarrito = () => {
  return DB.carrito;
};

const getCarritoById = (id) => {
  const carrito = DB.carrito.find((carrito) => carrito.id === id);

  if (!carrito) {
    throw {
      status: 400,
      message: `EL carrito con el id:${id} no existe`,
    };
  }

  return carrito;
};

const createNewCarrito = (newCarrito) => {
  try {
    DB.carrito.push(newCarrito);
    saveDb(DB);
    return newCarrito;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};
const updateCarrito = (id, changes) => {
  const indexForUpdate = DB.carrito.findIndex((carrito) => carrito.id === id);

  if (indexForUpdate === -1) {
    return;
  }
  const updatedCarrito = {
    ...DB.carrito[indexForUpdate],
    ...changes,
    timestamp: Date.now(),
  };
  DB.carrito[indexForUpdate] = updatedCarrito;
  saveDb(DB);
  return updatedCarrito;
};

const deleteCarrito = (id) => {
  const indexForDelete = DB.carrito.findIndex((carrito) => carrito.id === id);

  if (indexForDelete === -1) {
    return;
  }
  DB.carrito.splice(indexForDelete, 1);
  saveDb(DB);
};
const createProduct = (id, newProduct) => {
  const indexProduc = DB.carrito.findIndex((product) => product.id === +id);
  const carrito = DB.carrito.find((product) => product.id === +id);

  //Validamos si el carrito existe por id
  if (indexProduc < 0) {
    return `Número de carrito: '${id}' NO existente!`;
  }

  const nombre = carrito.productos.find(
    (product) => product.nombre === newProduct.nombre
  );

  //varificamos si el producto existe .
  if (nombre) {
    return `Producto con el nombre: '${newProduct.nombre}' existente!`;
  }

  const newProductId = {
    id: carrito.productos.length + 1,
    ...newProduct,
  };

  carrito.productos.push(newProductId);
  DB.carrito[indexProduc] = carrito;
  saveDb(DB);
  return newProductId;
};

const deleteProduct = (id, id_prod) => {
  const indexCarrito = DB.carrito.findIndex((carrito) => carrito.id === +id);
  const indexProduct = DB.carrito[indexCarrito].productos.findIndex(
    (el) => el.id === +id_prod
  );

  if (indexCarrito < 0) return `Número de Carrito: '${id}' NO existe!`;

  if (indexProduct < 0) return `Número de Producto: '${id_prod}' NO existe! `;

  const newListProduct = DB.carrito[indexCarrito].productos.filter(
    (product) => product.id !== indexProduct + 1
  );

  DB.carrito[indexCarrito].productos = newListProduct;
  DB.carrito[indexCarrito].productos.map((el) => (el.id = 1));
  saveDb(DB);
  return newListProduct;
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
