const mongoose = require("mongoose")

//mogodb user schema
const userSchema = mongoose.Schema({
  name: { type: String, required:  true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  id: { type: String },
});

const User = mongoose.model("User", userSchema);
module.exports = User;