const { Router } = require("express-");
const CartController = require("../../constrollers/carts.controllers");

const route = Router();

route.get("/", CartController.getCarts);
route.get("/:id", CartController.getCartsById);
route.put("/:id", CartController.updateCart);
route.post("/", CartController.saveCart);
route.delete("/:id", CartController.deleteCart);

module.exports = route;
