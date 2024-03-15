const inquirer = require('inquirer');
const departmentView = require('./departmentView');
const roleView = require('./roleView');
const employeeView = require('./employeeView');
const { returnToMainMenu } = require('../controllers/mainMenuHandler');

module.exports = { departmentView, roleView, employeeView, returnToMainMenu };
