const Department = require('../models/department');
const db = require('../utils/database');

async function getAllDepartments() {
    try {
        const [departments] = await db.query('SELECT * FROM department');
        return departments;
    } catch (error) {
        console.error('Error fetching departments: ', error);
        throw error;
    }
}

module.exports = { getAllDepartments };