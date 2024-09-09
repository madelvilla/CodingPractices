// var apprentice = ['Jemima', 'Maria', 'David', 'Lourdes'];

// var numOfApprentices = apprentice.length;

// console.log(`There are ${numOfApprentices} in this group.`);//first try
// console.log(`There are ${apprentice.length} people in ${apprentice[3]}'s group.`); //other example

// if (apprentice.includes('Justin')) {
//     console.log('Justin is awesome');
// } else {
//     console.log('We got this!');
// }



// let fruits = ['apple', 'mango', 'orange', 'passionfruit'] //this is an array of fruits

// console.log(fruits);
// console.log(fruits[1]);

// Modified array
// fruits [1] = 'grapes';
// console.log(fruits); //output: [ 'apple', 'grapes', 'orange', 'passionfruit' ]

// fruits.unshift('strawberries');
// console.log(fruits);

// fruits.pop(); // removes the last element of the array
// console.log(fruits);

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }


//LOOPS CODE ALONG WITH OSIEL

// array of zoo animals

// var zooAnimals = ["zebra", "rhino", "giraffe", "owl"];

// // creating a for loop to print out each zoo animal

// for (let i = 0; i < zooAnimals.length; i++) {

// //console.log the animal at index position i to the console
// console.log(zooAnimals[i]);
// }


// Loops from 0 to 4

// for (let i = 0; i < 5; i++) {
//     // prints a message and the current i value to the console EXAMPLE "I am 0 -4"

//     console.log("I am " + i);
// }

// same thing as
//console.log("I am 0") multiple times for different numbers

// loop through an object

var moviePatrons = [ //this is an array of objects

{name:"Tom", age: 16},
{name:"Ashley", age: 31},
{name:"Osiel", age: 23},
{name:"Sarah", age: 18},
{name:"Malcolm", age: 15},
{name:"Alvin", age: 22},
];


function canWatchMovies(array){

    for(let i = 0; i < array.length; i++) {
        if(array[i].age >= 17){
            console.log(`${array[i].name} can watch R Rated movies.`);
        } else {
            console.log(`${array[i].name} can NOT watch R Rated movies`);
        }
    }
}

canWatchMovies(moviePatrons);