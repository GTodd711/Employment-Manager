const inquirer = require('inquirer');
const db = require('../utils/database');
const { returnToMainMenu } = require('../mainMenuHandler');
const employeeView = require('../views/employeeView');

async function getAllEmployees() {
    try {
        const employees = await db.query(`
            SELECT 
                e.id AS EmployeeID, 
                e.first_name AS FirstName, 
                e.last_name AS LastName, 
                r.title AS JobTitle, 
                d.name AS Department, 
                r.salary AS Salary, 
                CONCAT(m.first_name, ' ', m.last_name) AS Manager
            FROM employee e
            LEFT JOIN role r ON e.role_id = r.id
            LEFT JOIN department d ON r.department_id = d.id
            LEFT JOIN employee m ON e.manager_id = m.id
        `);

        employeeView.displayAllEmployees(employees);
    } catch (error) {
        console.error('Error fetching employees:', error);
        returnToMainMenu();
    }
}

async function addEmployee() {
    try {
        // Fetch departments from the database
        const [departments] = await db.query('SELECT * FROM department');

        // Extract department names from the fetched data
        const departmentChoices = departments.map(department => department.name);

        // Prompt the user to select a department
        const { department } = await inquirer.prompt({
            name: 'department',
            type: 'list',
            message: 'Select the department:',
            choices: departmentChoices
        });

        // Fetch roles within the selected department from the database
        const [roles] = await db.query(`
            SELECT * FROM role WHERE department_id IN (
                SELECT id FROM department WHERE name = ?
            )
        `, [department]);

        // Extract role titles from the fetched data
        const roleChoices = roles.map(role => ({
            name: role.title,
            value: role.id
        }));

        // Prompt the user to select a role within the selected department
        const { roleId } = await inquirer.prompt({
            name: 'roleId',
            type: 'list',
            message: 'Select the employee role within the department:',
            choices: roleChoices
        });

        // Prompt for employee details
        const employeeData = await inquirer.prompt([
            {
                name: 'first_name',
                type: 'input',
                message: "Enter the employee's first name:"
            },
            {
                name: 'last_name',
                type: 'input',
                message: "Enter the employee's last name:"
            }
        ]);

        // Insert the employee into the database
        await db.query('INSERT INTO employee SET ?', {
            first_name: employeeData.first_name,
            last_name: employeeData.last_name,
            role_id: roleId
        });

        console.log('Employee added successfully!');
        returnToMainMenu();
    } catch (error) {
        console.error('Error adding employee:', error);
        returnToMainMenu();
    }
}

async function updateEmployeeRole() {
    try {
        // Fetch employees and roles from the database
        const employees = await db.query('SELECT id, CONCAT(first_name, " ", last_name) AS employee FROM employee');
        const roles = await db.query('SELECT id, title FROM role');

        // Prompt to select an employee to update
        const employeeToUpdate = await inquirer.prompt({
            name: 'employee_id',
            type: 'list',
            message: 'Select the employee to update:',
            choices: employees.map(employee => ({ name: employee.employee, value: employee.id }))
        });

        // Prompt to select the new role for the employee
        const newRole = await inquirer.prompt({
            name: 'role_id',
            type: 'list',
            message: 'Select the new role:',
            choices: roles.map(role => ({ name: role.title, value: role.id }))
        });

        // Update the employee's role in the database
        await db.query('UPDATE employee SET role_id = ? WHERE id = ?', [newRole.role_id, employeeToUpdate.employee_id]);

        console.log('Employee role updated successfully!');
        returnToMainMenu();
    } catch (error) {
        console.error('Error updating employee role:', error);
        returnToMainMenu();
    }
}

module.exports = { getAllEmployees, addEmployee, updateEmployeeRole };