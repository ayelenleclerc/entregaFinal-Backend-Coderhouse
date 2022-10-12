const DB = require("./data.json");
const { saveDb } = require("./utils.js");

const getAllProducts = () => {
  return DB;
};

const getProductById = (productId) => {
  const product = DB.find((product) => product.id === productId);

  if (!product) {
    return;
  }

  return product;
};

const createNewProduct = (newProduct) => {
  const isAlreadyAdded =
    DB.findIndex((product) => product.name === newProduct.name) > -1;
  if (isAlreadyAdded) {
    return;
  }
  DB.push(newProduct);
  saveDb(DB);
  return newProduct;
};
const updateProduct = (productId, changes) => {
  const indexForUpdate = DB.findIndex((product) => product.id === productId);

  if (indexForUpdate === -1) {
    return;
  }
  const updatedProduct = {
    ...DB[indexForUpdate],
    ...changes,
    timestamp: Date.now(),
  };
  DB[indexForUpdate] = updatedProduct;
  saveDb(DB);
  return updatedProduct;
};

const deleteProduct = (productId) => {
  const indexForDelete = DB.findIndex((product) => product.id === productId);

  if (indexForDelete === -1) {
    return;
  }

  DB.splice(indexForDelete, 1);
  saveDb(DB);
};

module.exports = {
  getAllProducts,
  getProductById,
  createNewProduct,
  updateProduct,
  deleteProduct,
};
