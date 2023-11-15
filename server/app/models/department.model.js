module.exports = mongoose => {
    const Department = mongoose.model(
      'Department',
      new mongoose.Schema({
        name: String,
      })
    );
  
    return Department;
  };
  