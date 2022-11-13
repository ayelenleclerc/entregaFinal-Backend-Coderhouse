const { Schema } = require("mongoose");
const MongoContainer = require("../../containers/mongo.container");

const collection = "products";
const productsSchema = new Schema({
  timestamp: { type: "Date" },
  title: { type: "String" },
  description: { type: "String" },
  code: { type: "Number" },
  img: { type: "string" },
  price: { type: "Number" },
  stock: { type: "Number" },
});
class ProductsMongoDao extends MongoContainer {
  constructor() {
    super(collection, productsSchema);
  }
}

module.exports = ProductsMongoDao;
