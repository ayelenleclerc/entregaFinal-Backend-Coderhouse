const DB = require("./data.json");
const { saveDb } = require("./utils.js");

const getAllProducts = () => {
  return DB.products;
};

const getProductById = (productId) => {
  const product = DB.products.find((product) => product.id === productId);

  if (!product) {
    throw {
      status: 400,
      message: `EL producto con el id:${productId} no existe`,
    };
  }

  return product;
};

const createNewProduct = (newProduct) => {
  const isAlreadyAdded =
    DB.products.findIndex((product) => product.name === newProduct.name) > -1;
  if (isAlreadyAdded) {
    throw {
      status: 400,
      message: `EL Producto ${newProduct.name} ya existe`,
    };
  }
  try {
    DB.products.push(newProduct);
    saveDb(DB);
    return newProduct;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};
const updateProduct = (productId, changes) => {
  const indexForUpdate = DB.products.findIndex(
    (product) => product.id === productId
  );

  if (indexForUpdate === -1) {
    return;
  }
  const updatedProduct = {
    ...DB.products[indexForUpdate],
    ...changes,
    timestamp: Date.now(),
  };
  DB.products[indexForUpdate] = updatedProduct;
  saveDb(DB);
  return updatedProduct;
};

const deleteProduct = (productId) => {
  const indexForDelete = DB.products.findIndex(
    (product) => product.id === productId
  );

  if (indexForDelete === -1) {
    return;
  }

  DB.products.splice(indexForDelete, 1);
  saveDb(DB);
};

module.exports = {
  getAllProducts,
  getProductById,
  createNewProduct,
  updateProduct,
  deleteProduct,
};
