const productService = require("../services/productService.js");

const getAllProducts = (req, res) => {
  const getAllProducts = productService.getAllProducts();
  res.send({ status: "OK", data: getAllProducts });
};

const getProductById = (req, res) => {
  const getProductById = productService.getProductById(req.params.productId);
  res.send(`get products ${req.params.productId}`);
};

const createProduct = (req, res) => {
  const createdProduct = productService.createNewProduct(req.params.productId);
  res.send(`create product ${req.params.productId}`);
};

const updateProduct = (req, res) => {
  const updateProduct = productService.updateProduct(req.params.productId);
  res.send(`update product ${req.params.productId}`, updateProduct);
};

const deleteProduct = (req, res) => {
  const deleteProduct = productService.deleteProduct(req.params.productId);
  res.send(`producto eliminado`);
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
