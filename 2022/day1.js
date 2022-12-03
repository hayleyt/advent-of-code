/**
 * Run in the browser console of your puzzle input url
 */

const response = await fetch("https://adventofcode.com/2022/day/1/input");
const data = await response.text();
const input = data.split(`\n`);

let elfList = [];
let calorieCount = 0;

input.forEach((num) => {
  const number = parseInt(num);
  if (number) {
    calorieCount += number;
  } else {
    elfList.push(calorieCount);
    calorieCount = 0;
  }
});

elfList.push(calorieCount);

const topThree = elfList
  .sort((a, b) => b - a)
  .slice(0, 3)
  .reduce((a, b) => a + b, 0);

console.log("max calories: ", Math.max(...elfList));
console.log("top three calories: ", topThree);
