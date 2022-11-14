const envConfig = require("../../config");

let ProductsDao;
let CartDao;

switch (envConfig.DATASOURCE) {
  case "mongo":
    ProductsDao = require("./products/product.mongo.dao");
    CartDao = require("./cart/cart.mongo.dao");
    break;
  case "firebase":
    ProductsDao = require("./products/product.firebase.dao");
    CartDao = require("./cart/cart.firebase.dao");
    break;
  default:
    throw new Error("Invalid Datasource");
}

module.exports = {
  ProductsDao,
  CartDao,
};
