const inquirer = require('inquirer');
const db = require('./utils/database'); // Import the database connection
const { displayMainMenu } = require('./views/mainMenu');

// Test the database connection
db.getConnection((err, connection) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Database connection successful!');
    connection.release(); // Release the connection
});

// Main function to start the application
function startApp() {
    console.log('Welcome to your Employee Management System!\n');
    displayMainMenu();
}

// Start the application
startApp();