export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  if (!Array.isArray(studentsList) || !Array.isArray(newGrades)) {
    return [];
  }

  // Filter students for the specific city
  const filteredStudents = studentsList.filter((student) => student.location === city);

  // Map through the filtered students and update their grades if available in newGrades
  const updatedStudents = filteredStudents.map((student) => {
    const matchingGrade = newGrades.find((gradeObj) => gradeObj.studentId === student.id);
    if (matchingGrade) {
      return { ...student, grade: matchingGrade.grade };
    } else {
      return { ...student, grade: 'N/A' };
    }
  });

  return updatedStudents;
}
