const db = require('../utils/database');
const { displayAllDepartments } = require('../views/departmentView');

async function getAllDepartments() {
    try {
        const departments = await db.query('SELECT * FROM department');
        if (departments.length === 0) {
            console.log('No departments found.');
        } else {
            displayAllDepartments(departments); // Pass departments to the view
        }
        return departments;
    } catch (error) {
        console.error('Error fetching departments: ', error);
        throw error;
    }
}

module.exports = { getAllDepartments };