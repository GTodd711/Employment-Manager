const Role = require('../models/role');
const db = require('../utils/database');
const { displayAllRoles } = require('../views/roleView');

async function getAllRoles() {
    try {
        const roles = await db.query('SELECT * FROM role');
        if (roles.length === 0) {
            console.log('No roles found.');
        } else {
            displayAllRoles(roles); // Pass roles to the view
        }
        return roles;
    } catch (error) {
        console.error('Error fetching roles: ', error);
        throw error;
    }
}

async function addRole(title, salary, departmentId) {
    try {
        const result = await db.query('INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)', [title, salary, departmentId]);
        console.log('Role added successfully!');
        return result;
    } catch (error) {
        console.error('Error adding role: ', error);
        throw error;
    }
}

async function updateRole(roleId, title, salary, departmentId) {
    try {
        const result = await db.query('UPDATE role SET title = ?, salary = ?, department_id = ? WHERE id = ?', [title, salary, departmentId, roleId]);
        console.log('Role updated successfully!');
        return result;
    } catch (error) {
        console.error('Error updating role: ', error);
        throw error;
    }
}

async function deleteRole(roleId) {
    try {
        const result = await db.query('DELETE FROM role WHERE id = ?', [roleId]);
        console.log('Role deleted successfully!');
        return result;
    } catch (error) {
        console.error('Error deleting role: ', error);
        throw error;
    }
}

module.exports = { getAllRoles, addRole, updateRole, deleteRole };
