const consoleTable = require('console.table');
const { getAllDepartments } = require('../controllers/departmentController');

async function displayAllDepartments() {
    try {
        const departments = await getAllDepartments();
        if (departments.length === 0) {
            console.log('There are no departments to display.');
        } else {
            console.log('\nAll Departments:');
            console.table(departments);
        }
    } catch (error) {
        console.error('Error displaying departments: ', error);
    }
}

module.exports = { displayAllDepartments };