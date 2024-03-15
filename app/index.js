const inquirer = require('inquirer');
const db = require('./utils/database'); // Ensure this database connection is initialized
const mainMenuHandler = require('./mainMenuHandler');
const departmentController = require('./controllers/departmentController');
const roleController = require('./controllers/roleController');
const employeeController = require('./controllers/employeeController');

// Start the application
console.log('Welcome to your Employee Management System!\n');
mainMenuHandler.displayMainMenu(departmentController, roleController, employeeController);
