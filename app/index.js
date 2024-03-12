const inquirer = require('inquirer');
const { displayMainMenu } = require('./views/mainMenu');

// Main function to start the application
function startApp() {
    console.log('Welcome to your Employee Management System!\n');
    displayMainMenu();
}

// Start the application
startApp();