const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter name"],
    },
    description: {
      type: String,
      required: [true, "Please enter description"],
    },
  },
  { timestamps: true }
);
const Item = mongoose.model("Item", itemSchema);
module.exports = Item;
