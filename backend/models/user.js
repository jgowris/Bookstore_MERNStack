const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  admin: { type: String, enum: ["yes", "no"], default: "no" },
});

const User = mongoose.model("User", UserSchema);

module.exorts = User;
