console.log('--- sumToLoop ---');
function sumToLoop(n) {
  let total = 0;
  for (let i = 1; i <= n; i += 1) {
    total += i;
  }

  return total;
}

console.time('sumToLoop');
console.log(sumToLoop(1));
console.log(sumToLoop(2));
console.log(sumToLoop(3));
console.log(sumToLoop(4));
console.log(sumToLoop(100));
console.timeEnd('sumToLoop');

console.log('--- sumToRecursive ---');
function sumToRecursive(n) {
  if (n === 1) {
    return 1;
  }

  return n + sumToRecursive(n - 1);
}

console.time('sumToRecursive');
console.log(sumToRecursive(1));
console.log(sumToRecursive(2));
console.log(sumToRecursive(3));
console.log(sumToRecursive(4));
console.log(sumToRecursive(100));
console.timeEnd('sumToRecursive');

console.log('--- factorial ---');
function factorial(n) {
  if (n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(100));

console.log('--- fibonacci ---');
function fibonacci(n, memo = {}) {
  if (memo[n]) return memo[n];

  if (n === 1 || n === 2) {
    return 1;
  }

  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
}

console.log(fibonacci(3));
console.log(fibonacci(7));
console.log(fibonacci(77));

console.log('--- printList ---');
function printList(list) {
  if (list.next === null) {
    console.log(list.value);
    return;
  }

  console.log(list.value);
  printList(list.next);
}

const testList = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

printList(testList);

console.log('--- printListReverse ---');
function printListReverse(list) {
  if (list.next !== null) {
    printListReverse(list.next);
  }

  console.log(list.value);
}

printListReverse(testList);

console.log('--- power ---');
function power(base, exp) {
  if (exp === 0) {
    return 1;
  }

  return base * power(base, exp - 1);
}

console.log(power(2, 4)); // 16
console.log(power(2, 3)); // 8
console.log(power(2, 2)); // 4
console.log(power(2, 1)); // 2
console.log(power(2, 0)); // 1

console.log('--- all ---');
function all(array, cb) {
  if (array.length === 0) {
    return true;
  }

  return cb(array[0]) && all(array.slice(1), cb);
}

console.log(all([1, 2, 9], (num) => num < 7));
console.log(all([1, 2, 6], (num) => num < 7));

console.log('--- productOfArray ---');
function productOfArray(array) {
  if (array.length === 0) {
    return 1;
  }

  return array[0] * productOfArray(array.slice(1));
}

console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60

console.log('--- contains ---');
function contains(value, searchValue) {
  if (typeof value !== 'object' || value === null) {
    return value === searchValue;
  }

  return Object.values(value).some((nestedValue) =>
    contains(nestedValue, searchValue)
  );
}

const nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: 'foo2',
          },
        },
      },
    },
  },
};

console.log(contains(nestedObject, 44)); // true
console.log(contains(nestedObject, 'foo')); // false

console.log('--- totalIntegers ---');
function totalIntegers(value) {
  if (value.constructor !== Array) {
    if (Number.isInteger(value)) {
      return 1;
    }
    return 0;
  }

  let total = 0;
  value.forEach((nestedValue) => {
    total += totalIntegers(nestedValue);
  });

  return total;
}

console.log(totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]])); // 7

console.log('--- sumSquares ---');
function sumSquares(value) {
  if (value.constructor !== Array) {
    if (Number.isInteger(value)) {
      return value ** 2;
    }
    return 0;
  }

  let total = 0;
  value.forEach((nestedValue) => {
    total += sumSquares(nestedValue);
  });

  return total;
}

let l = [1, 2, 3];
console.log(sumSquares(l)); // 1 + 4 + 9 = 14

l = [[1, 2], 3];
console.log(sumSquares(l)); // 1 + 4 + 9 = 14

l = [[[[[[[[[1]]]]]]]]];
console.log(sumSquares(l)); // 1 = 1

l = [10, [[10], 10], [10]];
console.log(sumSquares(l)); // 100 + 100 + 100 + 100 = 400

console.log('--- replicate ---');
function replicate(repetitions, number) {
  if (repetitions <= 0) return [];

  return [number].concat(replicate(repetitions - 1, number));
}

console.log(replicate(3, 5)); // [5, 5, 5]
console.log(replicate(1, 69)); // [69]
console.log(replicate(-2, 6)); // []

console.log('--- collatz ---');
function collatz(n) {
  if (n === 1) {
    return 0;
  }

  if (n % 2) {
    return 1 + collatz(3 * n + 1);
  }
  return 1 + collatz(n / 2);
}

console.log(collatz(1));
console.log(collatz(2));
console.log(collatz(3));
console.log(collatz(4));
console.log(collatz(7));
