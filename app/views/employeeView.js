const { returnToMainMenu } = require('../mainMenuHandler');

async function displayAllEmployees(employees) {
    try {
        if (!employees || employees.length === 0) {
            console.log('No employees found.');
        } else {
            console.log("\nAll Employees:");
            console.table(employees);
        }
        returnToMainMenu();
    } catch (error) {
        console.error('Error displaying employees:', error);
        returnToMainMenu();
    }
}

module.exports = { displayAllEmployees };
