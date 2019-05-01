// @Summing a number's digits@

// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits. For example:

//   sumDigits(10);  // Returns 1
//   sumDigits(99);  // Returns 18
//   sumDigits(-32); // Returns 5

// Let's assume that all numbers in the input will be integer values.


function sumDigits(number) {
    //number goes absolute
    let absNumber = Math.abs(number);
    //number is split and then mapped, so it remains a number
    let splitNumber = absNumber.toString().split('').map(Number);
    let count = 0;
    //iteration of numbers ins array added to accumulator
    for (let i = 0; i < splitNumber.length; i++) {
      count += parseInt(splitNumber[i]);
    }
    return count;
}