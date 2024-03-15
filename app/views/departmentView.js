const { returnToMainMenu } = require('../mainMenuHandler');

async function displayAllDepartments(departments) {
    if (!departments || departments.length === 0) {
        console.log('No departments found.');
    } else {
        console.log("All Departments:");
        departments.forEach(department => {
            console.log(`ID: ${department.id} | Name: ${department.name}`);
        });
    }
    returnToMainMenu(); // Prompt to return to main menu
}



module.exports = { displayAllDepartments};
