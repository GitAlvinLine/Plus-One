// Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

// Example 1:

// Input: [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Example 2:

// Input: [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.

var plusOne = function(digits) {
    for (var index = digits.length - 1; index >= 0; index--) { //  
        digits[index] = (digits[index] + 1) % 10; // sets the index value === 0 
        if (digits[index]) {    // if this is 0, aka false, then it will not run until it is not a zero
            return digits;
        };
    }
    digits.unshift(1); // runs either when the loop is down to zero;
    return digits;
};

console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,9]))
console.log(plusOne([9,9]))

