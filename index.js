const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./src/routes/index.js");

const app = express();
app.use(routes);

const port = 5006;

app.listen(port, () => {
  console.log("Servidor em execução na porta: " + port);
});
