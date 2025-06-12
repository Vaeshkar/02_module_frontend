/**
 * Performs a basic arithmetic calculation between two numbers.
 *
 * @typedef {"+" | "-" | "*" | "/"} Operator - The supported arithmetic operators.
 * @param {number} a The first number.
 * @param {number} b The second number.
 * @param {Operator} operator The arithmetic operator to use.
 * @returns {number} The result of the calculation, or undefined if the operator is not allowed or division by zero occurs.
 */
function calculate(a, b, operator) {
  // TODO: Use if/else or switch to check for the arithmetic operation and return the result
  // TODO: In case of a not allowed operator return undefined
  const operators = ['+', '-', '*', '/'];
  try {
    if (operators.includes(operator)) {
      switch (operator) {
        case '+':
          return a + b;
        case '-':
          return a - b;
        case '*':
          return a * b;
        case '/':
          return a / b;
      }
    } else {
      return undefined;
    }
  } catch (e) {
    console.error(e);
  }
  // return 'NOT IMPLEMENTED';
}

export default calculate;
