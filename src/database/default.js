import { config } from "../config";
import { model } from "../models";
import bcrypt from "bcryptjs";

export const data = async () => {
  await model.User.updateOne(
    { email: config.credential.email },
    {
      $set: {
        email: config.credential.email,
        password: await bcrypt.hash(config.credential.pass, 12),
        usertype: "admin",
      },
    },
    { upsert: true, new: true }
  );
};