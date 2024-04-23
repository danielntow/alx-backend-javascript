/**
 * Iterates through an object of employee departments and returns a string
 * containing all employee names separated by '|'.
 * @param {Iterator} reportWithIterator - The iterator object containing employee names.
 * @returns {string} A string containing all employee names separated by '|'.
 */
export default function iterateThroughObject(reportWithIterator) {
  // Convert the iterator object to an array using the spread operator
  const employeesArray = [...reportWithIterator];

  // Join the employee names with the '|' separator
  const employeeNames = employeesArray.join(" | ");

  // Return the concatenated string of employee names
  return employeeNames;
}
