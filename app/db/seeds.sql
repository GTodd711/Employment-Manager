-- Insert initial data into the department table
INSERT INTO department (name) VALUES ('HR');
INSERT INTO department (name) VALUES ('Finance');

-- Insert initial data into the role table
INSERT INTO role (title, salary, departmentId) VALUES
    ('Software Engineer', 90000, 1),
    ('Sales Manager', 100000, 2),
    ('HR Specialist', 80000, 3),
    ('Marketing Analyst', 85000, 4),
    ('Accountant', 95000, 5);
-- Insert initial data into the employee table
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('John', 'Doe', 1, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Jane', 'Smith', 2, 1);