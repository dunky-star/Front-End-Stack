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



// Arrow and Lambda Function
const epicVarFunc = (x, y) => { var resultMult = x * y; return resultMult;}
console.log("The result from Lambda function is : " + epicVarFunc(5,2));


// Immediately invoked functions
var  immediatelyInvokedFunc = function(){
   // "FOR" loop and print to console.
   (function(){
        for (var i=0; i<=10; i ++){
            
                console.log("\nThe value at position: " + i + " is: " +i);
            }
   })();
        
    
    console.log(" The value of immediate invoke " + i);

}

// Calling the function.
immediatelyInvokedFunc();



// Using promise to achieve ASYNC tasks.
function Divide(num1, num2){
    var promise = new Promise(function(resolve, reject){
        if(num2 !== 0)
        {
            resolve(num1/num2);
        }
        else{
            reject("\nDivide by zero is an error");
        }
    });

    return promise;

    
}

Divide(5,2)
    .then(
        function(result)
        {
            console.log("\n The first result of division is : " + result);
            return Divide(10,5);
        },
        function(err)
        {
            console.log(err);
        })
        
    .then(
        function(result)
        {
            console.log("\n The second result of division is : " + result);
        },
        function(err)
        {
            console.log(err);
        });


