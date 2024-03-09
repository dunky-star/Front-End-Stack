'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours,

  order: function (i, j) {
    return [this.starterMenu[i], this.mainMenu[j]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

// Receive 2 return values from a function
const [starter, main] = restaurant.order(2, 0);
console.log(starter, main);

// Nested Objects
const {
  fri: { open: o, close: c },
} = restaurant.openingHours;
console.log(o, c);

// orderDelivery
restaurant.orderDelivery({
  time: '22:30',
  address: 'Vin Del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

//console.log(orderDeliv);

// SPREAD, because on the right side of =
const arr = [1, 2, ...[3, 4]];

// REST, because on the left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFoods] = [
  ...restaurant.starterMenu,
  ...restaurant.mainMenu,
];

console.log(pizza, risotto, otherFoods);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// Function that takes arbitrary number of arguments as arrays
const print = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(`The sum of numbers = ${sum}`);
};

print(2, 3);
print(5, 3, 7, 2);
print(8, 2, 5, 3, 2, 1, 4);

// Optional chaining with Nullish Coalescing
const users = [
  { firstName: 'Geoffrey', email: 'dunky@mail.com' },
  { firstName: 'Arma', email: 'army@testmail.com' },
];

console.log(
  `User no.1 first name: ${users[0]?.firstName ?? 'Users array empty'}`
);

// Looping over object
const properties = Object.keys(openingHours);
// property KEYS
let openStr = `We are open on ${properties.length} 
days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// property VALUES
const values = Object.values(openingHours);
console.log(values);

// Entire OBJECT
const entries = Object.entries(openingHours);
for (const [key, { open, close }] of entries) {
  console.log(
    `On ${key}, we are open at ${open} hrs and close at ${close} hrs`
  );
}
