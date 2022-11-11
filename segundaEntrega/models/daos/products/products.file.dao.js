const FileContainer = require("../../containers/file.container");

class ProductsFileDao extends FileContainer {
  constructor() {
    super(ruta);
    this.ruta = "../../../DB/data/products.json";
  }
}

module.exports = ProductsFileDao;
