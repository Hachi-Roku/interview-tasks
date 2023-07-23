/**
 * Write a JavaScript function that takes a number n as an argument and returns the nth number in the Fibonacci sequence.
 * The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the previous two.
 * The first few numbers in the sequence are 0, 1, 1, 2, 3, 5, 8, 13, and so on.
 * */

// Solution #2
// Using stack data-structure
function stackFibonacci(n) {
  // for n < 0 throw error
  if (n < 0) {
    throw new Error('Input should be a positive integer or a 0.');
  }

  // for 0 and 1 return n itself
  if (n <= 1) {
    return n;
  }

  let stack = [0, 1];

  for (let i = 2; i <= n; i++) {
    let fibCurr = stack.pop();
    let fibPrev = stack.pop();
    let fibNext = fibPrev + fibCurr;

    // push back the current and next Fibonacci number to the stack
    stack.push(fibCurr);
    stack.push(fibNext);
  }

  return stack[1];
}

// Runtime complexity is O(n)
// Memory complexity is O(1) in case we only keep last 2 numbers in stack

// ok, now let's test it
console.log(stackFibonacci(10)); // 55
console.log(stackFibonacci(0)); // 0
console.log(stackFibonacci(1)); // 1
console.log(stackFibonacci(20)); // 6765
console.log(stackFibonacci(30)); // 832040
