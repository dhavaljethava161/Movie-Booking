import mongoose from "mongoose";

const movieSchema = mongoose.Schema({
  name: String,
  language: { type: String, enum: ["hindi", "english", "telugu"] },
  price: {
    normal: Number,
    executive: Number,
    premium: Number,
  },
  seats: Number,
  theater: {
    type: String,
    required: true,
  },
});
