/**
 * Switches places of values at first and last index *by* mutating the original array
 * @param {Array<any>} arr
 */
function shiftAround(arr) {
  // TODO: Given an Array 'arr', return nothing, but let the values at the first and last indexes change places ([1, 2, 3, 4, 5] -> [5, 2, 3, 4, 1])
  //  TODO: this time change the original array and don't return anything!
  let tempValue = 0;
  if (!arr || arr.length <= 1) {
    return;
  } else {
    tempValue = arr[0];
    arr[0] = arr[arr.length -1];
    arr[arr.length -1] = tempValue;
  };
  // return 'NOT IMPLEMENTED';
}

export default shiftAround;
