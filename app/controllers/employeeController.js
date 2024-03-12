const inquirer = require('inquirer');
const { displayMainMenu } = require('../views/mainMenu');
const { displayAllDepartments } = require('../views/departmentView');
const db = require('../utils/database');

async function getAllDepartments() {
    try {
        const departments = await db.query('SELECT * FROM department');
        if (departments.length === 0) {
            console.log('No departments found.');
        } else {
            displayAllDepartments(departments); // Pass departments to the view
        }
        return departments;
    } catch (error) {
        console.error('Error fetching departments: ', error);
        throw error;
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

module.exports = { getAllDepartments, promptReturnToMainMenu };
