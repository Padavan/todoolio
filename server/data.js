const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchema = new Schema(
  {
    id: Number,
    name: String,
    status: Boolean
  }
);

module.exports = mongoose.model("Data", DataSchema);
