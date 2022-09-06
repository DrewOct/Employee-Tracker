INSERT INTO departments (name, description)
VALUES
('Sales', '<description>'),
('Research', '<description>'),
('Finance', '<description>'),
('Legal', '<description>');

INSERT INTO employees (first_name, last_name, department_id, role_id)
VALUES
('Blando', 'JKalrissian', 2,3),
('Ronald', 'Nortsaswagger', 1, 2),
('Jucilla', 'Largess', 1, 2), 
('Brent', 'Nezzar', 3, 2),
('Johann', 'MacReady', 2, 1),
('Jathan', 'Solello', 2, 1),
('Jamir', 'Ashad', 2, 2),
('Anna', 'Seelo', 1, 2),
('Lakeisha', 'Baird', 1, 1),
('Adam', 'Scott', 1, 2),
('Ryan', 'Taylor', 3, 1),
('Dustin', 'Manhoff', 3, 2),
('William', 'Robins', 4, 1),
('Baron', 'Karza', 2, 3),
('Shanice', 'Burks', 4, 2),
('Asha', 'Venkatasuban', 4, 2),
('Lucas', 'Hoodle', 2, 2),
('Mateo', 'Cruz', 2, 2),
('Enrique', 'Grande', 2, 2),
('Marnella', 'Suendo', 1, 2);

INSERT INTO roles (name, description)
VALUES
('Sales Lead', '<description>'),
('Project Lead', '<description>'),
('Account Manager', '<description>'),
('Legal Team Lead', '<description>'),
('Sales Associate', '<description>'),
('Science Staff', '<description>'),
('Medical Science Liaison', '<description>'),
('Accountant', '<description>'),
('Laweyer', '<description>');

INSERT INTO salaries (department_id, role_id, amount)
VALUES
(1, 1, 100000),
(1, 2, 90000),
(2, 1, 95000),
(2, 2, 65000),
(2, 3, 150000),
(3, 1, 250000),
(3, 2, 180000);
