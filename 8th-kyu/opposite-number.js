// Very simple, given a number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34

// Test.assertEquals(opposite(1), -1,)

// ES5

function opposite(number) {
    return number * -1;
}

// ES6

const opposite = number => number * -1;