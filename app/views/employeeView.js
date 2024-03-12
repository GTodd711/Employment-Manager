const inquirer = require('inquirer');

function displayEmployeeMenu() {
    inquirer
        .prompt({
            name: 'action',
            type: 'list',
            message: 'What would you like to do in the Employee menu?',
            choices: [
                'View all employees',
                'Add an employee',
                'Update an employee',
                'Delete an employee',
                'Return to main menu'
            ]
        })
        .then(answer => {
            // Handle user's choice here
            if (answer.action === 'Return to main menu') {
                const { displayMainMenu } = require('./mainMenu');
                displayMainMenu();
            }
        });
}

module.exports = { displayEmployeeMenu };