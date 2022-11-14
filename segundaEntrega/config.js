const envs = require("./.env");
module.exports = {
  DB_PASSWORD: process.env.DB_PASSWORD,
  DATASOURCE: process.env.DATASOURCE,
  FIREBASE_CREDENTIALS: process.env.FIREBASE_CREDENTIALS,
};
console.log(DATASOURCE);
