"use strict";
//Determine the eligibility for a Driver License
/* Yet to be perfected because of the character input differences */

const age = parseInt(prompt("Enter your age:"));
const goodSight = prompt(
  "Do you have good sight? Enter Yes or No:"
).toLowerCase();
if (age >= 18 && goodSight === "yes") {
  console.log("You are eligible for Driver's License");
} else {
  console.log(`You are not eligible for Driver's License`);
}
