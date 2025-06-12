/**
 * Get full Days until next Halloween (31st October)
 * @param {string} day Date Format YYYY-MM-DD
 * @returns {number}
 * @example
 * // returns 2
 * getDaysUntilHalloween("2025-10-29")
 *
 * @example
 * // returns 0
 * getDaysUntilHalloween("1999-10-31")

* @example
 * // returns 365
 * getDaysUntilHalloween("1999-11-01")

* @example
 * // returns 364
 * getDaysUntilHalloween("2004-11-01")
 *
 */
function getDaysUntilHalloween(day) {
  // TODO: Use Date and it's methods to calculate how many days are left until the next spooky season.
  let targetHalloween;

  const currentDate = new Date(day);
  const year = currentDate.getFullYear();
  const msPerDay = 1000 * 60 * 60 * 24;

  const halloweenThisYear = new Date(`${year}-10-31`);

  if (currentDate > halloweenThisYear) {
    targetHalloween = new Date(`${year + 1}-10-31`); // next year
  } else {
    targetHalloween = halloweenThisYear; // this year
  }

  const differentMonths = targetHalloween - currentDate;
  const differentDays = Math.floor(differentMonths / msPerDay);
  
  return differentDays;
}

export default getDaysUntilHalloween;
