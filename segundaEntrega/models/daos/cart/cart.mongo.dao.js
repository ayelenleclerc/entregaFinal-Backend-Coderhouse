const { Schema } = require("mongoose");
const MongoContainer = require("../../containers/mongo.container");

const collection = "carts";
const cartSchema = new Schema({
  id: { type: Schema.Types.ObjectId },
  timestamp: { type: Date, default: Date.now },
  products: [{ type: String }],
});
class CartMongoDao extends MongoContainer {
  constructor() {
    super(collection, cartSchema);
  }
  async addProductToCart(cartId, productId) {
    try {
      const updatedProductsToCart = await this.model.findByIdAndUpdate(cartId, {
        $push: {
          products: [productId],
        },
      });
      return updatedProductsToCart;
    } catch (error) {
      console.log(error.message);
    }
  }
  async removeProductFromCart(cartId, productId) {
    try {
      const updatedProductsToCart = await this.model.findByIdAndUpdate(cartId, {
        $pull: {
          products: [productId],
        },
      });
      return updatedProductsToCart;
    } catch (error) {
      console.log(error.message);
    }
  }
}
module.exports = CartMongoDao;
