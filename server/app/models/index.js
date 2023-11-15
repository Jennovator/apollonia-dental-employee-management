const dbConfig = require("../config/db.config.js");
const mongoose = require("mongoose");
const Employees = require('./employee.model');
const Departments = require('./department.model');

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.employees = Employees(mongoose);
db.departments = Departments(mongoose);

module.exports = db;