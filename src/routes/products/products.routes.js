const express = require("express");
const router = express.Router();
const productsController = require("../../controllers/productsController.js");

router.get("/", productsController.getAllProducts);

router.get("/:productId", productsController.getProductById);

router.post("/", productsController.createNewProduct);

router.put("/:productId", productsController.updateProduct);

router.delete("/:productId", productsController.deleteProduct);

module.exports = router;
