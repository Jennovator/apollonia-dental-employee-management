/* module.exports = mongoose => {
    const Department = mongoose.model(
      'Department',
      new mongoose.Schema({
        name: String,
      })
    );
  
    return Department;
  };
   */

// Convert object _id to id
module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      name: String
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Department = mongoose.model("department", schema);
  return Department;
}; 