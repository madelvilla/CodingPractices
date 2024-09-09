// function consecutive (arr, a, b) {
//     return Math.abs(arr.indexOf(a) - arr.indexOf (b)) ==1;
// }

// function maskify(str) {
//     return str.slic(0, -4).replace(/./g, '#') + str.slice(-4);
// }

// Array.slice (start, end)

// let string = 'Hippo';
// let newString = string.replace ('racecar', 'billards');
// console.log(newString)

// let array = [1, 2, 3];

// array[-1];
// array[-2];
// array[-3];


//Vyncent

// console.table(createArray(100));

// function createArray(size) {
//     const start = new Date();
//     const array = [];
//     for (let i = 0; i < size; i++) {
//         array.push(Math.floor(Math.random() * 100) + 1);
//     }
//     console.log("creating array: ", (new Date() - start) / 1000);
//     return array;
// }


//Kayla

//given an array of integers, write a function to find the second largest number

// function secondLargestNumber(arr) {
//     let largest = arr[0]; //array starts at index of 0
//     let secondLargest = arr[1]; //array starts at index of 1
//     for (let i = 1; i < arr.length; i++) {
//         if(arr[i] > largest) {
//             secondLargest = largest;
//             largest = arr[i];
//         } else if (arr[i] > secondLargest) {
//             secondLargest = arr[i];
//         }
//     }
//     return secondLargest;
// }

//Zari

//return an array of only odd numbers

//step 1. write a function with an array parameter

// let array = [2, 4, 5, 6, 7];
// index    0   1  2  3  4

// function oddNumber(arr) {
//     //2. write a variable to represent end result

//     const result = [];//not undefined- just an empty array

//     //3. find a way to go through the numbers of the array

//     for(let i = 0; i < arr.length; i++){


//     //4. figuring out if the number is odd

// if (arr[i] % 2 !== 0) {
//     //5. make a new array with those numbers
//     result.push(arr[i]);
// }
//     }
//     return result;
// }

// function oddNumber(arr) {
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] % 2 !== 0) {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }





// const n = 5;

// for (let i = 1; i <= n; i++) {
//     console.log(`I love pizza`);
// }

// const like = ['books', 'movies', 'cats'];

// for (let i = 0; i <= like.length; i++) {
//     console.log(`I like ${like[i]}`);
// }


// 04-30-2024 focus on APIs

//Carlos: create a function that fetches weather data from a public weather API and displays it on the webpage

// async function fetchWeatherData() {
//     console.log('hello');
//     try {
//         const response = await fetch()
//     }
// }

//Makayla : create a function that sends user to an api using the post method



// 05-01 : focus in JSON

//David

