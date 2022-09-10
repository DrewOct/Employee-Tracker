const express = require("express");
const inquirer = require("inquirer");
const db = require("./db/connection");
const routes = require("./routes/apiRoutes");
const fetch = require("node-fetch");
const chalk = require("chalk");

const startScreen = [
  "View all Employees",
  "View all Emplyees by Department",
  "View all Employees by Manager",
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

const PORT = process.env.PORT || 3006;
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
  console.log("Database connected.");
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
          case "View all Employees by Department":
            showByDept();
            break;
          case "View all Employees by Manager":
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
  });
});

// connect to routes
// connect to employeeRoutes to request a list of all employees
const showAll = () => {
  fetch(`http://localhost:${PORT}/api/employees`)
    .then((response) => response.json())
    .then((data) => {
      //   console.log(data.data);
      //console.log("test:" + objectToArray(data)[0].first_name);
      console.table(data.data);
    });
};

// connect to departmentRoutes to see all employees by department
const showByDept = () => {
  fetch(`http://localhost:${PORT}/api/departments`)
    .then((response) => response.json())
    .then((data) => {
      console.table(data);
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
