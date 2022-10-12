const { v4: uuid } = require("uuid");
const productService = require("../services/productService.js");

const getAllProducts = (req, res) => {
  const allProducts = productService.getAllProducts();
  res.send({ status: "OK", data: allProducts });
};

const getProductById = (req, res) => {
  const {
    params: { productId },
  } = req;
  if (!productId) {
    return;
  }

  const product = productService.getProductById(productId);
  res.send({ status: "OK", data: product });
};

const createNewProduct = (req, res) => {
  const { body } = req;
  if (
    !body.name ||
    !body.description ||
    !body.code ||
    !body.img ||
    !body.price ||
    !body.stock
  ) {
    return;
  }

  const newProduct = {
    id: uuid(),
    timestamp: Date.now(),
    name: body.name,
    description: body.description,
    code: body.code,
    img: body.img,
    price: body.price,
    stock: body.stock,
  };
  const createdProduct = productService.createNewProduct(newProduct);
  res.status(201).send({ status: "ok", data: createdProduct });
};

const updateProduct = (req, res) => {
  const {
    body,
    params: { productId },
  } = req;

  if (!productId) {
    return;
  }
  const updateProduct = productService.updateProduct(productId, body);
  res.send({ status: "ok", data: updateProduct });
};

const deleteProduct = (req, res) => {
  const {
    params: { productId },
  } = req;

  if (!productId) {
    return;
  }
  productService.deleteProduct(productId);
  res.status(204).send({ statis: "ok" });
};

module.exports = {
  getAllProducts,
  getProductById,
  createNewProduct,
  updateProduct,
  deleteProduct,
};
