// function calcAge(currentYear, yearOfBirth) {

//     let age =  currentYear - yearOfBirth;
//     return age;
//     }

//       let myAge = calcAge(2022, 1985); // function CalcAge is called
    

//     // returned value will be stored in myAge variable

//      console.log(myAge); // output: 36 (me: output = 37)


// let today = new Date();
// console.log(today);

// console.log(today.getDate());
// console.log(today.getDay());
// console.log(today.getTime());
// console.log(today.getMonth());
// console.log(today.getHours());

//////////////////////////////////////////////////////////////////////////////////////////////

//Basic Ex1
// let temp = Math.floor(Math.random() * 31 -5);
// console.log(temp);

// if (temp < 10) {
//   console.log("The weather is cold.");
// } else {
//   console.log("The weather is moderate.");
// }


//Basic Ex2
// let food = ["hamburger", "pizza", "lasagna", "icecream", "vegetables"];

// function randomFood () {
//   let index = Math.floor(Math.random() * 5);
//   console.log(index);
//   let pickedFood = food [index];
//   return pickedFood;
// }

// console.log(randomFood());


//Basic Ex3
// function crystalGazer (children, partnerName, geoLocation, job) {
//   document.write(`You will be a ${job} in ${geoLocation}, and married to ${partnerName} with ${children} kids.`);
// }

// crystalGazer(2, "Julia", "Vienna", "Software Developer");


//Basic Ex4
// function ageCalculator (birthYear, currYear) {
//   let ageOpt1 = currYear - birthYear;
//   let ageOpt2 = (currYear - 1) - birthYear;

//   // let result = [ageOpt1, ageOpt2];
//   let output = `You are either ${ageOpt1} or ${ageOpt2} years old.`

//   return output;
// }

// console.log(ageCalculator(1970, 2024));


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


//Basic Ex6
// const convertDegrees = (deg) => {
//   let radians = deg * (Math.PI / 180);
//   return radians;
// }

// console.log(convertDegrees(90));

// //shortened function
// const convertDegrees = deg => deg * (Math.PI / 180);

// console.log(convertDegrees(80));


// Ex 7 | Area and Volume of a box
  function boxCalc (width, height, depth) {
    let area = width * height;
    let volume = width * height * depth;

    let output = `The area of the box is: ${area}. The volume of the box is: ${volume}.`
    return output;
  }

  console.log(boxCalc(2,7,5));


//Inter Ex1



// Write a JavaScript function to capitalize only the first letter of any given
// string while leaving the rest of the string unchanged. This function will take
// just one parameter: a string.
// For example, if the input is 'i am a web developer', the function should
// transform and return the string as 'I am a web developer'.
// Hint: To accomplish this, you might want to explore the use of the
// JavaScript String charAt() method, along with other string manipulation
// techniques.



