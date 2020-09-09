const mongoose = require("mongoose");
// optional shortcut to the mongoose.Schema class
let Schema = mongoose.Schema;

let athleteSchema = new Schema(
  {
    name: String,
    email: String,
    googleId: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Athlete", athleteSchema);
