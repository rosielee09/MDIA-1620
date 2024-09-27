//Lesson-3
let horseName = "Stephanie";
console.log(horseName);
horseName = "Charlie";
console.log(horseName);
let horseAge = 12346;
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
console.log(`Let me introduce my horse. He's nickname is ${horseName}`);
console.log(`I would save 10%, $${STABLE_MONTHLY_FEE/10 *3} if I stay 3 months`);