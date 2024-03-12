const inquirer = require('inquirer');
const db = require('../utils/database');
const { displayMainMenu } = require('./displayMainMenu'); // Import displayMainMenu

function displayAllDepartments(departments) {
    // Check if departments is undefined or null
    if (!departments || departments.length === 0) {
        console.log('No departments found.');
    } else {
        console.log("All Departments:");
        departments.forEach(department => {
            console.log(`ID: ${department.id} | Name: ${department.name}`);
        });
    }
}

function promptReturnToMainMenu() {
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

async function addDepartment() {
    try {
        const departmentData = await inquirer.prompt([
            {
                name: 'name',
                type: 'input',
                message: 'Enter the name of the department:',
                validate: (value) => {
                    if (value.trim() !== '') {
                        return true;
                    }
                    return 'Please enter a department name.';
                },
            },
        ]);

        const result = await db.query('INSERT INTO department SET ?', departmentData);
        console.log('Department added successfully!');
        displayMainMenu(); // Return to the main menu
    } catch (error) {
        console.error('Error adding department:', error);
        promptReturnToMainMenu(); // Return to the main menu if an error occurs
    }
}

module.exports = { displayAllDepartments, addDepartment, promptReturnToMainMenu };
