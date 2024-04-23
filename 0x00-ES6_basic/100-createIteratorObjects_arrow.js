export default report => {
    const allEmployees = Object.values(report.allEmployees).flatMap(department => department);
    return allEmployees[Symbol.iterator]();
  };
  