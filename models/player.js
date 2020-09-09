const mongoose = require("mongoose");

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

let commentSchema = new Schema(
  {
    rating: {
      type: Number,
    },

    commentContent: {
      type: String,
      required: true,
    },
    athlete: { type: Schema.Types.ObjectId, ref: "Athlete" },
  },

  {
    timestamps: true,
  }
);

let playerSchema = new Schema(
  {
    hooper: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      default:
        "https://pimage.sport-thieme.de/detail-fillscale/wilson-evolution-basketball/268-9119",
    },
    image: {
      type: String,
      default: "",
    },
    avgRating: {
      type: Number,
      default: 10,
    },
    age: {
      type: Number,
    },
    height: {
      type: String,
    },
    position: {
      type: String,
    },
    athlete: {
      type: Schema.Types.ObjectId,
      ref: "Athlete",
    },
    comments: [commentSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Player", playerSchema);
