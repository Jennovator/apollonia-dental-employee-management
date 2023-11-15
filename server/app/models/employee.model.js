module.exports = mongoose => {
    const Employee = mongoose.model(
      'Employee',
      new mongoose.Schema({
        name: String,
        surname: String,
        department: String,
      })
    );
  
    return Employee;
  };
  