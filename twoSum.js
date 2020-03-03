/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

var twoSum = function(nums, target) {
    /* returns the indices of the two numbers that
    add up to the target number*/

    let match = false;
    let sum = 0;
    let indice1 = 0;
    let indice2 = 0;

    for (let anchor = 0; (anchor < nums.length) && (match === false); anchor++) {
        /*sets the number to be added with all other numbers to the right of the anchor
        number in the array*/

        for (let i = (anchor + 1); (i < nums.length) && (match === false); i++) {
            //add the numbers to the right of the anchor with the anchor to test for a match
            sum = nums[anchor] + nums[i];

            if (sum === target) {
                //the target sum is found
                match = true;
                indice1 = anchor;
                indice2 = i;
                return [anchor, i];
            }
        }
    }

    return "No match!";
};

console.log(twoSum([1,2,9,5], 11));
console.log(twoSum([13,17,21,1], 22));
console.log(twoSum([10,20,90,50], 60));