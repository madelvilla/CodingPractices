
// function consecutive(arr, a, b) {
//     const opts = [a + "" + b, b + "" + a]
//     console.log(opts)
//     let result;

//     for (let i = 0; i < arr.length; i++) {
//         const win = [arr[i], arr[i+1]].join("")
//         console.log(win)
//         const match = opts.indexOf(win) !== -1

//         if (match) {
//             result = match
//         } else {
//             if (result !== true) {
//                 result = match
//             }
//         }
//     }

//     return result
// }

// console.log(consecutive([1,2,3,4],1,2))





//04-18
let num1 = 5;

if (num1 % 2 == 0) {
    console.log("The number is even.");
} else {
    console.log(num1 + " is an odd number.");
}



let score= 90;

let grade = score >= 60 ? 'Passing' : 'Failing';


 