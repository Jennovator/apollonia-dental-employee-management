/* module.exports = mongoose => {
    const Employee = mongoose.model(
      'Employee',
      new mongoose.Schema({
        firstname: String,
        lastname: String,
        department: String,
      })
    );
  
    return Employee;
  }; */
  
// Convert object _id to id
module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      firstname: String,
      lastname: String,
      department: String
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Employee = mongoose.model("employee", schema);
  return Employee;
}; 