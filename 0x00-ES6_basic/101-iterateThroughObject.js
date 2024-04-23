export default function iterateThroughObject(reportWithIterator) {
  // Convert the iterator object to an array using the spread operator
  const employeesArray = [...reportWithIterator];

  // Join the employee names with the '|' separator
  const employeeNames = employeesArray.join(" | ");

  // Return the concatenated string of employee names
  return employeeNames;
}
