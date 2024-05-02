// Define the DirectorInterface
interface DirectorInterface {
    workDirectorTasks(): string;
  }

  // Define the TeacherInterface
  interface TeacherInterface {
    workTeacherTasks(): string;
  }

  // Implement the Director class
  class Director implements DirectorInterface {
    workDirectorTasks(): string {
      return 'Getting to director tasks';
    }
  }

  // Implement the Teacher class
  class Teacher implements TeacherInterface {
    workTeacherTasks(): string {
      return 'Getting to work';
    }
  }

  // Define the function createEmployee
  function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === 'number' && salary < 500) {
      return new Teacher();
    } else {
      return new Director();
    }
  }

  // Function to check if an employee is a Director
  function isDirector(employee: Director | Teacher): employee is Director {
    return (employee as Director).workDirectorTasks !== undefined;
  }

  // Function to execute work based on employee type
  function executeWork(employee: Director | Teacher): string {
    if (isDirector(employee)) {
      return employee.workDirectorTasks();
    } else {
      return employee.workTeacherTasks();
    }
  }

  // Test the executeWork function
  console.log(executeWork(createEmployee(200)));  // Output: Getting to work
  console.log(executeWork(createEmployee(1000))); // Output: Getting to director tasks
