// 2-read_file.js
const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.trim().split('\n');

    if (lines.length === 0) {
      throw new Error('Cannot load the database');
    }

    const studentData = {};
    let totalStudents = 0;

    for (const line of lines) {
      if (line.trim()) {
        const [firstname, field] = line.split(',');
        if (firstname && field) {
          if (!studentData[field]) {
            studentData[field] = [];
          }
          studentData[field].push(firstname);
          totalStudents++;
        }
      }
    }

    console.log(`Number of students: ${totalStudents}`);
    for (const [field, students] of Object.entries(studentData)) {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
