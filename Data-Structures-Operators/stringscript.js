'use strict';

const airline = 'TAP Air Portugal';

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));
console.log(airline.slice(-4));
console.log(airline.slice(1, -1));

// Check an airplane for a middle seat

const checkMiddleSeat = function (seatNumber) {
  // If seat's last letter is B or E - (Middel seat)
  const s = seatNumber.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('You got the middle seat 😫');
  } else {
    console.log('You are lucky 😎');
  }
};

console.log(checkMiddleSeat('11B'));
console.log(checkMiddleSeat('23C'));
console.log(checkMiddleSeat('3E'));

// Fix Captilization in name

const correctPassengerName = function (passengerName) {
  const passengerLowercase = passengerName.toLowerCase();
  const passengerCorrect =
    passengerLowercase[0].toUpperCase() + passengerLowercase.slice(1);
  return passengerCorrect;
};

console.log(`Correct passenger name: ${correctPassengerName('gEoFFreY')}`);

// Removing white spaces

const loginEmail = ' Dunky@testmail.com \n';
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

// Replacing
const priceGB = '499,65£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

// Capitalize first letter of word in a name

const capitalizeName = function (strName) {
  const strNameSplit = strName.split(' ');
  const nameFirstUpper = [];
  //console.log(strNameSplit);
  for (const n of strNameSplit) {
    nameFirstUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(nameFirstUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('geoffrey duncan opiyo kaligs');
