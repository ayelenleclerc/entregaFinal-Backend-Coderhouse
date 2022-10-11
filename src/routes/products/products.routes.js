const express = require("express");
const router = express.Router();
const productsController = require("../../controllers/productsController.js");

router.get("/", productsController.getAllProducts);

router.get("/:id", productsController.getProductById);

router.post("/:id", productsController.createProduct);

router.put("/:id", productsController.updateProduct);

router.delete("/:id", productsController.deleteProduct);

module.exports = router;
