import "dotenv/config";
import express from "express";
import cookieParser from "cookie-parser";
import { config } from "./config";
import { dbConnection } from "./database";
import cors from "cors";
import { routes } from "./router";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/user", routes.user);
app.use("/", routes.auth);

const port = config.port || 3000;

app.listen(port, () => {
  console.log(`Your server is running on http://localhost:${port}`);
  dbConnection();
});
