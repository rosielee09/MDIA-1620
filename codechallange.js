// create a function that checks to see if a password is long enoug
// parameter: password, requiredlength and compare



function passwordCheck(password, requiredLength){
    if (password >= requiredLength){
        console.log("Password accepted!");
    } else {
        console.log("Your password is too short!")
    }
}

passwordCheck(123456, 5);
passwordCheck("fdsfdsjgkljdskaljfioewjp", 100);