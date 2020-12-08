function flipCoin() {
  /**
   * Return true for heads, false for tails.
   */
  return Math.random() > 0.5;
}

function addNumbers(a, b) {
  return a + b;
}

module.exports.addNumbers = addNumbers;
module.exports.flipCoin = flipCoin;