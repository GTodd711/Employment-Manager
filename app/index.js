const inquirer = require('inquirer');
const db = require('./utils/database'); // Import the database connection
const { displayMainMenu } = require('./views/mainMenu');

// Main function to start the application
async function startApp() {
    console.log('Welcome to your Employee Management System!\n');

    try {
        let tableName;
        let queryMessage;

        // Prompt the user to choose the table
        const answer = await inquirer.prompt({
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
        });

        switch (answer.action) {
            case 'View all departments':
                tableName = 'department';
                queryMessage = 'All Departments';
                break;
            case 'View all roles':
                tableName = 'role';
                queryMessage = 'All Roles';
                break;
            case 'View all employees':
                tableName = 'employee';
                queryMessage = 'All Employees';
                break;
            case 'Exit':
                console.log('Exiting the application');
                process.exit(0);
                break;
            default:
                console.log('Invalid choice');
                return; // Exit the function if the choice is invalid
        }

        // Execute the query based on the user's selection
        const [rows, fields] = await db.query(`SELECT * FROM ${tableName}`);
        console.log(`\n${queryMessage}:`);
        console.table(rows);

        // Display the main menu again
        startApp();
    } catch (error) {
        console.error('Error retrieving items:', error);
        // Handle the error here
    }
}


// Start the application
startApp();
