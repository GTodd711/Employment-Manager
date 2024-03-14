const inquirer = require('inquirer');
const db = require('../utils/database');

async function viewAllRoles() {
    try {
        // Fetch all roles with their corresponding departments
        const roles = await db.query('SELECT r.id, r.title, r.salary, d.name AS department FROM role r JOIN department d ON r.department_id = d.id');

        console.log("\nAll Roles:");
        console.log("ID | Title | Salary | Department");
        roles.forEach(role => {
            console.log(`${role.id} | ${role.title} | ${role.salary} | ${role.department}`);
        });
    } catch (error) {
        console.error('Error fetching roles:', error);
    }
}

async function addRole() {
    try {
        // Get department choices
        const departments = await db.query('SELECT id, name FROM department');
        const departmentChoices = departments.map(department => ({
            name: department.name,
            value: department.id
        }));

        // Prompt for role details
        const roleData = await inquirer.prompt([
            {
                name: 'title',
                type: 'input',
                message: 'Enter the title of the role:',
                validate: (value) => value.trim() !== '' ? true : 'Please enter a role title.'
            },
            {
                name: 'salary',
                type: 'number',
                message: 'Enter the salary for the role:',
                validate: (value) => !isNaN(value) && value > 0 ? true : 'Please enter a valid salary.'
            },
            {
                name: 'department_id',
                type: 'list',
                message: 'Select the department for the role:',
                choices: departmentChoices
            }
        ]);

        // Insert role into the database
        await db.query('INSERT INTO role SET ?', roleData);
        console.log('Role added successfully!');
    } catch (error) {
        console.error('Error adding role:', error);
    }
}

module.exports = { viewAllRoles, addRole };
