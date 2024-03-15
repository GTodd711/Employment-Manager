# Employment-Manager

Welcome to the Employee Management System, a command-line application built with Node.js and MySQL. This system allows you to manage departments, roles, and employees within your organization.

## Features
View all departments, roles, and employees
Add new departments, roles, and employees
Update an employee's role
Exit the application
Technologies Used
Node.js
MySQL
Inquirer.js (for CLI interactions)
## Installation
Clone the repository to your local machine:

bash
Copy code
git clone https://github.com/your-username/employee-management-system.git
Navigate to the project directory:

bash
Copy code
cd employee-management-system
Install dependencies:

bash
Copy code
npm install
Set up your MySQL database. You can use the provided SQL schema file (schema.sql) to create the necessary tables.

Configure the database connection in the utils/database.js file by providing your MySQL host, user, password, and database name.

Start the application:

bash
Copy code
node index.js

## Usage
When you run the application, you will be presented with a main menu where you can choose various actions such as viewing all departments, roles, and employees, adding new data, updating employee roles, and exiting the application.

Follow the prompts to perform your desired actions. For example, to add a new department, select the "Add a department" option and enter the department details as prompted.

Use the arrow keys and Enter key to navigate the menu and make selections.

## Contributing
Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## License
N/A