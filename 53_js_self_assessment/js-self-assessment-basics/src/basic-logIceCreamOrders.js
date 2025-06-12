/**
 * Function that takes any array and logs only Ice Cream to the console
 * @param {Array<any>} someArrayOfStuff  Array with numbers, Objects, bools and some Strings
 */
function logIceCreamOrders(someArrayOfStuff) {
  // TODO: Use a loop to log only the Ice Cream Orders (strings) in 'someArrayOfStuff' to the console
  try {
    for (let element of someArrayOfStuff) {
      if (typeof element !== "string") continue;
      console.log(element);
    }
  } catch (e) {
    console.error(e);
  }

  // return 'NOT IMPLEMENTED';
}

export default logIceCreamOrders;
