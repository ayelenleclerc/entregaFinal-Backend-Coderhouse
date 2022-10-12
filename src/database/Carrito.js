const DB = require("./data.json");
const { saveDb } = require("./utils.js");

const getAllCarrito = () => {
  return DB.carrito;
};

const getCarritoById = (carritoId) => {
  const carrito = DB.carrito.find((carrito) => carrito.id === carritoId);

  if (!carrito) {
    throw {
      status: 400,
      message: `EL carrito con el id:${carritoId} no existe`,
    };
  }

  return carrito;
};

const createNewCarrito = (newCarrito) => {
  const isAlreadyAdded =
    DB.carrito.findIndex((carrito) => carrito.user === newCarrito.user) > -1;
  if (isAlreadyAdded) {
    throw {
      status: 400,
      message: `EL carrito del usuario:${newCarrito.user} ya existe`,
    };
  }
  try {
    DB.carrito.push(newCarrito);
    saveDb(DB);
    return newCarrito;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};
const updateCarrito = (carritoId, changes) => {
  const indexForUpdate = DB.carrito.findIndex(
    (carrito) => carrito.id === carritoId
  );

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

const deleteCarrito = (carritoId) => {
  const indexForDelete = DB.carrito.findIndex(
    (carrito) => carrito.id === carritoId
  );

  if (indexForDelete === -1) {
    return;
  }

  DB.carrito.splice(indexForDelete, 1);
  saveDb(DB);
};

module.exports = {
  getAllCarrito,
  getCarritoById,
  createNewCarrito,
  updateCarrito,
  deleteCarrito,
};
