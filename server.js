const inquirer = require('inquirer');
const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection(
  {
    host: '127.0.0.1',
    port: 3306,
    user: process.env.USERNAME_DB,
    password: process.env.PASSWORD,
    database: process.env.NAME_DB,
  },
  console.log('You are now connected to the employee_db.')
);

//prompt
async function startPrompt() {
  const replay = await inquirer.prompt([
    {
      type: 'list',
      name: 'choice',
      message: 'What would you like to do?',
      choices: [
        'View all employees',
        'View all roles',
        'View all deparments',
        'Add employee',
        'Update employee',
        'Add role',
        'Add department',
      ],
    },
  ]);

  if (replay.choice === 'View all employees') {
    console.log('hi')
    db.query('SELECT * FROM employee', (err, result) => {
      if (err) throw err;
      console.table(result);
      startPrompt();
    });
  }
  if (replay.choice === 'View all roles') {
    console.log('hi')
    db.query('SELECT * FROM role', (err, result) => {
      if (err) throw err;
      console.table(result);
      startPrompt();
    });
  }
  if (replay.choice === 'View all deparments') {
    db.query('SELECT * FROM department', (err, result) => {
      if (err) throw err;
      console.table(result);
      startPrompt();
    });
  }
  if (replay.choice === 'Add employee') {
    const replay = await inquirer.prompt([
      {
        type: 'input',
        name: 'firstName',
        message: "What is the new employees' first name?",
      },
      {
        type: 'input',
        name: 'lastName',
        message: "What is the new employees' last name?",
      },
      {
        type: 'input',
        name: 'newRole',
        message: "What is the new employees' role id?",
      },
      {
        type: 'input',
        name: 'managerId',
        message: "What is the new employees' manager id?",
      },
    ]);
    db.query(
      'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)',
      [replay.firstName, replay.lastName, replay.newRole, replay.managerId],
      (err, result) => {
        if (err) throw err;
        console.table(result);
        startPrompt();
      }
    );
  }

  if (replay.choice === "Update employee") {
    const replay = await inquirer.prompt([
      {
        type: 'input',
        name: 'updateEmployee',
        message: "What is the employees' id?",
      },
      {
        type: 'input',
        name: 'updateRole',
        message: 'What is the role id?',
      },
    ]);
    db.query(
      'UPDATE employee SET role_id = ? WHERE id = ?',
      [replay.updateRole, replay.updateEmployee],
      (err, result) => {
        if (err) throw err;
        console.table(result);
        startPrompt();
      }
    );
  }

  if (replay.choice === 'Add role') {
    const replay = await inquirer.prompt([
      {
        type: 'input',
        name: 'newRole',
        message: 'What is the new role?',
      },
      {
        type: 'input',
        name: 'newSalary',
        message: 'What is the salary?',
      },
      {
        type: 'input',
        name: 'newDepartID',
        message: 'What is the department id?',
      },
    ]);
    db.query(
      'INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)',
      [replay.newRole, replay.newSalary, replay.newDepartID],
      (err, result) => {
        if (err) throw err;
        console.table(result);
        startPrompt();
      }
    );
  }

  if (replay.choice === 'Add department') {
    const replay = await inquirer.prompt([
      {
        type: 'input',
        name: 'newDepartment',
        message: 'What is the new department?',
      },
    ]);
    db.query(
      'INSERT INTO department (name) VALUES (?)',
      [replay.newDepartment],
      (err, result) => {
        if (err) throw err;
        console.table(result);
        startPrompt();
      }
    );
  }

}
db.connect((err) => {
  if (err) throw err;
  startPrompt();
});
