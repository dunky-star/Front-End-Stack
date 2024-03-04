'use strict';

const s = 'Connie Client';
let fName = s.substring(0, s.indexOf('t')); // "Connie"
console.log(fName);

//const firstLetter = s[0];
let firstLetter = s.charAt(0);
let lastLetter = s.charAt(s.length - 1);
17;

// Find an element in an array
function findElement(array, myElement) {
  for (let element of array) {
    if (element === myElement) {
      return true;
    }
  }
  return false;
}

const studentAnswers = [
  [1, 1, 2, 4],
  [2, 1, 2, 2],
  [3, 1, 3, 4],
];
const correctAnswers = [3, 1, 2, 4];

const scoreExams = function (studentAnswers, correctAnswers) {
  scores = [];
  for (let student of studentAnswers) {
    let i = 0;
    let score = 0; // score of each student
    for (let answers of correctAnswers) {
      if (student[i] === answers) {
        score++;
      }
    }
    socres.push(score);
  }
  return scores;
};

console.log(
  `Student score -> Student answers: ${studentAnswers}, correct answers: ${correctAnswers}`
);

function scoreForecasts(forecast, observed) {
  let percentArray = [];
  let index = 0;
  for (let eachForecast of forecast) {
    let difference = eachForecast - observed[index];
    //convert the difference to positive integer
    difference = difference > 0 ? difference : difference * -1;

    if (difference <= 2) percentArray.push(100);
    else if (difference <= 5) percentArray.push(80);
    else if (difference <= 10) percentArray.push(60);
    else percentArray.push(0);
    index++;
  }
  console.log(percentArray);
  return percentArray.reduce((acc, value) => acc + value, 0) / 3;
}
const forecast2 = [80, 80, 80];
const observed2 = [82, 85, 74];
console.log(scoreForecasts(forecast2, observed2));

function firstRowColSum(matrix) {
  let rowSum = matrix[0].reduce((acc, value) => acc + value, 0);
  let colSum = 0;
  for (let row of matrix) {
    colSum += row[0];
  }
  return [rowSum, colSum];
}
let testArr1 = [
  [1, 2, 3],
  [5, 2, 3],
  [9, 2, 3],
];
console.log(firstRowColSum(testArr1));

// Get the Oldest person age
// findOldestPerson[{name:’Ram’,age:20},
//  {name:’Lakshman’,age:15}]=>Ram

function findOldestPerson(persons) {
  if (persons.length === 0) {
    return 'No person provided';
  }

  // Initialize variables to store information about the oldest person
  let oldestName = persons[0].name;
  let oldestAge = persons[0].age;

  // Iterate through the array to find the oldest person
  for (let i = 0; i < persons.length; i++) {
    if (persons[i].age > oldestAge) {
      oldestName = persons[i].name;
      oldestAge = persons[i].age;
    }
  }

  return oldestName;
}

// Example usage
let personsArray = [
  { name: 'Ram', age: 20 },
  { name: 'Lakshman', age: 15 },
];

let oldestPerson = findOldestPerson(personsArray);
console.log(`The oldest person is: ${oldestPerson}`); // Output: Ram

// Find the person whose age is between 16 and 17 years.
// findYounger[{name:’Ram’,age:20},{name:’Lakshman’,age:15}]=> {name:’Lakshman’,age:15}
function ageBtn16And17(persons) {
  if (persons.length === 0) {
    return 'No person provided';
  }

  // Iterate through the array to find a person with age between 16 and 17
  for (let i = 0; i < persons.length; i++) {
    if (persons[i].age >= 16 && persons[i].age <= 17) {
      return persons[i];
    }
  }

  return 'No person found with age between 16 and 17';
}

// Example usage
let peopleArray = [
  { name: 'Ram', age: 20 },
  { name: 'Lakshman', age: 16 },
];

let youngerPerson = ageBtn16And17(peopleArray);
console.log(`The persons with age between 16 and 17 is:`); // Output: { name: 'Lakshman', age: 15 }
console.log(youngerPerson);
