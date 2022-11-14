const HTTP_STATUS = require("../constants/api.constant");
const { successResponse } = require("../utils/api.utils");
const { CartDao, ProductsDao } = require("../models/daos/app.dao");

let cartDao = new CartDao();
class CartController {
  async getCarts(req, res, next) {
    try {
      const carts = await cartDao.getAll();
      const response = successResponse(carts);
      res.status(HTTP_STATUS.OK).json(response);
    } catch (error) {
      next(error);
    }
  }

  async getCartById(req, res, next) {
    const { id } = req.params;
    try {
      const cart = await cartDao.getById(id);
      const response = successResponse(cart);
      res.status(HTTP_STATUS.OK).json(response);
    } catch (error) {
      next(error);
    }
  }

  async saveCart(req, res, next) {
    try {
      const newCart = await cartDao.save(req.body);
      const response = successResponse(newCart);
      res.status(HTTP_STATUS.CREATED).json(response);
    } catch (error) {
      next(error);
    }
  }

  async updateCart(req, res, next) {
    const { id } = req.params;
    try {
      const updatedCart = await cartDao.update(id, req.body);
      const response = successResponse(updatedCart);
      res.status(HTTP_STATUS.OK).json(response);
    } catch (error) {
      next(error);
    }
  }

  async deleteCart(req, res, next) {
    const { id } = req.params;
    try {
      const deletedCart = await cartDao.delete(id);
      const response = successResponse(deletedCart);
      res.status(HTTP_STATUS.OK).json(response);
    } catch (error) {
      next(error);
    }
  }
  async addProductToCart(req, res, next) {
    const { cartId, productId } = req.params;
    try {
      const addProductToCart = await cartDao.addProductToCart(
        cartId,
        productId
      );
      const response = successResponse(addProductToCart);
      res.status(HTTP_STATUS.OK).json(response);
    } catch (error) {
      next(error);
    }
  }
  async removeProductFromCart(req, res, next) {
    const { cartId, productId } = req.params;
    try {
      const removeProductFromCart = await cartDao.removeProductFromCart(
        cartId,
        productId
      );
      const response = successResponse(removeProductFromCart);
      res.status(HTTP_STATUS.OK).json(response);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new CartController();
