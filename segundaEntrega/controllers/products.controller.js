const HTTP_STATUS = require("../constants/api.constant");
const { successResponse } = require("../utils/api.utils");
const { ProductsDao } = require("../models/daos/app.dao");

let productsDao = new ProductsDao();
class ProductsController {
  async getProducts(req, res, next) {
    try {
      const products = await productsDao.getAll();
      const response = successResponse(products);
      res.status(HTTP_STATUS.OK).json(response);
    } catch (error) {
      next(error);
    }
  }

  async getProductsById(req, res, next) {
    const { id } = req.params;
    try {
      const products = await productsDao.getById(id);
      const response = successResponse(products);
      res.status(HTTP_STATUS.OK).json(response);
    } catch (error) {
      next(error);
    }
  }

  async saveProducts(req, res, next) {
    try {
      const newProducts = await productsDao.save(req.body);
      const response = successResponse(newProducts);
      res.status(HTTP_STATUS.CREATED).json(response);
    } catch (error) {
      next(error);
    }
  }

  async updateProducts(req, res, next) {
    const { id } = req.params;
    try {
      const updatedProducts = await productsDao.update(id, req.body);
      const response = successResponse(updatedProducts);
      res.status(HTTP_STATUS.OK).json(response);
    } catch (error) {
      next(error);
    }
  }

  async deleteProducts(req, res, next) {
    const { id } = req.params;
    try {
      const deletedProducts = await productsDao.delete(id);
      const response = successResponse(deletedProducts);
      res.status(HTTP_STATUS.OK).json(response);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new ProductsController();
