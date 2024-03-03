'use strict';

// Handling Default parameters in a function
const bookings = [];

const bookFlight = function (flightNum, numPassengers = 1, price = 199) {
  // Creating booking object
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

bookFlight('IA324');
bookFlight('IA324', 2, 800);

// How passing argument works: Value (primitive) vs Reference (Object)
const flight = 'LA123';
const kaligs = {
  name: 'Geoffrey',
  passport: 'US002ELAR',
};

const checkIn = function (flightNum, passenger) {
  (flightNum = 'LH123'), (passenger.name = 'Mr. ' + passenger.name);
  if (passenger.passport === 'US002ELAR') {
    alert('Check in');
  } else {
    alert('Wrong passport');
  }
};

checkIn(flight, kaligs);

// First-Class and Higher-Order functions
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-Order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// IIFE -> Immediately Invoked Function Expression
(function () {
  console.log('This will never run again');
  const isPrivate = 23;
})();

// Function closure
const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();
