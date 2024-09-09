//Latori functions

//what is a function?
//A collection of code that can be executed one or more times
//How do you use functions in your code?
//it's a set of instructions you can give your computer to tell it what to do
//Why are they important?
//it is reusable code- reference it again and again
//a relationship whhich each input elemnt is related to exactly one output element. Try to think of functions as: relationships between an iput and an output-- a transformation of an input to an output

//anatomy of a function
//keyword       name        arguments/parameters    
//function nameOfFunction (args1, args2. args3) {code that will execute aka function block/body}

//parameters and arguments are not the same!!
//parameters: values that a function is defined to accept during function declaration

//Important terms: name, parameters, arguments, body, declaration, call site(where you invoke the function)

//functions save us from having to write code many times 
//crucial tool towards the DRY(Don't Repeat Yourself) principle
//allow us to make complex functionality out of simpler building blocks

//Return statement
//return value refers to the function's produced value

//regular functions and arrow function are just two ways of writing functions and accomplish basically the same thing
// arrow functions have shorter syntax: they don't use the function keyword, use an => arrow instead

//anonymous function-it is a function with no name - they don't need to have a name necessarily looks 
//iife= immediately invoked function expression

//callback function- a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action

//EXAMPLE: function greeting(name){
//     alert('Hello ' + name);
// }
//function processUserInput(callback) {
//     var name = prompt('Please enter your name.');
//     callback(name);
// }
//processUserInput(greeting);

// Named function
// function addNumbers(a, b) {
//     return a + b;
// }
// console.log(addNumbers(1, 2)); //output: 3
// //without console.log()- i am unable to see the output in console

// // Function Expression- function assigned to a variable
// const multiplyNumbers = function(a, b) {
//     return a * b; 
// }
// console.log(multiplyNumbers(20, 30));

// // Arrow Function
// const divideNumbers = (a, b) => {
//     return a / b;
// }

// console.log("Divide numbers function " + divideNumbers(20, 10));

// const sameLinedDivideNumbers = (a, b) => a / b; //this works because it is only one line

// console.log("Same line divide numbers function", sameLinedDivideNumbers(40, 4));


//Immediately Invoked Function Expression (IIFE)

// (function(){
//     console.log('This is an IIFE');
// })();

// Higher Order Function / Callback Function

// function higherOrder(callback){
//     console.log("Higher Order Function");
//     callback();
// }


//Functions with Osiel 04/25/2024
// here we will create a function called adder that takes in 3 parameters

// function that adds 3 parameters (parameters are like placeholders?)

// function adder(x, y, z) {
//     return x + y + z;
// }
//our arguments will replace parameters- what do you want to add
// console.log(adder(1, 2, 3));
//you could add, subtract, divide, multiply- you need to change the operators +, -, %, *

// function multiply(x, y, z) {
//     return x * y * z;
// }

// console.log(multiply(3, 5, 6));
//when would you use this? On apps, a calculator, a shopping cart--- anything that uses math


// a function that checks if it's a string
//create a function called "isString" that takes in 3 arguments (x, y, z)

// function isString(x, y , z) {
    //isString checks if each argument is a string using the typeof operator
    //OPERATORS
    // if/else to check if the string exists 
    // === is strict
    //this is the condition= typepf is checking if each parameter is a string with ===
//      if(typeof x === "string" && typeof y === "string" && typeof z === "string"){
//         console.log("All parameters are strings!!")
//      } else {
//         console.log('Not all parameters are strings!');
//      }
// }
// replace parameters(x, y, z) with arguments(the names vvvvvv)
// isString("Osiel", "Tony", "Ricardo");
// isString(100, "Justin", "Alex");


// let's create a vowel checker

// function vowelChecker(x){
    //condition goes here-- tell it what to do
    //checking if the first character is a vowel
    //.charAt is checking where the vowel is at- 0  so it will check the first character
    //will switch to lowercase-- bc we chose for it to do so
//     var firstChar = x.toLowerCase().charAt(2);

//     if(
//         firstChar === "a" ||
//         firstChar === "e" ||
//         firstChar === "i" ||
//         firstChar === "o" ||
//         firstChar === "u" 
//     ) {
//         console.log("OMG you're a vowel!")
//     } else {
//         console.log("Hey! You're not a vowel!!");
//     }
// }
// // how to call function-- we need an argument

// vowelChecker("Osiel");
// vowelChecker("Tim");
// vowelChecker("Lourdes");


// ARROW FUNCTIONS
// BEFORE ARROW FUNCTION

function addNumbers(num1, num2){
    return num1 + num2;
}
// can use let or var or const-- your choice in this situation
const result1 = addNumbers(5, 3);
console.log(result1);



//AFTER with arrow function
// Arrow function that adds 2 numbers

const addNumbers2 = (num1, num2) => {
    return num1 + num2;
}

const result2 = addNumbers2 (10, 14);
console.log(result2);