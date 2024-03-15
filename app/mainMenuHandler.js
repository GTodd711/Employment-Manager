const inquirer = require('inquirer');

async function displayMainMenu(departmentController, roleController, employeeController) {
    while (true) {
        const answer = await inquirer.prompt({
            name: 'action',
            type: 'list',
            message: 'What would you like to do?',
            choices: [
                'View all departments',
                'View all roles',
                'View all employees',
                'Add a department',
                'Add a role',
                'Add an employee',
                'Update an employee role',
                'Exit'
            ]
        });

        switch (answer.action) {
            case 'View all departments':
                await departmentController.getAllDepartments();
                break;
            case 'View all roles':
                await roleController.getAllRoles();
                break;
            case 'View all employees':
                await employeeController.getAllEmployees();
                break;
            case 'Add a department':
                await departmentController.addDepartment();
                break;
            case 'Add a role':
                await roleController.addRole();
                break;
            case 'Add an employee':
                await employeeController.addEmployee();
                break;
            case 'Update an employee role':
                await employeeController.updateEmployeeRole();
                break;
            case 'Exit':
                console.log('Exiting the application');
                process.exit(0);
                break;
        }
    }
}

async function returnToMainMenu() {
    const answer = await inquirer.prompt({
        name: 'return',
        type: 'confirm',
        message: 'Do you want to return to the main menu?',
        default: true
    });
    return answer.return;
}

module.exports = { returnToMainMenu, displayMainMenu };
