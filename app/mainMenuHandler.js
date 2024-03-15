const inquirer = require('inquirer');

function displayMainMenu(departmentController, roleController, employeeController) {
    console.log('roleController:', roleController);
    console.log('departmentController:', departmentController);
    console.log('employeeController:', employeeController);
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
                    departmentController.getAllDepartments(returnToMainMenu);
                    break;
                case 'View all roles':
                    roleController.getAllRoles(returnToMainMenu);
                    break;
                case 'View all employees':
                    employeeController.getAllEmployees(returnToMainMenu);
                    break;
                case 'Add a department':
                    departmentController.addDepartment(returnToMainMenu);
                    break;
                case 'Add a role':
                    roleController.addRole(returnToMainMenu);
                    break;
                case 'Add an employee':
                    employeeController.addEmployee(returnToMainMenu);
                    break;
                case 'Update an employee role':
                    employeeController.updateEmployeeRole(returnToMainMenu);
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
                displayMainMenu(); // This should be modified based on your requirement
            } else {
                console.log('Exiting the application.');
                process.exit(0);
            }
        });
}

module.exports = { returnToMainMenu, displayMainMenu };
