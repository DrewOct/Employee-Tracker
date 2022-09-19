const express = require("express");
const inquirer = require("inquirer");
const db = require("./db/connection");
const routes = require("./routes/apiRoutes");
const fetch = require("node-fetch");
const chalk = require("chalk");
const { start } = require("repl");
const { number } = require("yargs");

const startScreen = [
  "View all Employees",
  "View Employees by Department",
  "View Employees by Manager",
  "Add Employee",
  "Remove Employee",
  "Update Employee Role",
  "View all Roles",
  "Add Role",
  "Remove Role",
  "View all Departments",
  "Add Department",
  "Remove Department",
  "Exit",
];

const PORT = process.env.PORT || 3075;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Use apiRoutes
app.use("/api", routes); // /api

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

// Start server after DB connection
db.connect((err) => {
  if (err) throw err;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.table(
      `
 _____       ___  ___   _____   _       _____  __    __  _____   _____            ___  ___       ___   __   _       ___   _____   _____   _____   
| ____|     /   |/   | |  _  \\ | |     /  _  \\ \\ \\  / / | ____| | ____|          /   |/   |     /   | |  \\ | |     /   | /  ___| | ____| |  _  \\  
| |__      / /|   /| | | |_| | | |     | | | |  \\ \\/ /  | |__   | |__           / /|   /| |    / /| | |   \\| |    / /| | | |     | |__   | |_| |  
|  __|    / / |__/ | | |  ___/ | |     | | | |   \\  /   |  __|  |  __|         / / |__/ | |   / / | | | |\\   |   / / | | | |  _  |  __|  |  _  /  
| |___   / /       | | | |     | |___  | |_| |   / /    | |___  | |___        / /       | |  / /  | | | | \\  |  / /  | | | |_| | | |___  | | \\ \\  
|_____| /_/        |_| |_|     |_____| \\_____/  /_/     |_____| |_____|      /_/        |_| /_/   |_| |_|  \\_| /_/   |_| \\_____/ |_____| |_|  \\_\\ 
`
    );
    startPrompt();
  });
});
// console.log("test1");

function startPrompt() {
  inquirer
    .prompt({
      name: "menuChoice",
      type: "list",
      message: "Select an option",
      choices: startScreen,
    })
    .then((answer) => {
      switch (answer.menuChoice) {
        case "View all Employees":
          showAll();
          break;
        case "View Employees by Department":
          showByDepartment();
          break;
        case "View Employees by Manager":
          showByManager();
          break;
        case "Add Employee":
          addEmployee();
          break;
        case "Remove Employee":
          removeEmployee();
          break;
        case "Update Employee Role":
          updateRole();
          break;
        case "View all Roles":
          viewRoles();
          break;
        case "Add Role":
          addRole();
          break;
        case "Remove Role":
          removeRole();
          break;
        case "View all Departments":
          viewDept();
          break;
        case "Add Department":
          addDept();
          break;
        case "Remove Department":
          removeDept();
          break;
        case "Exit":
          connection.end();
          break;
      }
    });
}

// connect to routes
// connect to employeeRoutes to request a list of all employees
const showAll = () => {
  fetch(`http://localhost:${PORT}/api/employees`)
    .then((response) => response.json())
    .then((data) => {
      console.table(data.data);
      startPrompt();
    });
};

// see all employees by manager
const showByManager = () => {
  fetch(`http://localhost:${PORT}/api/employees/managers`)
    .then((response) => response.json())
    .then((data) => {
      let managerData = {};
      let managerChoices = [];
      for (let i = 0; i < data.data.length; i++) {
        let key = data.data[i].first_name + " " + data.data[i].last_name;
        managerChoices.push(key);
        managerData[key] = data.data[i].id;
      }

      inquirer
        .prompt({
          name: "managerChoice",
          type: "list",
          message: "Select a manager",
          choices: managerChoices,
        })
        .then((answer) => {
          console.log(answer.managerChoice + managerData[answer.managerChoice]);
          fetch(
            `http://localhost:${PORT}/api/employees?manager=${
              managerData[answer.managerChoice]
            }`
          )
            .then((response) => response.json())
            .then((data) => {
              console.table(data.data);
              startPrompt();
            });
        });
    });
};

// see all employees by department
const showByDepartment = () => {
  fetch(`http://localhost:${PORT}/api/departments`)
    .then((response) => response.json())
    .then((data) => {
      let departmentData = {};
      let departmentChoices = [];
      for (let i = 0; i < data.data.length; i++) {
        let key = data.data[i].Department;
        departmentChoices.push(key);
        departmentData[key] = data.data[i].id;
      }

      inquirer
        .prompt({
          name: "departmentChoice",
          type: "list",
          message: "Select a department",
          choices: departmentChoices,
        })
        .then((answer) => {
          fetch(
            `http://localhost:${PORT}/api/employees?department=${
              departmentData[answer.departmentChoice]
            }`
          )
            .then((response) => response.json())
            .then((data) => {
              console.table(data.data);
              startPrompt();
            });
        });
    });
};

// add an employee
const addEmployee = () => {
  let newEmployee = {};
  console.log("Add an Employee");
  inquirer
    .prompt({
      name: "First name",
      type: "input",
      message: "Enter employee's first name.",
    })
    .then((answer) => {
      newEmployee.first_name = answer.first_name;
      inquirer
        .prompt({
          name: "Last name",
          type: "input",
          message: "Enter employee's last name.",
        })
        .then((answer) => {
          newEmployee.last_name = answer.last_name;
          fetch(`http://localhost:${PORT}/api/departments`)
            .then((response) => response.json())
            .then((data) => {
              let departmentData = {};
              let departmentChoices = [];
              for (let i = 0; i < data.data.length; i++) {
                let key = data.data[i].Department;
                departmentChoices.push(key);
                departmentData[key] = data.data[i].id;
              }

              inquirer
                .prompt({
                  name: "departmentChoice",
                  type: "list",
                  message: "Select a department.",
                  choices: departmentChoices,
                })
                .then((answer) => {
                  newEmployee.department_id =
                    departmentData[answer.departmentChoice];

                  fetch(`http://localhost:${PORT}/api/roles`)
                    .then((response) => response.json())
                    .then((data) => {
                      let roleData = {};
                      let roleChoices = [];
                      for (let i = 0; i < data.data.length; i++) {
                        let key = data.data[i].title;
                        roleChoices.push(key);
                        roleData[key] = data.data[i].id;
                      }
                      inquirer
                        .prompt({
                          name: "Title",
                          type: "list",
                          message: "Select Title.",
                          choices: roleChoices,
                        })
                        .then((answer) => {
                          newEmployee.role_id = roleData[answer.title];
                          fetch(`http://localhost:${PORT}/api/employees`, {
                            method: "POST",
                            body: JSON.stringify(newEmployee),
                            headers: { "Content-Type": "application/json" },
                          })
                            .then((response) => response.json())
                            .then((data) => {
                              console.log(data.message);
                              console.table(data.data);
                              startPrompt();
                            });
                        });
                    });
                });
            });
        });
    });
};

// remove employee
const removeEmployee = () => {
  fetch(`http://localhost:${PORT}/api/employees`)
    .then((response) => response.json())
    .then((data) => {
      let managerData = {};
      let managerChoices = [];
      for (let i = 0; i < data.data.length; i++) {
        let key = data.data[i].first_name + " " + data.data[i].last_name;
        managerChoices.push(key);
        managerData[key] = data.data[i].id;
      }

      inquirer
        .prompt({
          name: "employeeChoice",
          type: "list",
          message: "Select an Employee to Remove",
          choices: managerChoices,
        })
        .then((answer) => {
          fetch(
            `http://localhost:${PORT}/api/employee/${
              managerData[answer.employeeChoice]
            }`,
            {
              method: "DELETE",
              headers: { "Content-Type": "application/json" },
            }
          )
            .then((response) => response.json())
            .then((data) => {
              console.log(data.message);
              // console.table(data.data);
              startPrompt();
            });
        });
    });
};

// update employee

// see all departments
const viewDept = () => {
  fetch(`http://localhost:${PORT}/api/departments`)
    .then((response) => response.json())
    .then((data) => {
      console.table(data.data);
      startPrompt();
    });
};

// add a department
const addDept = () => {
  fetch(`http://localhost:${PORT}/api/departments`)
    .then((response) => response.json())
    .then((data) => {
      console.table(data.data);
      startPrompt();
    });
};

// see all roles
const viewRoles = () => {
  fetch(`http://localhost:${PORT}/api/roles`)
    .then((response) => response.json())
    .then((data) => {
      console.table(data.data);
      startPrompt();
    });
};

// add a role
const addRole = () => {
  let role = { department_id: 1, title: "test", salary: 0, manager: false };

  fetch(`http://localhost:${PORT}/api/departments`)
    .then((response) => response.json())
    .then((data) => {
      let departmentData = {};
      let departmentChoices = [];
      for (let i = 0; i < data.data.length; i++) {
        let key = data.data[i].Department;
        departmentChoices.push(key);
        departmentData[key] = data.data[i].id;
      }

      inquirer
        .prompt({
          name: "departmentChoice",
          type: "list",
          message: "Select a department.",
          choices: departmentChoices,
        })
        .then((answer) => {
          role.department_id = departmentData[answer.departmentChoice];

          inquirer
            .prompt({
              name: "Title",
              type: "input",
              message: "Input a New Role.",
            })
            .then((answer) => {
              role.title = answer.Title;
              inquirer
                .prompt({
                  name: "Salary",
                  type: "number",
                  message: "Input a salary.",
                })
                .then((answer) => {
                  role.salary = answer.Salary;
                  inquirer
                    .prompt({
                      name: "Manager",
                      type: "confirm",
                      message: "Is this a manager role?",
                    })
                    .then((answer) => {
                      role.manager = answer.Manager;

                      fetch(`http://localhost:${PORT}/api/roles`, {
                        method: "POST",
                        body: JSON.stringify(role),
                        headers: { "Content-Type": "application/json" },
                      })
                        .then((response) => response.json())
                        .then((data) => {
                          console.table(data.data);
                          startPrompt();
                        });
                    });
                });
            });
        });
    });
};

// converting json object to an array
const objectToArray = (obj) => {
  const keys = Object.keys(obj);
  //console.log(keys);
  const res = [];
  for (let i = 0; i < keys.length; i++) {
    res.push(obj[keys[i]]);
  }
  return res;
};
