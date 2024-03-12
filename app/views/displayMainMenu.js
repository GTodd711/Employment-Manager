const inquirer = require('inquirer');

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
            // Based on the user's choice, call corresponding functions or exit
            switch (answer.action) {
                case 'View all departments':
                    // Importing within the function
                    const departmentView = require('./departmentView');
                    departmentView.displayAllDepartments();
                    break;
                case 'View all roles':
                    // Importing within the function
                    const roleView = require('./roleView');
                    roleView.displayAllRoles();
                    break;
                case 'View all employees':
                    // Importing within the function
                    const employeeView = require('./employeeView');
                    employeeView.displayAllEmployees();
                    break;
                case 'Add a department':
                    // Importing within the function
                    const departmentViewAdd = require('./departmentView');
                    departmentViewAdd.addDepartment();
                    break;
                case 'Add a role':
                    // Importing within the function
                    const roleViewAdd = require('./roleView');
                    roleViewAdd.addRole();
                    break;
                case 'Add an employee':
                    // Importing within the function
                    const employeeViewAdd = require('./employeeView');
                    employeeViewAdd.addEmployee();
                    break;
                case 'Update an employee role':
                    // Importing within the function
                    const employeeViewUpdate = require('./employeeView');
                    employeeViewUpdate.updateEmployeeRole();
                    break;
                case 'Exit':
                    console.log('Exiting the application');
                    process.exit(0);
            }
        });
}

module.exports = { displayMainMenu };
