const { v4: uuid } = require("uuid");
const productService = require("../services/productService.js");

const getAllProducts = (req, res) => {
  try {
    const allProducts = productService.getAllProducts();
    res.send({ status: "OK", data: allProducts });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getProductById = (req, res) => {
  const {
    params: { productId },
  } = req;
  if (!productId) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "El parámetro ':productId' no puede estar vacio" },
    });
  }
  try {
    const product = productService.getProductById(productId);
    res.send({ status: "OK", data: product });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
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
  try {
    const createdProduct = productService.createNewProduct(newProduct);
    res.status(201).send({ status: "ok", data: createdProduct });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const updateProduct = (req, res) => {
  const {
    body,
    params: { productId },
  } = req;

  if (!productId) {
    req.status(400).send({
      status: "FAILED",
      data: { error: "El parámetro ':productId' no puede estar vacio" },
    });
  }
  try {
    const updateProduct = productService.updateProduct(productId, body);
    res.send({ status: "ok", data: updateProduct });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const deleteProduct = (req, res) => {
  const {
    params: { productId },
  } = req;

  if (!productId) {
    req.status(400).send({
      status: "FAILED",
      data: { error: "El parámetro ':productId' no puede estar vacio" },
    });
  }

  try {
    productService.deleteProduct(productId);
    res.status(204).send({ statis: "ok" });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createNewProduct,
  updateProduct,
  deleteProduct,
};
