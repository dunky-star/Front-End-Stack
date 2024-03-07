'use strict';

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// NUMBERS
console.log(+(0.1 + 0.2).toFixed(2)); // toFixed(2) rounds to 2 decimal places.
console.log(0.1 + 0.2 === 0.3);

// CONVERSION
console.log(+'23');

// CHECKING IF VALUE IS A NUMBER
console.log(Number.isFinite('100'));
console.log(Number.isFinite(1000));

// CHECKING MAX AND MIN NUMBER
console.log(`Max number: ${Math.max(5, 10, 23, 11, 2)}`);
console.log(`Min number: ${Math.min(5, 10, 23, 11, 2)}`);
console.log(
  `The area of the circle is: ${+(
    Math.PI *
    Number.parseFloat('10px') ** (1 / 3)
  ).toFixed(3)}`
);
console.log(`Random number generated is: ${Math.trunc(Math.random() * 6) + 1}`);

// WORKING WITH DATES:
//******************* */
const now = new Date();
console.log(now);
const future = new Date(account1.movementsDates[0]);
console.log(`Account1 first movement date: ${future}`);
console.log(future.getFullYear());
