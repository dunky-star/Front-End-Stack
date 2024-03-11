'use strict';

// Blocking operation
// Blocking methods execute synchronously
const addBlockingOps = (a, b) => {
  let sum = 0;
  for (let i = 0; i < 27; i++) {
    sum = a + b;
  }
  return sum;
};

console.log(`THE BLOCKING OPERATION`);
console.log(`start`);
console.log(`The sum1 from blcoking operation: ${addBlockingOps(1, 2)}`);
console.log(`The sum2 from blcoking operation: ${addBlockingOps(2, 3)}`);
console.log(`The sum3 from blcoking operation: ${addBlockingOps(3, 4)}`);
console.log(`end`);

//##################################

// Non blocking operation
// non blocking methods execute asynchronously
const addNonBlockingOps = (a, b) => {
  setTimeout(function () {
    let sum = 0;
    for (let i = 0; i < 2e27; i++) {
      sum = a + b;
      console.log(`The sum${i} from non blcoking operation: ${sum}`);
    }
  }, 5000);
};

console.log(`THE NON BLOCKING OPERATION`);
console.log(`start`);
const A = addNonBlockingOps(1, 2);
const B = addNonBlockingOps(2, 3);
const C = addNonBlockingOps(3, 4);
console.log(`end`);
