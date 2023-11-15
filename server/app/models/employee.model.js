module.exports = mongoose => {
    const Employee = mongoose.model(
      'Employee',
      new mongoose.Schema({
        firstname: String,
        lastname: String,
        department: String,
      })
    );
  
    return Employee;
  };
  