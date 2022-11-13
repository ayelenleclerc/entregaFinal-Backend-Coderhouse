const HTTP_STATUS = require("../constants/api.constants");
const { successResponse } = require("../utils/api.utils");
const { CartDao } = require("../models/daos/app.daos");

const cartDao = new CartDao();
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

  async addToCart(req, res, next) {
    const products = await cartDao.addProductCart(id);
  }

  async deleteToCart(req, res, next) {}
}

module.exports = new CartController();
