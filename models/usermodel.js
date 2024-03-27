const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    require: true,
  },
  username: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
    minlength: 6,
  },
  gender: {
    type: String,
    require: true,
    enum: ["male", "female"],
  },
  profilepic: {
    type: String,
    require: true,
  },
});
const usermodel = new mongoose.model("User", userSchema);

module.exports = usermodel;
