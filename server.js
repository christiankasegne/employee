const cTable = require('console.table');
const express = require('express');
const inquirer = require('inquirer');
const mysql = require('mysql2');
require('dotenv').config();
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection (
  {
    host: '127.0.0.1',
    port: 3306,
    user: process.env.USERNAME_DB,
    password: process.env.PASSWORD,
    database: process.env.NAME_DB
  },
//   console.log(`You are now connected to the employee_db.`)
);


db.connect((err)  => {
    if (err) throw err
    console.log(`You are now connected to the employee_db.` + db.threadId)
    startPrompt();
});

//prompt



