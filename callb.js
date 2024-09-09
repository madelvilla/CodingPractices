//CALLBACK FUNCTION

//a function within a function???

//set time out function -- 

function fetchUserData (userID, callback) { //here we created a function

    setTimeout(() => {
        const fakeUserData = {
            id: userID,
            username: "Lourdes",
            email: "madelvilla@example.com"
        };
        callback(fakeUserData)
    }, 2000); //2 - sec delay
}

function displayUserData(userData){

    console.log("User Data:");
    console.log(userData);
}

const userID = 123;
fetchUserData(userID, displayUserData);
console.log("Fetching your data...");