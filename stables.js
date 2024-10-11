//Lesson-3
let horseName = "Stephanie";
console.log(horseName);
horseName = "Charlie";
console.log(horseName);
let horseAge = 5;
console.log(horseAge);
let isHorseInside = true;
console.log(isHorseInside);

//Lesson-4
console.log(typeof horseName);
console.log(typeof horseAge);
const STABLE_MONTHLY_FEE = 100;
// STABLE_MONTHLY_FEE = 199;// re-assigning constant - error
console.log(STABLE_MONTHLY_FEE);

console.log(STABLE_MONTHLY_FEE * 3);
console.log(STABLE_MONTHLY_FEE - 3);
console.log(50/3);
console.log("Hi " + "There");
console.log("Hi " + 2); //hi 2 type coersion
console.log(2 - "2"); // type coercion, result:0
console.log(2 - "hi"); // NaN
console.log(true + 1); // 2, true: 1 / false:0
console.log("Stable monthly fee is " + STABLE_MONTHLY_FEE);
console.log("Stable monthly fee is " + horseName + "and he is " + horseAge);
console.log(`Stable monthly fee is  ${STABLE_MONTHLY_FEE}`); // backticks

//Lab4
let horseNickName = "LuluLala";
const STABLE_MONTHLY=100;
console.log(`Let me introduce my horse. He's nickname is ${horseNickName}`);
console.log(`I would save 10%, $${STABLE_MONTHLY/10 *3} if I stay 3 months`);

//Lessoon-5 Code
// if(3 <4) {
//     console.log("🍕 this is getting output becuase the expression above evaled to true!")
// }

// if(isHorseInside) {
// console.log(`🐎 ${horseName} is inside`);
// } else {
//     console.log(`🌧️ ${horseName} is outside`)
// }

// if(horseAge===10) {
//     console.log(`🐎 Our horse is old!`);
//     } else if(horseAge === 9){
//         console.log(`🌧️ Our horse is young!`)
//     } else {
//         console.log("Our horse is still pretty young")
//     }

// horseName = "🍓Strawberry"



let visitingHorseName = "🥕Carrot"


if((horseName === "Charlie" && isHorseInside) && visitingHorseName==="🥕Carrot" ) {
    console.log(`${horseName} has a visitor and needs to come outside to see ${visitingHorseName}`);
}else if((horseName==="Charlie" && isHorseInside) && visitingHorseName==="🍓 Strawberry"){
    console.log(`${horseName} is outside with  ${visitingHorseName}`);
} else{
    console.log(`${horseName} needs to figure what is going on`);
}

//Lab5
if(isHorseInside) {
console.log(`🐎 ${horseName} is inside`);
} else {
    console.log(`🌧️ ${horseName} is outside`)
}

//Lesson-6
let word = "Rainbow";
console.log(word.charAt(4));
console.log(word.length);
let horseNames = ["Charlie", "Strawberry", "Beans"];
let horseAges = [horseAge, 2, 10];
let horseLocation = [isHorseInside, false, true];
console.log(horseNames.length); //3
console.log(horseNames);
horseNames.push("Lettuce"); //adding at the end of the array
console.log(horseNames);
console.log(horseNames[3]);
console.log(horseLocation[2]);
console.log(`welcome to my stables, There are ${horseNames.length} horses are staying:)`);

if(horseNames[0] ==="Charlie") {
    console.log("Hi Charlie!");
}

if(horseNames.length < 5) {
    console.log("These stalbes are unpopular");
}

//Lab 6 
//output an introduction to your horses
// - output hweter your horsese are inside or outside!

// In readme file
// 3 confushing things, 3 things you have a solid understand of(optional), analogies that you use + gif(optional)

console.log(`welcome to my stables, There are ${horseNames.length} horses are staying:). They are ${horseNames}`);
if(isHorseInside) {
    console.log(`🐎 ${horseNames} are inside`);
    } else {
        console.log(`🌧️ ${horseName} are outside`)
    }