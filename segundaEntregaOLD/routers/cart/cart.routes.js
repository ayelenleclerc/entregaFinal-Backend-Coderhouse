const { Router } = require("express");
const CartController = require("../../constrollers/carts.controllers");

const router = Router();

router.get("/", CartController.getCarts);
router.get("/:id", CartController.getCartsById);
router.put("/:id", CartController.updateCart);
router.post("/", CartController.saveCart);
router.delete("/:id", CartController.deleteCart);

module.exports = router;
