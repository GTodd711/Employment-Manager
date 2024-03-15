async function displayAllRoles(roles) {
    try {
        if (!roles || roles.length === 0) {
            console.log('No roles found.');
        } else {
            console.log("\nAll Roles:");
            const tableHeader = 'ID\tTitle\tSalary\tDepartment ID'; // Create a table header
            console.log(tableHeader); // Display the table header
            roles.forEach(role => {
                const rowData = `${role.id}\t${role.title}\t${role.salary}\t${role.department_id}`; // Format row data
                console.log(rowData); // Display each role as a row in the table
            });
        }
    } catch (error) {
        console.error('Error displaying roles:', error);
    }
    returnToMainMenu(); // Prompt to return to the main menu
}

module.exports = { displayAllRoles };
