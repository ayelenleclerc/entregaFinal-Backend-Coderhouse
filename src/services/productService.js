const Products = require("../database/Product.js");

const getAllProducts = () => {
  const allProducts = Products.getAllProducts();
  return allProducts;
};
const getProductById = () => {
  return;
};
const createNewProduct = () => {
  return;
};
const updateProduct = () => {
  return;
};
const deleteProduct = () => {
  return;
};

module.exports = {
  getAllProducts,
  getProductById,
  createNewProduct,
  updateProduct,
  deleteProduct,
};
