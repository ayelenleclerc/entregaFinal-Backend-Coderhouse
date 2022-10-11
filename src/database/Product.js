const DB = require("./data.json");

const getAllProducts = () => {
  return DB.products;
};

module.exports = { getAllProducts };
