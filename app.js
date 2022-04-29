// this is my age. value is cannot change
const myAge = 28;

//this value can change
let earlyYears = 2;

earlyYears *= 10.5;
//console log should be 21
console.log(earlyYears);

//later years is my age - 2
let laterYears = myAge - 2;
//multiples laterYears by 4 
laterYears *= 4;

//console.logging should be 26
console.log(laterYears);

//myAgeInDogYears is the result of early years and later years added
myAgeInDogYears = earlyYears + laterYears;
console.log(myAgeInDogYears);

//myName is david tran and calling it back to be all lowercase
let a = "David Tran"
let myName = a.toLowerCase();
console.log(myName);

//console logs an introductory sentence about my name, human age, and dog age
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)