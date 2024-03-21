// 1.Write a loop to print numbers from 1 to 10.
 console.log("1.print number from 1 to 10 ");
for (let i = 1; i <= 10; i++) {
    console.log(i);
  }


// 2.Write a loop to print even numbers from 1 to 20
console.log("2.print even numbers from 1 to 20 ");

for (let i = 2; i <= 20; i += 2) {
    console.log(i);
  }

  
// 3.Write a loop to print odd numbers from 1 to 15.
console.log("3.print odd numbers from 1 to 15");
 
for (let i = 1; i <= 15; i += 2) {
    console.log(i);
  }

  
// 4.Write a loop to calculate and print the factorial of a number (let's say 5).
console.log("4.calculate and print the factorial of a number (let's say 5) ");

let number = 5;
let factorial = 1;

for (let i = 1; i <= number; i++) {
  factorial *= i;
}

console.log("Factorial of", number, "is", factorial);


// 5.Write a loop to print the multiplication table of a number (let's say 7) up to 10.
console.log("5.print the multiplication table of a number (let's say 7) up to 10 ");

const newNumber = 7;

for (let i = 1; i <= 10; i++) {
  const result = number * i;
  console.log(number + " * " + i + " = " + result);
}

// 6.Write a loop to print the Fibonacci series up to the 10th term.

let num1 = 0;
let num2 = 1;
let nextTerm;

console.log("6.Fibonacci Series:");

for (let i = 1; i <= 10; i++) {
  console.log(num1);
  nextTerm = num1 + num2;
  num1 = num2;
  num2 = nextTerm;
}


// 7.Write a loop to find and print the sum of digits of a number (let's say 123).
console.log("7.find and print the sum of digits of a number (let's say 123)");

const numberNew = 123;
let sum = 0;

// Convert number to string
const numStr = number.toString();

// Iterate over each character in the string
for (let i = 0; i < numStr.length; i++) {
  // Convert character to number and add to sum
  sum += parseInt(numStr[i]);
}

console.log("Sum of digits:", sum);


// 8.Write a loop to print the reverse of a string (let's say "hello").
console.log("8.print the reverse of a string (let's say  hello )");
  

const str = "hello";
let reverseStr = "";

// Iterate over each character of the string in reverse order
for (let i = str.length - 1; i >= 0; i--) {
  reverseStr += str[i];
}

console.log("Reverse of the string:", reverseStr);


// 9.Write a loop to print the square of numbers from 1 to 10.
console.log("9.print the square of numbers from 1 to 10");

for (let i = 1; i <= 10; i++) {
    const square = i * i;
    console.log("Square of", i, "is", square);
  }

  
//   10.Write a loop to find and print the largest element in an array (let's say [3, 7, 2, 9, 5]).
console.log("10.find and print the largest element in an array (let's say [3, 7, 2, 9, 5])");

const array = [3, 7, 2, 9, 5];
let largest = array[0];

for (let i = 1; i < array.length; i++) {
  if (array[i] > largest) {
    largest = array[i];
  }
}

console.log("Largest element in the array:", largest);
