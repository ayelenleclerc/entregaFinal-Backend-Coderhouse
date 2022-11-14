const FileContainer = require("../../containers/file.container");

class CartFileDao extends FileContainer {
  constructor() {
    super(ruta);
    this.ruta = "../../../DB/data/carts.json";
  }

  async addToCart(cartId, productId) {}
}

module.exports = CartFileDao;
