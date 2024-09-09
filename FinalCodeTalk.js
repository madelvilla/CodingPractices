// Write a JavaScript function that takes in an array of numbers and returns the sum of all the positive numbers in the array.

// Solution. 


function sumPossitives(array){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] > 0){
            sum += array[i]
        } 
    }
    return sum;
}

let num1 = [2, -2, 8, 3,-6];
console.log(sumPossitives(num1));