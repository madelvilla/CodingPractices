// document.body.innerHTML = 'Pause'; 
// //global object/node - can access body element - can access inner html
// console.log("Always greet people.");

// GRAB THE DOM ELEMENTS 
const numberElement = document.getElementById("number");
const increaseElement = document.getElementById("increaseBtn");
const decreaseElement = document.getElementById("decreaseBtn");

// set the value of number
let number = 0;

// create a function to update the number on the UI
function updateNumber() {
    numberElement.textContent = number;
}

//when we click the button we want something to happen
//adding an eventlistener for the increase button
increaseBtn.addEventListener("click", function(){
    number++;
    updateNumber();
})

decreaseBtn.addEventListener("click", function(){
    number--;
    updateNumber();
})

updateNumber();