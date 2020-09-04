const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    team: {
      type: String,
      required: true,
    },
    position: {
      type: [String],
      enum: [
        "Point Guard",
        "Shooting Guard",
        "Power Forward",
        "Small Forward",
        "Center",
      ],
      required: true,
    },
    age: {
      type: Number,
      min: 1,
      required: true,
    },
    height: {
      type: Number,
      min: 1,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Player", playerSchema);
