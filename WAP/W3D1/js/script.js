'use strict';

// Blocking operation
// Blocking methods execute synchronously
const addBlockingOps = (a, b) => {
  let sum = 0;
  for (let i = 0; i < 100; i++) {
    sum = a + b;
    console.log(`The sum${i} from blocking operation: ${sum}`);
  }
  return sum;
};

console.log(`THE BLOCKING OPERATION`);
console.log(`start`);
const A = addBlockingOps(1, 2);
const B = addBlockingOps(2, 3);
const C = addBlockingOps(3, 4);
console.log(`end`);

//##################################

// Non blocking operation
// non blocking methods execute asynchronously
const addNonBlockingOps = (a, b) => {
  setTimeout(function () {
    let sum = 0;
    for (let i = 0; i < 1000; i++) {
      sum = a + b;
      console.log(`The sum${i} from non blocking operation: ${sum}`);
    }
  }, 5000);
};

console.log(`THE NON BLOCKING OPERATION`);
console.log(`start`);
const A2 = addNonBlockingOps(1, 2);
const B2 = addNonBlockingOps(2, 3);
const C2 = addNonBlockingOps(3, 4);
console.log(`end`);
