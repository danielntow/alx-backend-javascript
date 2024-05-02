// main.ts

interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any; // Allow additional dynamic properties
  }

  const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    contract: false, // Additional dynamic property
    lastName: 'Doe',
    location: 'London',
  };

  console.log(teacher3);

  interface Directors extends Teacher {
    numberOfReports: number;
  }

  const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };

  console.log(director1);



  // main.ts

// Define the interface for the printTeacher function
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
  }

  // Define the printTeacher function
  const printTeacher: printTeacherFunction = (firstName, lastName) => {
    // Extract the first letter of the firstName
    const firstInitial = firstName.charAt(0).toUpperCase() + '.';
    // Concatenate the firstInitial and the full lastName
    return `${firstInitial} ${lastName}`;
  };

  // Test the printTeacher function
  console.log(printTeacher("John", "Doe")); // Output: J. Doe
