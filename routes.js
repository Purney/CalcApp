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
  let number1 = Number(request.query.number1);
  let number2 = Number(request.query.number2);

  let result = logic.addNumbers(number1, number2)
  response.send(result.toString());
}

module.exports.addNumbersRound = addNumbersRound;
module.exports.coinFlipRoute = coinFlipRoute;