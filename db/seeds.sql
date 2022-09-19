INSERT INTO departments (department_name)
VALUES
('Sales'),
('Research'),
('Finance'),
('Legal');

INSERT INTO roles (title, salary, department_id, manager)
VALUES
('Sales Lead', 100000, 1, true), -- 1
('Project Lead', 95000, 2, true), -- 2
('Account Manager', 250000, 3, true), -- 3
('Legal Team Lead', 350000, 4, true), -- 4
('Sales Associate', 90000, 1, false), -- 5
('Science Staff', 65000, 2, false), -- 6
('Medical Science Liaison', 150000, 2, false), -- 7
('Accountant', 180000, 3, false), -- 8
('Lawyer', 250000, 4, false); -- 9

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
('Lakeisha', 'Baird', 1, NULL),
('Johann', 'MacReady', 2, NULL),
('Ryan', 'Taylor', 3, NULL),
('William', 'Robins', 4, NULL),
('Ronald', 'Nortsaswagger', 5, 1),
('Jucilla', 'Largess', 5, 1),
('Anna', 'Seelo', 5, 1),
('Marnella', 'Suendo', 5, 1),
('Blando', 'JKalrissian', 7, 2),
('Brent', 'Nezzar', 6, 3),
('Jathan', 'Solello', 6, 2),
('Jamir', 'Ashad', 6, 2),
('Adam', 'Scott', 5, 1),
('Dustin', 'Manhoff', 8, 3),
('Baron', 'Karza', 7, 2),
('Shanice', 'Burks', 9, 4),
('Asha', 'Venkatasuban', 9, 4),
('Lucas', 'Hoodle', 5, 2),
('Mateo', 'Cruz', 6, 2),
('Enrique', 'Grande', 6, 2);