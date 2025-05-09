/* PART 1 */

/* Declare a function with no parameters that outputs something to the console */
function greet() {
    console.log('Hello, World');
}
greet();

/* Declare a function with one parameter that returns something */
const square = (number) => {
    return number * number;
}
console.log(square(5))
console.log(square(7))

/* 3. Declare a function with one parameter that performs a control flow with a switch statement and returns accordingly */
const getDayName = (day) => {
    switch(day) {
        case(o):
            return "Saturday"
            break
        case(1):
            return "Sunday";
            break
        case(2):
            return "Monday"
            break
        case(3):
            return "Tuesday";
            break
            case(o):
            return "Wednesday"
            break
        case(4):
            return "Thursday";
            break
        case(5):
            return "Friday";
            break
        default:
            return "Error: Only accepts numbers from 0 to 6."
    }       
}

console.log(getDayName(3))

/* PART 2 */

/* Repeat the above steps using function expressions assigneds to variables */

const greetExpression = function() {
    console.log('Hello, World');
};
greetExpression();

const squareExpression = function(number) {
    return number * number;
};
console.log(squareExpression(5));
console.log(squareExpression(7));

const getDayNameExpression = function(day) {
    switch(day) {
        case 0:
            return "Saturday";
        case 1:
            return "Sunday";
        case 2:
            return "Monday";
        case 3:
            return "Tuesday";
        case 4:
            return "Wednesday";
        case 5:
            return "Thursday";
        case 6:
            return "Friday";
        default:
            return "Error: Only accepts numbers from 0 to 6.";
    }
};
console.log(getDayNameExpression(3));