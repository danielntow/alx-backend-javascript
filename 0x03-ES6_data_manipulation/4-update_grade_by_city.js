export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  if (!Array.isArray(studentsList) || !Array.isArray(newGrades)) {
    return [];
  }

  // Create a map of grades for quick lookup by studentId
  const gradeMap = new Map();
  newGrades.forEach(({ studentId, grade }) => {
    gradeMap.set(studentId, grade);
  });

  // Update grades for students in the specified city
  return studentsList.map((student) => {
    if (student.location === city) {
      const grade = gradeMap.get(student.id);
      return {
        ...student,
        grade: grade !== undefined ? grade : 'N/A',
      };
    }
    return student;
  });
}
