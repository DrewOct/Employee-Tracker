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
('Sales Lead', 'Coordinates the sales department, supporting management, and ensuring sales quotas are reached'),
('Project Lead', 'Collaborates with team members to complete their project work on time and within budget.'),
('Account Manager', 'Handles customer complaints, finds solutions to their issues, and maintains a positive relationship between both parties for future business ventures.'),
('Legal Team Lead', 'Oversees the entire legal ops team, taking on tasks such as staff and resource allocation, as well as leadership initiatives'),
('Sales Associate', 'Participates in creating, launching, or implementing new products.'),
('Science Staff', 'Develops and manages scientific research projects with minimal supervision.'),
('Medical Science Liaison', 'Collaborates with scientists, physicians, and other medical experts to support trial enrollment, provide program and protocol training, and ensure that health care professionals have the most up to date information as the clinical development programs mature.'),
('Accountant', 'Helps our business make critical financial decisions by collecting, tracking, and correcting the companys finances.'),
('Laweyer', 'Interprets laws, rulings, and regulations for our industry leaders and science professionals.');

INSERT INTO salaries (department_id, role_id, amount)
VALUES
(1, 1, 100000),
(1, 2, 90000),
(2, 1, 95000),
(2, 2, 65000),
(2, 3, 150000),
(3, 1, 250000),
(3, 2, 180000);
