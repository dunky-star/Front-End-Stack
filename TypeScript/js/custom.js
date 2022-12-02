"use strict"; // strict mode to enforce some type safety.

/*
// Object destructuring -> access part of an object or array.
const response = {
    count : 10,

    data: [
        {
        pname: "Luke",
        films: ['Empires Strikes back', 'The Force Awaken']
        }, 
    
        {
        pname: "Han Holo",
        films: ['A New Hope']
        }
    ]
};

response.data.forEach(r =>{
    let pname = r;
    console.log(pname);
});



// Fat arrow => 

const quotient = {
    numbers: [1, 2, 3, 4, 5, 6, 7],
    result: [],
    divideFn: function(divisor){
        return this.numbers.map(function(divident){
            if(divident / divisor === 0){
                return this.results.push(divident);
            }
        }.bind(this));

    }
};

quotient.divideFn(3);
console.log(quotient.results);


function multiply(num, multiplier){
    num = (num !== undefined) ? num : 0;
    multiplier = (multiplier !== undefined) ? multiplier : 1;
    return num * multiplier;
}

console.log(
    multiply(),
    multiply(5),
    multiply(5,2)
);

*/


// Class in ECMAScript 2015
class Car{
    constructor(make, color, speed){
        this.make = make;
        this.color = color;
        this.speed = speed;
    }

    getMaxSpeed(){
        return `Maximum car speed is ${this.speed} km/h`;
    }
}

class Truck extends Car {

     getMaxSpeed(){
        return `Maximum truck speed is ${this.speed} km/h`;
    }
     
    getMake(){
        return `This car is a ${this.make}`;
    }

}

const car = new Car('BMW', 'Black', 250);
console.log(car.getMaxSpeed);

const truck = new Truck('MAN', 'Red' , 80);
console.log(truck.getMaxSpeed);
