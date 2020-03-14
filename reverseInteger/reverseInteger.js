/*
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
Note:
Assume we are dealing with an environment which could only store integers 
within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose 
of this problem, assume that your function returns 0 when the reversed 
integer overflows.
*/

const reverseInteger = function(inputNumber) {
  //reverses an input integer

  let negativeFlag = false,
    trailingZeroFlag = false,
    answer = "";

  //convert the input number to a string
  inputNumber = Math.abs(inputNumber).toString(2);

  if (inputNumber[0] === "-") {
    //the return number also be negative
    negativeFlag = true;
  }

  if (inputNumber[inputNumber.length - 1] === "0") {
    trailingZeroFlag = true;
  }

  for (let i = inputNumber.length - 1; i < inputNumber.length; i--) {
    answer += inputNumber[i];
  }

  return answer;
};

reverseInteger(321);

module.exports = reverseInteger;
