// Run in the browser console of your puzzle input url
// Fetch and format data
const response = await fetch("https://adventofcode.com/2022/day/1/input");
const data = await response.text();
const input = data.split(`\n`);

// part 1
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

// add last elf
elfList.push(calorieCount);

console.log("max: ", Math.max(...elfList));

// part 2 - sort highest to lowest
elfList.sort(function (a, b) {
  return b - a;
});

const topThree = elfList.slice(0, 3);

console.log(
  "top 3: ",
  topThree.reduce((a, b) => a + b, 0)
);
