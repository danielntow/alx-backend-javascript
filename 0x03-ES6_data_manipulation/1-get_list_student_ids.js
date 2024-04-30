const getListStudentIds = (studentList) => {
  if (!Array.isArray(listStudents)) {
    return [];
  }
  // return the list of id student
  return listStudents.map((student) => student.id);
}

export default getListStudentIds;
