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
                    // Call the function to view all departments
                    break;
                case 'View all roles':
                    // Call the function to view all roles
                    break;
                case 'View all employees':
                    // Call the function to view all employees
                    break;
                case 'Add a department':
                    // Call the function to add a department
                    break;
                case 'Add a role':
                    // Call the function to add a role
                    break;
                case 'Add an employee':
                    // Call the function to add an employee
                    break;
                case 'Update an employee role':
                    // Call the function to update an employee role
                    break;
                case 'Exit':
                    console.log('Exiting the application');
                    process.exit(0);
            }
        });
}

module.exports = { displayMainMenu };