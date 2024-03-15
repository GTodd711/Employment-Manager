const inquirer = require('inquirer');
const departmentView = require('./departmentView');
const roleView = require('./roleView');
const employeeView = require('./employeeView');
const db = require('../utils/database'); 
const { returnToMainMenu } = require('../controllers/mainMenuHandler');
