"use strict"; // strict mode to enforce some type safety.

// Classes in JavaScript

class Rectangle{

    constructor(x, y){
        console.log("The position of X is: " +x);
        console.log("The position of Y is: " +y);
        console.log("This is a constructor");

        // Creating variables from parametized constructor.
        this.x = x;
        this.y = y;
    }

    EpicFun(){
        console.log("This is epic fun function");
    }

    static StaticFun(){
        console.log("This is epicly static");
    }

}

// Creating class object.
var objRectangle = new Rectangle(10, 15);

var objRectangle1 = new Rectangle(20, 35);

console.log("The value of x and y coordinates: (" + objRectangle.x + "," + objRectangle.y + ")");

console.log("The value of x and y coordinates: (" + objRectangle1.x + "," + objRectangle1.y + ")");

// Calling a class function.

objRectangle.EpicFun();

// Calling a static function. Static function doesn't necessarily require an object of a class.
Rectangle.StaticFun()


// Inheritance principle: child inherits from parents.
class Shapes extends Rectangle{

}


// Form validation
function validationFunc(){
    
    var varUsername = document.EpicForm.username.value;
    // console.log(varUsername);
    if (varUsername === "")
    {
        console.log("Username cannot be empty");
    } 
    else if (varUsername.length<10)
    {
       console.log("Length should be more than 10 characters");
    } 
    else
    {
        console.log("Success");   
    }
}

// Using promise to achieve ASYNC tasks.
function Divide(num1, num2){
    var promise = new Promise(function(resolve, reject){
        if(num2 !== 0)
        {
            resolve(num2/num1);
        }
        else{
            reject("Divide by zero is an erro");
        }
    });

    return promise;

    
}

console.log("\n Promise: The division of " + num1 + " and " + num2 + " is : " + Divide(5,0));