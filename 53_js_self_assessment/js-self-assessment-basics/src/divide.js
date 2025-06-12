/**
 * A function that implements division
 * @param {number} a
 * @param {number} b
 * @returns {number|"Division by Zero"}
 */
function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Division by Zero");
    }
    return a / b;
  } catch (e) {
    return "Division by Zero";
  }
}

export default divide;
