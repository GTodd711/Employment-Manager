const inquirer = require('inquirer');
const { displayAllDepartments } = require('./departmentView');
const { displayAllRoles } = require('./roleView');
const { displayAllEmployees } = require('./employeeView'); 
const { displayMainMenu } = require('./displayMainMenu');


// Export the displayMainMenu function along with other functions
module.exports = { displayMainMenu, displayAllDepartments, displayAllRoles, displayAllEmployees };
