const chai = require("chai");
const assert = chai.equal;

const reverseInteger = require("../reverseInteger.js");

describe("reverseInteger", function() {
  it(" '123' --> '321'", function() {
    inputNumber = 123;
    correctOutput = 321;

    console.log("INOPUT");
    const invertedNumber = reverseInteger(inputNumber);
    assert.equal(correctOutput, invertedNumber);
  });

  it(" '-123' --> '-321'", function() {
    inputNumber = -123;
    correctOutput = -321;
    const invertedNumber = reverseInteger(inputNumber);
    assert.equal(correctOutput, invertedNumber);
  });

  it(" '120' --> '21'", function() {
    inputNumber = 120;
    correctOutput = 21;
    const invertedNumber = reverseInteger(inputNumber);
    assert.equal(correctOutput, invertedNumber);
  });
});
