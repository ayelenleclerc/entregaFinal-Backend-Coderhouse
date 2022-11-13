const { Router } = require("express");
const ProductsController = require("../../constrollers/products.controller");

const router = Router();

router.get("/", ProductsController.getProducts);
router.get("/:id", ProductsController.getProductsById);
router.put("/:id", ProductsController.updateProducts);
router.post("/", ProductsController.saveProducts);
router.delete("/:id", ProductsController.deleteProducts);

module.exports = router;
