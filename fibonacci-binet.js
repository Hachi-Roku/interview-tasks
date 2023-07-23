/**
 * Write a JavaScript function that takes a number n as an argument and returns the nth number in the Fibonacci sequence.
 * The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the previous two.
 * The first few numbers in the sequence are 0, 1, 1, 2, 3, 5, 8, 13, and so on.
 * */

// Solution #3
// Using Benet's Formula
// F(n) = (Phi^n - phi^n) / sqrt(5);
// where Phi = (1 + sqrt(5)) / 2
// and phi = (1 - sqrt(5)) / 2

const sqrt5 = Math.sqrt(5);
const Phi = (1 + sqrt5) / 2;
const phi = (1 - sqrt5) / 2;

function binetFibonacci(n) {
  // for n < 0 throw error
  if (n < 0) {
    throw new Error('Input should be a positive integer or a 0.');
  }

  // for 0 and 1 return n itself
  if (n <= 1) {
    return n;
  }

  return Math.round((Math.pow(Phi, n) - Math.pow(phi, n)) / sqrt5);
}


// Runtime complexity is O(1)
// Memory complexity is O(1)
// The best solution you can find in terms of Big O notation

// ok, now let's test it
console.log(binetFibonacci(10)); // 55
console.log(binetFibonacci(0)); // 0
console.log(binetFibonacci(1)); // 1
console.log(binetFibonacci(20)); // 6765
console.log(binetFibonacci(30)); // 832040
