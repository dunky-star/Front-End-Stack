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
    console.log("Woroking");
    console.log(document.EpicForm.username.value);
}