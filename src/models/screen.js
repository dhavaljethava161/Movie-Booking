import mongoose from "mongoose";

const screenSchema = mongoose.Schema({
  screen: {
    type: Number,
    enum: [1, 2, 3, 4, 5],
  },
  time:{}
});
