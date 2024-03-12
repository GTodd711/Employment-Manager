-- Insert initial data into the department table
INSERT INTO department (name) VALUES ('HR');
INSERT INTO department (name) VALUES ('Finance');

-- Insert initial data into the role table
INSERT INTO role (title, salary, department_id) VALUES ('Manager', 50000, 1);
INSERT INTO role (title, salary, department_id) VALUES ('Accountant', 40000, 2);

-- Insert initial data into the employee table
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('John', 'Doe', 1, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Jane', 'Smith', 2, 1);