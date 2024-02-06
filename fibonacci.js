function fibonacci(n, memo = {}) {
  if (memo[n]) return memo[n];

  if (n === 1 || n === 2) {
    return 1;
  }

  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
}

console.log(`Fibonacci sequence n = 3: ${fibonacci(3)}`);
console.log(`Fibonacci sequence n = 7: ${fibonacci(7)}`);
console.log(`Fibonacci sequence n = 77: ${fibonacci(77)}`);
