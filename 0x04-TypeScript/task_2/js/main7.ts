// Define the String literal type Subjects
type Subjects = 'Math' | 'History';

// Function to teach a class based on the subject
function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else if (todayClass === 'History') {
    return 'Teaching History';
  } else {
    throw new Error('Invalid subject');
  }
}

// Test the teachClass function
console.log(teachClass('Math'));     // Output: Teaching Math
console.log(teachClass('History'));  // Output: Teaching History
