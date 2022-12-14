const app = require("./app");
const { DATASOURCE } = require("./config");
console.log(DATASOURCE);
const PORT = process.env.PORT || 8080;

const DATASOURSE_BY_ENV = {
  mongo: require("./models/containers/mongo.container"),
  firebase: require("./models/containers/firebase.container"),
  file: require("./models/containers/file.container"),
  memory: require("./models/containers/memory.container"),
};
const dataSource = DATASOURSE_BY_ENV[DATASOURCE];

app.listen(PORT, () => {
  dataSource.connect();
  console.log("Ready on port " + PORT);
  console.log("Connected to " + DATASOURCE);
});
console.log("Connected to " + DATASOURCE);
