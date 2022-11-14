const { Router } = require("express");
const CartController = require("../../controllers/cart.controller");

const router = Router();

router.get("/", CartController.getCarts);
router.get("/:id", CartController.getCartById);
router.put("/:id", CartController.updateCart);
router.post("/", CartController.saveCart);
router.delete("/:id", CartController.deleteCart);
router.post("/:cartId/products", CartController.addProductToCart);
router.delete(
  "/:cartId/productos/:productId",
  CartController.removeProductFromCart
);

module.exports = router;
