DROP TABLE IF EXISTS employees;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS departments;

CREATE TABLE employees (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  department_name VARCHAR(50) NOT NULL,
  department_description TEXT,
  department_id INTEGER,
  title TEXT,
  role_id INTEGER,
  -- salary_id INTEGER,
  -- manager_id INTEGER,
  CONSTRAINT fk_department FOREIGN KEY (department_description) REFERENCES departments(description) ON DELETE SET NULL,
  CONSTRAINT fk_department FOREIGN KEY (department_name) REFERENCES departments(name) ON DELETE SET NULL,
  CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES departments(id) ON DELETE SET NULL,
  CONSTRAINT fk_role FOREIGN KEY (role_description) REFERENCES roles(description) ON DELETE SET NULL,
  CONSTRAINT fk_role FOREIGN KEY (role_name) REFERENCES roles(name) ON DELETE SET NULL,
  CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE SET NULL,
    -- CONSTRAINT fk_salary FOREIGN KEY (salary_id) REFERENCES salaries(id) ON DELETE SET NULL,
    -- CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES managers(id) ON DELETE SET NULL
);

CREATE TABLE departments (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  department_name VARCHAR(50) NOT NULL,
  department_description TEXT
);

-- CREATE TABLE salaries (
-- id INTEGER AUTO_INCREMENT PRIMARY KEY,
--   salary INTEGER
-- );

CREATE TABLE roles (
id INTEGER AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(50) NOT NULL,
  role_description TEXT
  );