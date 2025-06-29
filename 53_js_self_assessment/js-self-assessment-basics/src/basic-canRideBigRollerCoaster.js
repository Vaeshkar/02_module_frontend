/**
 * Checks if body height is above minimum requirements of *122cm* to go for a jolly ride.
 * @param {number} bodyHeight body height in cm
 * @returns {boolean}
 */
function canRideBigRollerCoaster(bodyHeight) {
  // TODO: Use comparison to check if requirements are met.
  // TODO: Make sure that 'bodyHeight' is a number, otherwise return undefined
  const requirement = 122;
  try {
    if (typeof bodyHeight !== "number") {
      return undefined;
    }
  return bodyHeight >= requirement; // direct boolean
  } catch (e) {
    console.error(e);
    return undefined;
  }
  // return 'NOT IMPLEMENTED';
}

export default canRideBigRollerCoaster;
