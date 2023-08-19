"use strict";
//Determine the eligibility for a Driver License
/* Yet to be perfected because of the character input differences */

const age = parseInt(prompt("Enter your age:"));
const goodSight = parseInt(prompt("Do you have good sight? Enter Yes or No:"));
if (age >= 18 && goodSight) {
  console.log("You are eligible for Driver's License");
} else {
  console.log(`You are not eligible for Driver's License`);
}
