// roleController.js
const inquirer = require('inquirer');
const db = require('../utils/database');
const { returnToMainMenu, displayMainMenu } = require('../mainMenuHandler');
const { displayAllRoles } = require('../views/roleView');

async function displayRoles() {
    try {
        const roles = await db.query('SELECT * FROM role'); // Fetch roles from the database
        await displayAllRoles(roles); // Call the view function to display roles
        await returnToMainMenu(displayMainMenu); // Prompt to return to the main menu
    } catch (error) {
        console.error('Error fetching and displaying roles:', error);
        await returnToMainMenu(displayMainMenu); // Return to the main menu if an error occurs
    }
}

async function addRole() {
    try {
        // Fetch departments from the database
        const [departments] = await db.query('SELECT * FROM department');

        // Extract department names from the fetched data
        const departmentChoices = departments.map(department => ({
            name: department.name,
            value: department.id
        }));

        // Prompt the user to enter role details
        const roleData = await inquirer.prompt([
            {
                name: 'title',
                type: 'input',
                message: 'Enter the title of the role:'
            },
            {
                name: 'salary',
                type: 'input',
                message: 'Enter the salary for the role:'
            },
            {
                name: 'department',
                type: 'list',
                message: 'Select the department for the role:',
                choices: departmentChoices
            }
        ]);

        // Insert the role into the database
        await db.query('INSERT INTO role SET ?', {
            title: roleData.title,
            salary: roleData.salary,
            department_id: roleData.department
        });

        console.log('Role added successfully!');
        await returnToMainMenu(displayMainMenu); // Prompt to return to the main menu
    } catch (error) {
        console.error('Error adding role:', error);
        await returnToMainMenu(displayMainMenu); // Return to the main menu if an error occurs
    }
}

module.exports = { displayRoles, addRole };
