const inquirer = require('inquirer');
const db = require('../utils/database');
const { returnToMainMenu } = require('./mainMenu');

async function displayAllDepartments() {
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
        returnToMainMenu(); // Prompt to return to main menu
    } catch (error) {
        console.error('Error fetching departments:', error);
        returnToMainMenu(); // Return to the main menu if an error occurs
    }
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
        returnToMainMenu(); 
    } catch (error) {
        console.error('Error adding department:', error);
        returnToMainMenu(); 
    }
}

module.exports = { displayAllDepartments, addDepartment };
