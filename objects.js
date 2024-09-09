// // CREATING AN OBJECT

// let instructor = {
//     firstName: "Latori",
//     lastName: "Miller",
//     age: "26",
//     hasKids: true,
//     kids: ["Malachi", "Lorelai", "Lilah"]
// };
// // fyi it is normal to see objects inside of objects

// // parseInt means 

// //creating an object literal
// let car = { }; 
// // if you switch this to const it will create an error, but var and let work ^^^
// // const became an error because we try to reassign it some values down below

// //access information in an object
// console.log(instructor.firstName);
// // putting the "."(dot method) is called chaining ^^^^
// console.log("car object", car);

// console.log("kids", instructor.kids.length);

// car = {
//     make: "Toyota",
//     model: "Corolla",
//     year: 2024,
//     color: "Black"
// }

// car.price = 30000;

// console.log("Car Object", car);

// // add a method to an object

// // challenge: create a userProfile object that contains the following properties: username, email, and age

// let userProfile = {
//     userName: "itsAname",
//     email: "example@email.com",
//     birthYear: 1687,
//     calcAge: function(){
//         return 2024 - this.birthYear;
//     }
// };
// //calcAge is a method ^^^^

// //add a method that calculates the age of the user based on the current year and the year the user was born

// console.log("This user is old", userProfile.calcAge());
// console.log("User Profile", userProfile);
// console.log("Instructor", instructor);

// //create object called apprentices
// let apprentices = {
//     saysHello: false,
//     names: ["Rudy", "Jasmine", "Jada", "Makayla"]
// };

// // create a function that accepts an object
// function sayHello(obj) {
//     if(obj.saysHello === true){
//         console.log("You are friendly");
//     } else {
//         console.log("Who didn't speak?", obj.names);
//     }
// }
// sayHello(apprentices);

// sayHello({
//     saysHello: true,
//     names: ["Zari"]
// })


// CREATE A NESTED OBJECT
let clothing = {
    shirts: "short sleeve", //string
    quantity: 10, //number data type
    onSale: true, //boolean
    sizes: ["small", "medium", "large"], //array
    apparel: {
        hats: "baseball hat",
        quantity: 20,
        colors: {
            standard: ["black", "white"],
            custom: "brown"
        }
    },
    // this is a method vvvvvvvv
    calculateProfit: function() {
        return (10 * this.quantity)
    }
}

console.log(clothing.shirts);
console.log(clothing["quantity"]); //bracket method
console.log(clothing.apparel.hats);
// console.log(clothing.apparel.colors.custom);
console.log(clothing.apparel.colors["standard"][0]); //bracket notation
console.log(clothing["apparel"]["colors"]["custom"]); //bracket notation
