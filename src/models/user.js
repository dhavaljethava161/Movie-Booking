import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  userType: {
    type: String,
    required: true,
    enum: ["customer", "admin"],
    default: "admin",
  },
  age: Number,
  address: { city: String, area: String },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

export default mongoose.model("User", userSchema);
