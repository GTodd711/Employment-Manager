
const db = require('../utils/database');

async function displayAllRoles() {
    try {
        // Fetch all roles with their corresponding departments
        const roles = await db.query('SELECT r.*, d.name AS department FROM role r JOIN department d ON r.department_id = d.id');
        
        console.log("All Roles:");
        roles.forEach(role => {
            console.log(`Title: ${role.title} | Salary: ${role.salary} | Department: ${role.department}`);
        });
    } catch (error) {
        console.error('Error fetching roles:', error);
    }
}

module.exports = { displayAllRoles };
