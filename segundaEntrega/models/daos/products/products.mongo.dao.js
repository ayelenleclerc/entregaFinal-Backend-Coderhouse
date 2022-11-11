const { Schema } = require("mongoose");
const MongoContainer = require("../../containers/mongo.container");

const collection = "products";
const productsSchema = new Schema({
  _id: { type: Schema.Types.ObjectId },
  timestamp: { type: "timestamp" },
  name: { type: "string" },
  description: { type: "string" },
  code: { type: "Number", unique: true },
  img: { type: "string" },
  price: { type: "Number" },
  stock: { type: "Number" },
})();
class ProductsMongoDao extends MongoContainer {
  constructor() {
    super(collection, productsSchema);
  }
}

module.exports = ProductsMongoDao;
