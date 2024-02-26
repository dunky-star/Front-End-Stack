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

// Padding a credit card
const maskCreditCard = function (cardNumber) {
  const strCard = cardNumber + '';
  const last = strCard.slice(-4);
  return last.padStart(strCard.length, 'X');
};

console.log(`Masked card number: ${maskCreditCard('33498991014177880')}`);

///////////////////////////////////////
// String Methods Practice

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  // Destructuring Arrays
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
  console.log(output);
}

///////////////////////////////////////
