/**
 * Write a JavaScript function that takes a number n as an argument and returns the nth number in the Fibonacci sequence.
 * The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the previous two.
 * The first few numbers in the sequence are 0, 1, 1, 2, 3, 5, 8, 13, and so on.
 * */

// Solution #1
// Using recursion
function recursionFibonacci(n) {
  // for n < 0 throw error
  if (n < 0) {
    throw new Error('Input should be a positive integer or a 0.');
  }

  // for 0 and 1 return n itself
  if (n <= 1) {
    return n;
  }
  return recursionFibonacci(n - 1) + recursionFibonacci(n - 2);
}

// !Exponential time complexity is O(2^n)
// Space complexity is O(n). This is due to the maximum depth of the recursion tree, which can go up to 'n' levels deep.
// This is the worst solution in our list of 3.
// We may improve it by caching values though.

// ok, now let's test it
console.log(recursionFibonacci(10)); // 55
console.log(recursionFibonacci(0)); // 0
console.log(recursionFibonacci(1)); // 1
console.log(recursionFibonacci(20)); // 6765
console.log(recursionFibonacci(30)); // 832040
