const db = require("../models");
const Employee = db.employees;

// Create and Save a new Employee
exports.create = (req, res) => {
     // Validate request
  if (!req.body.firstname || !req.body.lastname) {
    res.status(400).send({ message: "Content can not be empty!" });
    return; 
  }
  
  // Create a new Employee
  const employee = new Employee({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    department: req.body.department
  });

  // Save employee in the database
  employee
    .save(employee)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating an Employee account."
      });
    });
};

// Retrieve all Employees from the database.
exports.findAll = (req, res) => {
    Employee.find()
      .then((employees) => {
        res.send(employees);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving employees.",
        });
      });
  };

// Find Employee by department
exports.findByDepartment = (req, res) => {
    const department = req.params.department;
  
    Employee.find({ department: department })
      .then((employees) => {
        res.send(employees);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving employees.",
        });
      });
  };    

// Find Employee by ID
// exports.findOne = (req, res) => {
//     const id = req.params.id;
//     console.log('Requested ID:', id);

//     Employee.findById(id)
//         .then(data => {
//             console.log('Retrieved Employee:', data);
//             if (!data)
//                 res.status(404).send({ message: "Not found Employee with id " + id });
//             else res.send({message: "Employee retrieve with id" + id});
//         })
//         .catch(err => {
//             console.error(err);
//             res.status(500).send({ message: "Error retrieving Employee with id=" + id });
//         });
// };

// Find Department by ID
exports.findOne = (req, res) => {
  const id = req.params.id;

  Employee.findById(id)
      .then((employee) => {
          res.send(employee);
      })
      .catch((err) => {
          res.status(500).send({
              message: "Error retrieving employee with id=" + id,
          });
      });
};


// Update Employee by ID
exports.update = (req, res) => {
    const id = req.params.id;
  
    Employee.findByIdAndUpdate(id, req.body, { new: true })
      .then((employee) => {
        res.send(employee);
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error updating Employee with id=" + id,
        });
      });
  };

// Remove employee by ID
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Employee.findByIdAndDelete(id)
      .then((employee) => {
        if (!employee) {
          res.status(404).send({
            message: `Cannot delete employee with id=${id}. Id not found!`
          });
        } else {
          res.send({
            message: "Employee was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete employee with id=" + id
        });
      });
  };

// Delete all Employees from the database.
exports.deleteAll = (req, res) => {
  Employee.deleteMany({})
  .then(data => {
    res.send({
      message: `${data.deletedCount} Employees were deleted successfully!`
    });
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while removing all tutorials."
    });
  });
};