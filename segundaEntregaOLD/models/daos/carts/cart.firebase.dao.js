const FirebaseContainer = require("../../containers/firebase.container");

const collection = "carts";
class CartFirebaseDao extends FirebaseContainer {
  constructor() {
    super(collection);
  }
}

module.exports = CartFirebaseDao;
