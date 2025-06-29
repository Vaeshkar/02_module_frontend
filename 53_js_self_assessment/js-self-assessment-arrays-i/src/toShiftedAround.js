/**
 * Switches places of values at first and last index without mutating the original array
 * @param {Array<any>} arr
 * @returns {Array<any>}
 */
function toShiftedAround(arr) {
  // TODO: Given an Array 'arr', return an array where the first and the last values changed places ([1, 2, 3, 4, 5] -> [5, 2, 3, 4, 1])
  //  TODO: leave the original Array intact!
  const originalArray = arr;
  if (!arr || arr.length <= 1) {
    return arr;
  } else {
    let swappedArray = [...arr];
    let tempValues = swappedArray[0];
    swappedArray[0] = swappedArray[swappedArray.length - 1];
    swappedArray[swappedArray.length - 1] = tempValues;
    return swappedArray;
  }



  // return 'NOT IMPLEMENTED';
}

export default toShiftedAround;
