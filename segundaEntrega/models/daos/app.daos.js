const dataSource = process.env.DATASOURCE;
let ProductsDao;
let CartDao;
switch (dataSource) {
  case "mongo":
    ProductsDao = require("../daos/products/products.mongo.dao");
    CartDao = require("../daos/carts/cart.mongo.dao");
    break;
  case "firebase":
    ProductsDao = require("../daos/products/products.firebase.dao");
    CartDao = require("../daos/carts/cart.firebase.dao");
    break;
  case "file":
    ProductsDao = require("../daos/products/products.file.dao");
    CartDao = require("../daos/carts/cart.file.dao");
    break;
  case "memory":
    ProductsDao = require("../daos/products/products.memory.dao");
    CartDao = require("../daos/carts/cart.memory.dao");
    break;
  default:
    throw new Error("invalid DATASOURCE");
}

module.exports = {
  ProductsDao,
  CartDao,
};
