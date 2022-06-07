console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
console.log("EXERCISE 1:\n==========\n");
let a = 20;
let b = 4;
let add = a + b;
console.log("add: ", add);
let minus = a - b;
console.log("minus: ", minus);
let multiply = a * b;
console.log("multiply: ", multiply);
let dividing = a / b;
console.log("dividing: ", dividing);
console.log("modulus: ", a % b);
console.log("expontation: ", a ** b);
console.log("Increment pre: ", ++a, a);
console.log("Increment post: ", a++, a);
console.log("Decrement pre: ", --a, a);
console.log("Decrement post: ", a--, a);

// Exercise 2
console.log("EXERCISE 2:\n==========\n");
let num = 11;
let str = "11";
let str2 = "eleven";
let isPresent = true;
let firstName = "Frodo";
let lastName = "Baggins";
console.log("num+str ", num + str);
console.log("num+str2 ", num + str2);
console.log("num+isPresent ", num + isPresent);
console.log("firstName + num :", firstName + num);
console.log("isPresent+str ", isPresent + str);
console.log("firstName+lastName ", firstName + " " + lastName);
// Exercise 3
// Added _2 to variables that were used in Exercise 2 to avoid errors

console.log("EXERCISE 3:\n==========\n");
let val = 5;
let str_2 = "5";
let str2_2 = "five";
let isPresent_2 = false;
console.log("val == str_2 ", val == str_2);
console.log("val === str_2 ", val === str_2);
console.log("!isPresent_2 ", !isPresent_2);
console.log(
  "eleven” == str2 && val >= str ",
  "eleven" == str2_2 && val >= str_2
);
console.log("!isPresent || isPresent ", !isPresent || isPresent);
console.log("0==false ", 0 == false);
console.log("0===false ", 0 === false);
console.log("0!=false ", 0 != false);
console.log("0!==false ", 0 !== false);
