const createReportObject = (employeesList) => ({
  allEmployees: { ...employeesList },
  getNumberOfDepartments: () => Object.keys(employeesList).length,
});

export default createReportObject;
