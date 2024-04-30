/**
 * Retrieves a list of student objects.
 *
 * @returns {Object[]} An array of student objects, each with an id,
 * firstName, and location property.
 */
function getListStudents() {
  return [
    { id: 1, firstName: "Guillaume", location: "San Francisco" },
    { id: 2, firstName: "James", location: "Columbia" },
    { id: 5, firstName: "Serena", location: "San Francisco" },
  ];
}

export default getListStudents;
