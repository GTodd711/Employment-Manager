const inquirer = require('inquirer');
const roleView = require('../views/roleView')
const departmentView = require('../views/departmentView'); 
const employeeView = require('../views/employeeView');

function displayMainMenu() {
    inquirer
        .prompt({
            name: 'action',
            type: 'list',
            message: 'What would you like to do?',
            choices: [
                'View all departments',
                'View all roles',
                'View all employees',
                'Add a department',
                'Add a role',
                'Add an employee',
                'Update an employee role',
                'Exit'
            ]
        })
        .then(answer => {
            switch (answer.action) {
                case 'View all departments':
                    departmentView.displayAllDepartments(returnToMainMenu);
                    break;
                case 'View all roles':
                    roleView.displayAllRoles(returnToMainMenu);
                    break;
                case 'View all employees':
                    employeeView.displayAllEmployees(returnToMainMenu);
                    break;
                case 'Add a department':
                    departmentView.addDepartment(returnToMainMenu);
                    break;
                case 'Add a role':
                    roleView.addRole(returnToMainMenu);
                    break;
                case 'Add an employee':
                    employeeView.addEmployee(returnToMainMenu);
                    break;
                case 'Update an employee role':
                    employeeView.updateEmployeeRole(returnToMainMenu);
                    break;
                case 'Exit':
                    console.log('Exiting the application');
                    process.exit(0);
                    break;
            }
        });
}

function returnToMainMenu() {
    inquirer
        .prompt({
            name: 'return',
            type: 'confirm',
            message: 'Do you want to return to the main menu?',
            default: true
        })
        .then(answer => {
            if (answer.return) {
                displayMainMenu(); // Call displayMainMenu function
            } else {
                console.log('Exiting the application.');
                process.exit(0);
            }
        });
}

module.exports = { returnToMainMenu,displayMainMenu };
