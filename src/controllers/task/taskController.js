const taskData = require('../../models/taskData.json');
const { readDataFromFile: readTaskDataFromFile } = require('../utls');
const { getEmployeesWithFilesAsJson } = require('./taskSolutionUtls');

// AH 2022
// task solution in getResult => getEmployeesWithFilesAsJson => taskSolutionUtls.js
// 

exports.getEmployeesFiles = (req, res, next) => {
  const { filesAndEmployeesJSON, employeesAndFilesJSON } = getResult(req.file, taskData);
  return res.render('task/index', {
    jsonRequest: filesAndEmployeesJSON,
    jsonResult: employeesAndFilesJSON,
  });
};

exports.postEmployeesFiles = (req, res, next) => {
  const { filesAndEmployeesJSON, employeesAndFilesJSON } = getResult(req.file, taskData);
  return res.status(200).send({
    jsonRequest: filesAndEmployeesJSON,
    jsonResult: employeesAndFilesJSON,
  });
};

function getResult(file, defaultTaskData) {
  const taskDataFromFile = readTaskDataFromFile(file);
  const filesAndEmployeesJSON = JSON.stringify(taskDataFromFile || defaultTaskData);
  // taks solution
  const employeesAndFilesJSON = getEmployeesWithFilesAsJson(filesAndEmployeesJSON);
  return { filesAndEmployeesJSON, employeesAndFilesJSON };
}
