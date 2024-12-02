// create a function that checks to see if a password is long enoug
// parameter: password, requiredlength and compare



// function passwordCheck(password, requiredLength){
//     if (password.length >= requiredLength){
//         console.log("Password accepted!");
//     } else {
//         console.log("Your password is too short!")
//     }
// }

// passwordCheck(123456, 5);
// passwordCheck("fdsfdsjgkljdskaljfioewjp", 100);



// Create a function that checks if a username meets length and character requirements. The function will take in a username and a minLength as parameters. It should check:

// If the username has a length greater than or equal to minLength.
// If the username contains at least one numeric character.
// If both conditions are met, display "Username accepted!".
// If the username is too short, display "Username is too short!".
// If the username doesn't contain a number, display "Username must include a number!".

function usernameCheck(username, minLength){
    if(username.length >= minLength && typeof username == number){
        console.log("Username Accepted!");
    } else {
        console.log("Username is too short!");
    }

}

usernameCheck(rosielee2, 4);