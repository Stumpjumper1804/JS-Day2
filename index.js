//Basic Ex1

// let temp = Math.floor(Math.random() * 31 -5);
// console.log(temp);

// if (temp < 10) {
//   console.log("The weather is cold.");
// } else {
//   console.log("The weather is moderate.");
// }

////////////////////////////////////////////////////////////////////////////////

//Basic Ex2

// let food = ["hamburger", "pizza", "lasagna", "icecream", "vegetables"];

// function randomFood () {
//   let index = Math.floor(Math.random() * 5);
//   console.log(index);
//   let pickedFood = food [index];
//   return pickedFood;
// }

// console.log(randomFood());

///////////////////////////////////////////////////////////////////////////

//Basic Ex3

// function crystalGazer (children, partnerName, geoLocation, job) {
//   document.write(`You will be a ${job} in ${geoLocation}, and married to ${partnerName} with ${children} kids.`);
// }

// crystalGazer(2, "Julia", "Vienna", "Software Developer");

////////////////////////////////////////////////////////////////////////////

//Basic Ex4

// function ageCalculator (birthYear, currYear) {
//   let ageOpt1 = currYear - birthYear;
//   let ageOpt2 = (currYear - 1) - birthYear;

//   // let result = [ageOpt1, ageOpt2];
//   let output = `You are either ${ageOpt1} or ${ageOpt2} years old.`

//   return output;
// }

// console.log(ageCalculator(1970, 2024));

////////////////////////////////////////////////////////////////////////////

//Basic Ex5

// function ageCalculator (birthYear) {
//   let currYear = new Date().getFullYear();
//   let ageOpt1 = currYear - birthYear;
//   let ageOpt2 = (currYear - 1) - birthYear;

//   // let result = [ageOpt1, ageOpt2];
//   let output = `You are either ${ageOpt1} or ${ageOpt2} years old.`

//   return output;
// }

// console.log(ageCalculator(1980));

///////////////////////////////////////////////////////////////////////////

//Basic Ex6

// const convertDegrees = (deg) => {
//   let radians = deg * (Math.PI / 180);
//   return radians;
// }

// console.log(convertDegrees(90));

// //shortened function
// const convertDegrees = deg => deg * (Math.PI / 180);

// console.log(convertDegrees(80));

//////////////////////////////////////////////////////////////////////////

// Ex 7 | Area and Volume of a box

// function boxCalc(width, height, depth) {
//   let area = width * height;
//   let volume = width * height * depth;

//   let output = `The area of the box is: ${area}. The volume of the box is: ${volume}.`;
//   return output;
// }

// console.log(boxCalc(2, 7, 5));

///////////////////////////////////////////////////////////////////////////

//Inter Ex1

// function capitalizeFirstLetter(str) {
//   let capitalizedFirstLetter = str.charAt(0).toUpperCase();
//   let restOfStr = str.substring(1);
//   console.log(capitalizedFirstLetter);
//   console.log(restOfStr);

//   let output = capitalizedFirstLetter + restOfStr;
//   return output;
// }

// console.log(capitalizeFirstLetter("my name is Albert."));

///////////////////////////////////////////////////////////////////////////

// Inter Ex 2 | Average Grade

// function calcGrades(math, physics, english) {
//   let sum = math + physics + english;
//   let avg = sum / 3;
//   let output = [sum, avg];
//   return output;
// }

// let math = Number(prompt("Enter your Math grade as a number.", "1"));
// let physics = Number(prompt("Enter your Physics grade as a number.", "1"));
// let english = Number(prompt("Enter your English grade as a number.", "1"));

// if (
//   Number.isInteger(math) &&
//   Number.isInteger(physics) &&
//   Number.isInteger(english)
// ) {
//   console.log("Sum: " + calcGrades(math, physics, english)[0]);
//   console.log("Average: " + calcGrades(math, physics, english)[1]);
// } else {
//   console.log("You have to input three numbers!");
// }

// //Different approach:

// const calcGrades = (math, physics, english) => {
//   if (
//     Number.isInteger(math) &&
//     Number.isInteger(physics) &&
//     Number.isInteger(english)
//   ) {
//     let sum = math + physics + english;
//     // console.log(sum);
//     let avg = sum / 3;
//     // console.log(avg);
//     let output = [sum, avg];
//     return output;
//   }
// };

// try {
//   console.log("Sum: " + calcGrades(3, 4, 5)[0]);
//   console.log("Average: " + calcGrades(3, 4, 5)[1]);
// } catch (error) {
//   console.log("wrong input!");
// }

////////////////////////////////////////////////////////////////////////////

//Advanced Ex 1 | Time Convert

// function timeConvert(min) {
//   // e.g. 200 min
//   let hours = Math.floor(min / 60); // e.g. 3
//   let division = (min / 60).toFixed(6); //e.g. 3.333333

//   let decimal = division.indexOf("."); // 1
//   let minutesPart = division.substring(decimal); //.333333
//   let minutes = Math.ceil(minutesPart * 60); // 20

//   console.log(hours + "  " + minutes);
//   return `${min} minutes = ${hours} hour(s) and ${minutes} minute(s).`;
// }

// console.log(timeConvert(200));

//////////////////////////////////////////////////////////////////////////////
