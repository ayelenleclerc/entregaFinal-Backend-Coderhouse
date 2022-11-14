const dotenv = require("dotenv");

dotenv.config({ path: __dirname + "/.env" });

const DB_PASSWORD = process.env.DB_PASSWORD;
const DATASOURCE = process.env.DATASOURCE;
const FIREBASE_CREDENTIALS = process.env.FIREBASE_CREDENTIALS;
console.log({ DB_PASSWORD, DATASOURCE, FIREBASE_CREDENTIALS });
module.exports = {
  DB_PASSWORD: process.env.DB_PASSWORD,
  DATASOURCE: process.env.DATASOURCE,
  FIREBASE_CREDENTIALS: process.env.FIREBASE_CREDENTIALS,
};
