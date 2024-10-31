const STABLE_MONTHLY_FEE = 100;

// Single horse Charlie Info
let horseName = "Charlie";
let horseNickname = "Chuck";
let horseAge = 5;
let isHorseInside = true;



// info about multiple horses in my stables
let horseNames = [horseName, "Straberry", "Beans"];
let horseAges= [horseAge, 2, 10];
let horseNicknames = [horseNickname, "Yellow", "Hallow"];
let areHorseseInside =[isHorseInside, false, true];


let stableIntroduction = `Welcome to ${horseName}'s stable`;
let horseIntro = `There are ${horseNames.length} horses staying at my stables: ${horseNames[0]}, ${horseNames[1]}, ${horseNames[2]}!`


function getHorseLocation(horse) {
    if(areHorseseInside[horse]){
        return " is inside."
    }
    return " is outside";
}



function getHorseNicknames(horse, friend) {
    let string=`${horseNames[horse]}'s nickname is ${horseNicknames[horse]}, and they have a friend named ${horseNames[friend]}, who is
    nicknamed ${horseNicknames[friend]}`
    
    return string;
}


let horseNickNameString = getHorseNicknames(0,1);
console.log(horseNickNameString);