import mongoose from "mongoose";
import { config } from "../config";
import { data } from "./default";

export const dbConnection = () => {
  mongoose
    .connect(config.db_url)
    .then(() => {
      console.log("database  connected...!");
    })
    .catch((err) => {
      console.log(err.message);
    });

  data();
};
