const { returnToMainMenu } = require('../mainMenuHandler');

async function displayAllRoles(roles) {
    try {
        if (!roles || roles.length === 0) {
            console.log('No roles found.');
        } else {
            console.log("\nAll Roles:");
            roles.forEach(role => {
                console.log(`ID: ${role.id} | Title: ${role.title} | Salary: ${role.salary} | Department ID: ${role.department_id}`);
            });
        }
        returnToMainMenu(); // Prompt to return to main menu
    } catch (error) {
        console.error('Error displaying roles:', error);
        returnToMainMenu(); // Return to the main menu if an error occurs
    }
}

module.exports = { displayAllRoles };
