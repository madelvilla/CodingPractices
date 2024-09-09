// let arr = [19, 7, 25, 3, 50]

// function sumTwoSmallestNumbers(numbers){
//     numbers = numbers.sort(function(a, b){return a - b});
//     return numbers[0] + numbers[1]
// };

// console.log(sumTwoSmallestNumbers(arr));

// VARIABLE MUTATION EXAMPLE VVVVVVVVVV

// var instructor = "Ana";

// var instructor;

// console.log(instructor)

// instructor = "Osiel";

// console.log(instructor); 


// var greet = "Hello C15 :)";

// var year = 2024;

// var yearString = year.toString();

// console.log(greet + yearString);


//REAL LIFE EXAMPLE
//assume the user enters age in a form (stored as a string)

let ageInput = "25"

//performing type coercion to check if user is eligible to vote

if (Number(ageInput) >= 18) {
    console.log("USER is eligible to vote")
} else {
    console.log("USER is not eligible to vote")
}

// VARIABLE MUTATION REAL LIFE EXAMPLE

//shopping cart application scenario

let quantity = 3;

let displayQuantity = quantity.toString() + " " + "items in cart";

console.log(displayQuantity)