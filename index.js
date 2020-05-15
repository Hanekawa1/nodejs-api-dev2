const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./src/routes/index.js");
const mongoose = require("mongoose");
const dataBaseConfig = require("./src/config/database");

mongoose.connect(dataBaseConfig.uri, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.Promise = global.Promise;
let db = mongoose.connection;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes);

const port = 5006;

app.listen(port, () => {
  console.log("Servidor em execução na porta: " + port);
});
