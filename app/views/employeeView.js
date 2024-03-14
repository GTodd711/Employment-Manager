const inquirer = require('inquirer');
const db = require('../utils/database');

async function addEmployee() {
    try {
        const roles = await db.query('SELECT id, title FROM role');
        const managers = await db.query('SELECT id, CONCAT(first_name, " ", last_name) AS manager FROM employee');

        const employeeData = await inquirer.prompt([
            {
                name: 'first_name',
                type: 'input',
                message: "Enter the employee's first name:",
                validate: (value) => value ? true : 'Please enter a first name.'
            },
            {
                name: 'last_name',
                type: 'input',
                message: "Enter the employee's last name:",
                validate: (value) => value ? true : 'Please enter a last name.'
            },
            {
                name: 'role_id',
                type: 'list',
                message: "Select the employee's role:",
                choices: roles.map(role => ({ name: role.title, value: role.id }))
            },
            {
                name: 'manager_id',
                type: 'list',
                message: "Select the employee's manager:",
                choices: [...managers.map(manager => ({ name: manager.manager, value: manager.id })), { name: 'None', value: null }]
            }
        ]);

        await db.query('INSERT INTO employee SET ?', employeeData);
        console.log('Employee added successfully!');
    } catch (error) {
        console.error('Error adding employee:', error);
    }
}

async function updateEmployeeRole() {
    try {
        const employees = await db.query('SELECT id, CONCAT(first_name, " ", last_name) AS employee FROM employee');
        const roles = await db.query('SELECT id, title FROM role');

        const employeeToUpdate = await inquirer.prompt({
            name: 'employee_id',
            type: 'list',
            message: 'Select the employee to update:',
            choices: employees.map(employee => ({ name: employee.employee, value: employee.id }))
        });

        const newRole = await inquirer.prompt({
            name: 'role_id',
            type: 'list',
            message: 'Select the new role:',
            choices: roles.map(role => ({ name: role.title, value: role.id }))
        });

        await db.query('UPDATE employee SET role_id = ? WHERE id = ?', [newRole.role_id, employeeToUpdate.employee_id]);
        console.log('Employee role updated successfully!');
    } catch (error) {
        console.error('Error updating employee role:', error);
    }
}

module.exports = { addEmployee, updateEmployeeRole };
