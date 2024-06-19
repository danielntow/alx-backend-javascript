// full_server/utils.js
import fs from 'fs/promises';

export async function readDatabase(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const lines = data.split('\n');
    const studentData = {};

    for (const line of lines) {
      if (line.trim()) {
        const [firstname, field] = line.split(',');
        if (!studentData[field]) {
          studentData[field] = [];
        }
        studentData[field].push(firstname);
      }
    }

    return studentData;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}
