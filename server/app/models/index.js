const mongoose = require('mongoose');
const Employees = require('./employee.model');
const Departments = require('./department.model');

const db = {};
db.mongoose = mongoose;
db.url = process.env.MONGODB_URI;
db.employees = Employees(mongoose);
db.departments = Departments(mongoose);

module.exports = db;
