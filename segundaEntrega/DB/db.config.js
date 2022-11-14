const envConfig = require("../config");

module.exports = {
  files: {
    products: "./data/products.json",
    cart: "./data/cart.json",
  },
  mongo: {
    uri: `mongodb+srv://Ayelenleclerc:${envConfig.DB_PASSWORD}@backend.xrrgkdz.mongodb.net/ecommerce?retryWrites=true&w=majority`,
  },
  firebase: {
    credentials: `${envConfig.FIREBASE_CREDENTIALS}`,
  },
};
