const inquirer = require('inquirer');
const db = require('../utils/database');
const roleView = require('../views/roleView');

async function getAllRoles() {
    try {
        const roles = await db.query('SELECT * FROM role');
        console.log('Roles:', roles); // Add this line for debugging
        roleView.displayAllRoles(roles); // Call the view function to display roles
    } catch (error) {
        console.error('Error fetching roles:', error);
        returnToMainMenu(); // Return to the main menu if an error occurs
    }
}

async function viewAllRoles() {
    try {
        // Fetch all roles with their corresponding departments
        const roles = await db.query(`
            SELECT r.id AS RoleID, r.title AS JobTitle, r.salary AS Salary, d.name AS Department
            FROM role r
            JOIN department d ON r.department_id = d.id
        `);

        console.log("\nAll Roles:");
        console.table(roles); // Print the roles in a table format
        return roles; // Return the roles data
    } catch (error) {
        console.error('Error fetching roles:', error);
        throw error; // Throw the error to be caught by the caller
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
        returnToMainMenu();
    } catch (error) {
        console.error('Error adding role:', error);
        returnToMainMenu();
    }
}

module.exports = { getAllRoles, viewAllRoles, addRole };
