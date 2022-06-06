//
// ###############################################
// AH 2022 ZainCash Product Development Test
// ###############################################
//

exports.getEmployeesWithFilesAsJson = function (jsonData) {
  const arrayOfFileAndEmployee = JSON.parse(jsonData);

  // { "js.txt": "Ali" } => return Ali
  const getEmployeeNameFromFile = (fileAndEmployee) => Object.values(fileAndEmployee)[0];
  // { "js.txt": "Ali" } => return js.txt
  const getFileName = (fileAndEmployee) => Object.keys(fileAndEmployee)[0];
  // { "js.txt": "Ali" } => return boolean : check is js.txt for Ali or ?
  const isFileForEmployee = (file, employeeName) => getEmployeeNameFromFile(file) == employeeName;
  // return all files of specific employee
  const getFilesOfEmployeeByName = (employeeName) =>
    arrayOfFileAndEmployee.filter((file) => isFileForEmployee(file, employeeName)).map(getFileName);
  // { 'employeeName': [arrayOfFiles] }
  const createEmployeeAndFiles = (employeeName) => ({
    [employeeName]: getFilesOfEmployeeByName(employeeName),
  });

  // ["Ali", "Hassan"]
  const allEmployee = [...new Set(arrayOfFileAndEmployee.map(getEmployeeNameFromFile))];
  // [{ "Ali": [arrayOfFiles] }, { "Hassan": [arrayOfFiles] }];
  const employeeAndArrayOfFiles = [...allEmployee].map(createEmployeeAndFiles);

  return JSON.stringify(employeeAndArrayOfFiles);
};
