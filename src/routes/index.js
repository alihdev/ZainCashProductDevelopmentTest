const express = require('express');
const router = express.Router();
const task = require('../controllers/task/taskController');

const multer = require('multer');
const upload = multer();

// task router (/) index
router.all('/', upload.single('jsonFile'), task.getEmployeesFiles);
router.post('/employeesWithFiles', upload.single('jsonFile'), task.postEmployeesFiles);

module.exports = router;
