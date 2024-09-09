//example 1: addition with type coercion

var num1 = 42 //number data type

var str1 = "3" //string data type

var result = num1 + str1;

console.log(result);

//subtraction
var num2 = 10

var str2 = "5"

var result2 = num2 - str2;

console.log(result2);

//comparison
var num3 = 7;

var str3 = "7";

console.log(num3 == str3);

//=== means it is strict. It HAS to be...
var num4 = 7;

var str4 = "7";

console.log(num4 === str4);

//boolean example

var num6 = "";

var bool6 = Boolean(num6);

console.log(bool6);

//comparison with different data types

let num8 = 10;

let str6 = "10";

if (num8 == str6) {
    console.log("Equal");
} else {
    console.log("Not equal");
}