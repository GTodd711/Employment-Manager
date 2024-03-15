const inquirer = require('inquirer');
const db = require('../utils/database');
const { returnToMainMenu, displayMainMenu } = require('../mainMenuHandler');

async function getAllDepartments() {
    try {
        const [departments] = await db.query('SELECT * FROM department');
        if (!departments || departments.length === 0) {
            console.log('No departments found.');
        } else {
            console.log("All Departments:");
            departments.forEach(department => {
                console.log(`ID: ${department.id} | Name: ${department.name}`);
            });
        }
    } catch (error) {
        console.error('Error fetching departments:', error);
    }
    await returnToMainMenu(displayMainMenu); // Prompt to return to the main menu
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
    } catch (error) {
        console.error('Error adding department:', error);
    }
    await returnToMainMenu(displayMainMenu); // Prompt to return to the main menu
}

module.exports = { getAllDepartments, addDepartment };
