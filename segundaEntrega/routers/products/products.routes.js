const { Router } = require("express");
const ProductsController = require("../../constrollers/products.controller");

const route = Router();

route.get("/", ProductsController.getProducts);
route.get("/:id", ProductsController.getProductsById);
route.put("/:id", ProductsController.updateProducts);
route.post("/", ProductsController.saveProducts);
route.delete("/:id", ProductsController.deleteProducts);

module.exports = route;
