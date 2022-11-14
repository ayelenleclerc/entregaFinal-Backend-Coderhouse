const { Router } = require("express");
const CartController = require("../../controllers/cart.controller");

const router = Router();

router.get("/", CartController.getCarts);
router.get("/:id", CartController.getCartById);
router.put("/:id", CartController.updateCart);
router.post("/", CartController.saveCart);
router.delete("/:id", CartController.deleteCart);
router.post("/:cartId/:productId", CartController.addProductToCart);
router.delete("/:cartId/:productId", CartController.removeProductFromCart);

module.exports = router;
