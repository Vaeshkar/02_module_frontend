/* Comparisons Exercises WBS JS Module 02 */

// Variables
let num1 = 5;
let str1 = '5';
let num2 = 10;
let str2 = '10';
let boolTrue = true;
let boolFalse = false;

// Compare 5 and '5' using simple and strict equality
console.log("5 == '5':", num1 == str1);   // true (simple equality, type coercion)
console.log("5 === '5':", num1 === str1); // false (strict equality, no type coercion)

// Compare 10 and '10' using simple and strict inequality
console.log("10 != '10':", num2 != str2);   // false (simple inequality, type coercion)
console.log("10 !== '10':", num2 !== str2); // true (strict inequality, no type coercion)

// Check if 5 is greater than 3 and if '5' is greater than '3'
console.log("5 > 3:", num1 > 3);       // true
console.log("'5' > '3':", str1 > '3');  // true (string comparison by character code)

// Evaluate whether 10 is less than 20 and if '10' is less than '20'
console.log("10 < 20:", num2 < 20);     // true
console.log("'10' < '20':", str2 < '20'); // true (string comparison by character code)

// Determine if 5 is greater than or equal to 5 and if '5' is greater than or equal to 5
console.log("5 >= 5:", num1 >= 5);        // true
console.log("'5' >= 5:", str1 >= 5);      // true (string '5' coerced to number)

// Assess whether 10 is less than or equal to 20 and if '10' is less than or equal to '20'
console.log("10 <= 20:", num2 <= 20);      // true
console.log("'10' <= '20':", str2 <= '20'); // true (string comparison by character code)