const db = require("../models");
const Department = db.departments;

// Create and Save a new Department
exports.create = (req, res) => {
    // Validate request
 if (!req.body.name) {
   res.status(400).send({ message: "Content can not be empty!" });
   return; 
 }
 
 // Create a new Department
 const department = new Department({
   name: req.body.name
 });

 // Save Department in the database
 department
   .save(department)
   .then(data => {
     res.send(data);
   })
   .catch(err => {
     res.status(500).send({
       message:
         err.message || "Some error occurred while creating a new Department."
     });
   });
};

// Retrieve all Departments from the database.
exports.findAll = (req, res) => {
   Department.find()
     .then((departments) => {
       res.send(departments);
     })
     .catch((err) => {
       res.status(500).send({
         message:
           err.message || "Some error occurred while retrieving departments.",
       });
     });
 };

 // Find Department by ID
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Department.findById(id)
      .then((department) => {
        res.send(department );
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error retrieving department with id=" + id,
        });
      });
  };

// Update Department by ID
exports.update = (req, res) => {
    const id = req.params.id;
  
    Department.findByIdAndUpdate(id, req.body, { new: true })
      .then((department) => {
        res.send(department);
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error updating department with id=" + id,
        });
      });
  };

// Remove Department by ID
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Employee.findByIdAndRemove(id)
      .then((department) => {
        res.send(department);
      })
      .catch((err) => {
        res.status(500).send({
          message: "Could not delete department with id=" + id,
        });
      });
  };


