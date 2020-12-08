let express = require("express");
let routes = require("./routes");

let app = express();

app.get("/flip", routes.coinFlipRoute);
app.get("/add", routes.addNumbersRound);

module.exports.app = app;