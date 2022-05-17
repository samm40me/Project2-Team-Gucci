module.exports = mongoose => {
  var schema = mongoose.Schema(
      {
        _id: String,
        date: Date,
        year: Date,
        month: Date,
        city: String,
        sheltertype: String,
        sheltername: String,
        organization: String,
        shelter: String,
        capacity: Number,
        overnight: Number,
      },
      { timestamps: true }
  );
  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });
  const Tutorial = mongoose.model("tutorial", schema);
  return Tutorial;
};
