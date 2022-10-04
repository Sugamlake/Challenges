// # Fizz a buzz

//Write a program that displays the numbers from 1 to 100 on the screen, substituting the multiples of 3 for the word "fizz", the multiples of 5 for "buzz" and the multiples of both, that is, the multiples of 3 and 5 ( or 15), by the word "fizzbuzz".

function compararNúmeros() {
  for (let númeroAComparar = 1; númeroAComparar <= 100; númeroAComparar++) {
    if (númeroAComparar % 3 == 0 && númeroAComparar % 5 == 0) {
      console.log(`${númeroAComparar} FizzBuzz`);
    } else if (númeroAComparar % 3 == 0) {
      console.log(`${númeroAComparar} Fizz`);
    } else if (númeroAComparar % 5 == 0) {
      console.log(`${númeroAComparar} Buzz`);
    } else {
      console.log(`${númeroAComparar}`);
    }
  }
}
console.log(compararNúmeros());
