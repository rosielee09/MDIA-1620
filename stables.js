// __      __       .__                             ._.
// /  \    /  \ ____ |  |   ____  ____   _____   ____| |
// \   \/\/   // __ \|  | _/ ___\/  _ \ /     \_/ __ \ |
//  \        /\  ___/|  |_\  \__(  <_> )  Y Y  \  ___/\|
//   \__/\  /  \___  >____/\___  >____/|__|_|  /\___  >_
//        \/       \/          \/            \/     \/\/
// ,/|         _.--''^``-...___.._.,;
// /, \'.     _-'          ,--,,,--'''
// { \    `_-''       '    /}
// `;;'            ;   ; ;
// ._.--''     ._,,, _..'  .;.'
// (,_....----'''     (,..--''


//------------------------- Seting up shop -------------------------//
let horses=[];
let visitorMessage =`Welcome to our Stable! We hope you enjoy your visit.` 
const LATE_PAYMENT_FEE = 50;
let availableStalls = 10;


//------------------------- First day -------------------------//
function Horse(name, nickname, favTreat, age, monthlyRent, isInside, hobby, favColor){
    this.name = name;
    this.nickname = nickname;
    this.favTreat = favTreat;
    this.age = age;
    this.monthlyRent = monthlyRent;
    this.isInside = isInside;
    this.hobby = hobby;
    this.favColor = favColor;

    this.intro = function() {
        return `Hi! Let me introduce my horse ${this.name} who is ${this.age} years old, and loves  ${this.favTreat}.`;
    }

    this.getFavColor = function(){
        return `${this.name}'s favorite color is ${this.favColor}`;
    }
}

const horse1 = new Horse("Jenny", "Jen", "carrots", 3, 300, true, "running", 'pink');
const horse2 = new Horse("Rose", "Rosie", "apples", 5, 280, false, "drawing", "blue" );
const horse3 = new Horse("Lisa", "Li", "radish", 7, 250, true, "walking", "green");

horses.push(horse1, horse2, horse3);

const newHorse = {
    name: "Jisu",
    nickname: "Blink",
    favTreat: "cucumber",
    age: 6,
    monthlyRent: 150,
    isInside: false,
    hobby: "singing",
    favColor:"lavender",

    intro: function() {
        return `Hi! Let me introduce my horse ${this.name}. ${this.name} is ${this.age} years old, and ${this.name}'s favorite snack is ${this.favTreat}.`;
    },

    getFavColor: function(){
        return `${this.name}'s favorite color is ${this.favColor}`;
    },

}
horses.push(newHorse);

horse1.isHungry = true;
horse2.isHungry = false;
horse3.isHungry = true;
newHorse.isHungry = false;

//------------------------- Stable roster -------------------------//


// [
//     Horse {
//       name: 'Jenny',
//       nickname: 'Jen',
//       favTreat: 'carrots',
//       age: 3,
//       monthlyRent: 300,
//       isInside: true,
//       hobby: 'running',
//       favColor: 'pink',
//       intro: [Function (anonymous)],
//       getFavColor: [Function (anonymous)],
//       isHungry: true
//     },
//     Horse {
//       name: 'Rose',
//       nickname: 'Rosie',
//       favTreat: 'apples',
//       age: 5,
//       monthlyRent: 280,
//       isInside: false,
//       hobby: 'drawing',
//       favColor: 'blue',
//       intro: [Function (anonymous)],
//       getFavColor: [Function (anonymous)],
//       isHungry: false
//     },
//     Horse {
//       name: 'Lisa',
//       nickname: 'Li',
//       favTreat: 'radish',
//       age: 7,
//       monthlyRent: 250,
//       isInside: true,
//       hobby: 'walking',
//       favColor: 'green',
//       intro: [Function (anonymous)],
//       getFavColor: [Function (anonymous)],
//       isHungry: true
//     },
//     {
//       name: 'Jisu',
//       nickname: 'Blink',
//       favTreat: 'cucumber',
//       age: 6,
//       monthlyRent: 150,
//       isInside: false,
//       hobby: 'singing',
//       favColor: 'lavender',
//       intro: [Function: intro],
//       getFavColor: [Function: getFavColor],
//       isHungry: false
//     }
//   ]


//---------------------- Growing business ----------------------//

let totalHorse = horses.length;
availableStalls = availableStalls - totalHorse;

if(availableStalls < 2)
    console.log("We need to build more stalls");
else
    console.log(`We have ${availableStalls}stalls avaiable!`);