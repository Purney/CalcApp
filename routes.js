let logic = require("./logic");

function coinFlipRoute(request, response) {
  let flip = logic.flipCoin();

  if (flip) {
    response.send("Heads");
  } else {
    response.send("Tails");
  }
}

function addNumbersRound(request, response) {
  let number1;
  let number2;

  let result = login.addNumbersRound(number1, number2)
  response.send(result);
}

module.exports.addNumbersRound = addNumbersRound;
module.exports.coinFlipRoute = coinFlipRoute;