// console.log({name:"Rowan", age:"436", hair: "silver" })

// a roundabout way to make a class??
//prototype chain

//every function has a prototype
// essentially a class
//constructor function
function Person (name, age, hair) {
    this.name = name;
    this.age = age;
    this.hair = hair;
};

Person.prototype.talk = function () {return this.name + " says fight"};
// basically writing a function in reverse
const person1 = new Person ("Lorcan", 359, "black");
const person2 = new Person ("Aelin", 20, "blonde");
const person3 = {
    name: "Manon",
}

console.log(person3.name + " says fight")
console.log(person1.talk());
console.log(person2.talk());
