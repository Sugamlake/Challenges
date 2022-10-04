// # Fizz a buzz

// Write a program that displays the numbers from 1 to 100 on the screen, substituting the multiples of 3 for the word "fizz", the multiples of 5 for "buzz" and the multiples of both, that is, the multiples of 3 and 5 ( or 15), by the word "fizzbuzz".

function compareNumbers() {
  for (let numberToCompare = 1; numberToCompare <= 100; numberToCompare++) {
    if (numberToCompare % 3 == 0 && numberToCompare % 5 == 0) {
      console.log(`${numberToCompare} FizzBuzz`);
    } else if (numberToCompare % 3 == 0) {
      console.log(`${numberToCompare} Fizz`);
    } else if (numberToCompare % 5 == 0) {
      console.log(`${numberToCompare} Buzz`);
    } else {
      console.log(`${numberToCompare}`);
    }
  }
}
console.log(compareNumbers());