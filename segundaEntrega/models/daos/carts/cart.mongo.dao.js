const { Schema } = require("mongoose");
const MongoContainer = require("../../containers/mongo.container");

const collection = "carts";
const cartSchema = new Schema({
  _id: { type: Schema.Types.ObjectId },
  timestamp: { type: "timestamp" },
  products: [{ type: "string" }],
})();
class CartMongoDao extends MongoContainer {
  constructor() {
    super(collection, cartSchema);
  }
  async addToCart(cartId, productId) {
    this.model.updateOne(
      { _id: cartId },
      {
        $push: {
          products: [productId],
        },
      }
    );
  }
}

module.exports = CartMongoDao;
