const inquirer = require('inquirer');
const departmentView = require('./departmentView');
const roleView = require('./roleView');
const employeeView = require('./employeeView');
const db = require('../utils/database'); // Import the database connection

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
            switch (answer.action) {
                case 'View all departments':
                    departmentView.displayAllDepartments();
                    break;
                case 'View all roles':
                    roleView.displayAllRoles();
                    break;
                case 'View all employees':
                    employeeView.displayAllEmployees();
                    break;
                case 'Add a department':
                    departmentView.addDepartment();
                    break;
                case 'Add a role':
                    roleView.addRole();
                    break;
                case 'Add an employee':
                    employeeView.addEmployee();
                    break;
                case 'Update an employee role':
                    employeeView.updateEmployeeRole();
                    break;
                case 'Exit':
                    console.log('Exiting the application');
                    process.exit(0);

        };
})};

function viewAnyTable() {
    inquirer
        .prompt({
            name: 'tableName',
            type: 'input',
            message: 'Enter the name of the table you want to view:'
        })
        .then(answer => {
            const tableName = answer.tableName.trim(); // Remove leading/trailing spaces
            viewTable(tableName);
        });
}

async function viewTable(tableName) {
    try {
        // Construct the query to select all rows from the specified table
        const query = `SELECT * FROM ${tableName}`;

        // Execute the query
        const [rows, fields] = await db.query(query);

        // Display the retrieved data
        console.log(`\nAll ${tableName}s:`);
        console.table(rows); // Assuming you want to display the results in a table format

        // Display the main menu again
        displayMainMenu();
    } catch (error) {
        console.error(`Error retrieving data from ${tableName}:`, error);
        // Handle the error here
    }
}

module.exports = { displayMainMenu };
