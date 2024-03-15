const { returnToMainMenu } = require('../mainMenuHandler');

async function displayAllDepartments(departments) {
    try {
        if (!departments || departments.length === 0) {
            console.log('No departments found.');
        } else {
            console.log("All Departments:");
            departments.forEach(department => {
                console.log(`ID: ${department.id} | Name: ${department.name}`);
            });
        }
    } catch (error) {
        console.error('Error displaying departments:', error);
    }
    returnToMainMenu(); // Prompt to return to main menu
}

module.exports = { displayAllDepartments };
