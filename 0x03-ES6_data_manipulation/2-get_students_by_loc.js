export default function getStudentsByLocation(studentsList, city) {
    if (!Array.isArray(studentsList)) {
      return [];
    }

    // Filter the students based on the specified city
    return studentsList.filter((student) => student.location === city);
  }
