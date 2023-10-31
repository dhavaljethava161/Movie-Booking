import mongoose from "mongoose";

const movieSchema = mongoose.Schema(
  {
    name: String,
    language: { type: [String], enum: ["hindi", "english", "telugu"] },
    price: {
      normal: Number,
      executive: Number,
      premium: Number,
    },
    theater: {
      type: [String],
      required: true,
    },
    releaseDate: Date,
    isDeleted: {
      type: String,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Movie", movieSchema);
