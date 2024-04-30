//You are given an array of numbers. Your task is to use iteration methods to filter and transform this array.

const numbers = [10, 13, 20, 25, 38, 35, 40];

/*****************************************************************
Part 1: Filtering

Write code to perform the following tasks using the filter method:
Q1) Create a new array containing numbers that are greater than or equal to 25.
 
Q2) Create a new array containing numbers that are divisible by 5.
******************************************************************/
// Q1
let newNu = numbers.filter((num) => {
  return num >= 25;
});
console.log(newNu);

// Q2
let divNum = numbers.filter((num) => {
  return num % 5 == 0;
});
console.log(divNum);
/*****************************************************************
Part 2: Mapping

Write code to perform the following tasks using the map method:

Q3) Create a new array that contains each number squared.
Q4) Create a new array that contains each number multiplied by 2.
******************************************************************/
//Q3
let sqNum = numbers.map((num) => {
  return num * num;
});
console.log(sqNum);

//Q4
let multiplyNum = numbers.map((num) => {
  return num * 2;
});
console.log(multiplyNum);
/*****************************************************************
Part 3: Combining Filtering and Mapping

Combine the filter and map methods to perform the following tasks:

Q5) Filter the numbers that are greater than or equal to 20 and then square each of them.
Q6) Filter the numbers that are divisible by 5 and then multiply each of them by 3.
******************************************************************/
//Q5
let graterThanNUM = numbers.filter((num) => {
  return num >= 20;
});
let sq = graterThanNUM.map((num) => {
  return num * 2;
});
console.log(sq);

//Q6
let div5Num = numbers.filter((num) => {
  return num % 5 == 0;
});
let mul3Num = div5Num.map((num) => {
  return num * 3;
});
console.log(mul3Num);
