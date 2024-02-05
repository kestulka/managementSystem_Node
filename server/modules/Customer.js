const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const CustomerSchema = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    reqiured: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
  updatedAt: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("Customer", CustomerSchema);
