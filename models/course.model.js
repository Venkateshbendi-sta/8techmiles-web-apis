
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const courseSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
      default: "",
    },
    duration: {
      type: Number,
      required: true,
      default: 60,
    },
    price: {
      type: Number,
      required: true,
      default: 100,
    },
    image: {
      type: String,
      required: false,
    },
  },
  { timeStamp: true }
);

const courseModel = mongoose.model("Course", courseSchema);
module.exports = courseModel;