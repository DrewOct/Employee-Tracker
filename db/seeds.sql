INSERT INTO departments (department_name, department_description)
VALUES
('Sales', 'Develops and implements strategies that help their company sell its products to doctors, hospitals, pharmacies, and other healthcare providers.'),
('Research', 'Responsible for discovering and testing new drugs, developing incremental innovations such as product extensions, and clinical testing for safety-monitoring or marketing purposes.'),
('Finance', 'Responsible for acquiring funds for the firm, managing funds within the organization and planning for the expenditure of funds on various assets.'),
('Legal', 'Provides senior management and the board of directors with effective legal counsel on company strategies and their implementation, manages the legal function, and assesses and manages risk.');

INSERT INTO employees (first_name, last_name, role_id)
VALUES
('Blando', 'JKalrissian', 3),
('Ronald', 'Nortsaswagger', 2),
('Jucilla', 'Largess', 2), 
('Brent', 'Nezzar', 2),
('Johann', 'MacReady', 1),
('Jathan', 'Solello', 1),
('Jamir', 'Ashad', 2),
('Anna', 'Seelo', 2),
('Lakeisha', 'Baird', 1),
('Adam', 'Scott', 2),
('Ryan', 'Taylor', 1),
('Dustin', 'Manhoff', 2),
('William', 'Robins', 1),
('Baron', 'Karza', 3),
('Shanice', 'Burks', 2),
('Asha', 'Venkatasuban', 2),
('Lucas', 'Hoodle', 2),
('Mateo', 'Cruz', 2),
('Enrique', 'Grande', 2),
('Marnella', 'Suendo', 2);

INSERT INTO roles (title, role_description, salary, department_id)
VALUES
('Sales Lead', 'Coordinates the sales department, supporting management, and ensuring sales quotas are reached', 100000, 1),
('Project Lead', 'Collaborates with team members to complete their project work on time and within budget.', 95000, 2),
('Account Manager', 'Handles customer complaints, finds solutions to their issues, and maintains a positive relationship between both parties for future business ventures.', 250000, 3),
('Legal Team Lead', 'Oversees the entire legal ops team, taking on tasks such as staff and resource allocation, as well as leadership initiatives', 350000, 4),
('Sales Associate', 'Participates in creating, launching, or implementing new products.', 90000, 1),
('Science Staff', 'Develops and manages scientific research projects with minimal supervision.', 65000, 2),
('Medical Science Liaison', 'Collaborates with scientists, physicians, and other medical experts to support trial enrollment, provide program and protocol training, and ensure that health care professionals have the most up to date information as the clinical development programs mature.', 150000, 2),
('Accountant', 'Helps our business make critical financial decisions by collecting, tracking, and correcting the companys finances.', 180000),
('Lawyer', 'Interprets laws, rulings, and regulations for our industry leaders and science professionals.', 250000, 4);

-- UPDATE 'business_home'.'employees' SET 'manager_id' = '1' WHERE ('id' = '1');