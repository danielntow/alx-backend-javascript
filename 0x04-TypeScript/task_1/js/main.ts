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
