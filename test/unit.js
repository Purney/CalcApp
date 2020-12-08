let chai = require("chai");
let logic = require("../logic");

suite("Test coin flip", function() {

  test("Test the coin flips properly", function() {
    // Initialise a counter.
    let counter = 0;

    for (let i=0; i<100; i++) {
      // Flip the coin.
      let flip = logic.flipCoin();

      // Test return type.
      chai.assert.isBoolean(flip, "Should be a Boolean");

      if (flip) {
        counter++;
      }
    }

    chai.assert.approximately(50, counter, 10);
  });

});


suite("Test Add Numbers", function() {

  test("Test Adding Numbers" , function (){
    let firstNumber = [1,2,3,4,5];
    let secondNumber = [1,2,3,4,5];
    let answers = [2,4,6,8,10];

    for (var i = 0; i < answers.length; i++)
    {
      chai.assert.equal(logic.addNumbers(firstNumber[i], secondNumber[i]),answers[i], "Add Calculation was incorrect");
    }
  });

});