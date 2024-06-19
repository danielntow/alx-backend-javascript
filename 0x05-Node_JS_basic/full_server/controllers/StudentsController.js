// full_server/controllers/StudentsController.js
import { readDatabase } from '../utils.js';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const studentData = await readDatabase(process.argv[2]);
      let responseText = 'This is the list of our students\n';

      for (const [field, students] of Object.entries(studentData).sort()) {
        responseText += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
      }

      res.status(200).send(responseText.trim());
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const studentData = await readDatabase(process.argv[2]);
      const students = studentData[major] || [];
      res.status(200).send(`List: ${students.join(', ')}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
