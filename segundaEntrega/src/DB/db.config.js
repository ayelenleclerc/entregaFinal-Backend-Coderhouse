const envConfig = require("../config");
dontenv = envConfig.dontenv;

module.exports = {
  files: {
    products: "./data/products.json",
    cart: "./data/cart.json",
  },
  mongodb: {
    uri: `mongodb+srv://Ayelenleclerc:${DB_PASSWORD}@backend.xrrgkdz.mongodb.net/ecommerce?retryWrites=true&w=majority`,
  },
  firebase: {
    credentials: `${FIREBASE_CREDENTIALS}`,
  },
};
