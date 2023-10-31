import express from "express";
import { create, login, logout } from "../controller/auth";
import { auth } from "../authentication";

const authRouter = express.Router();

authRouter.get("/login", login);
authRouter.get("/logout", auth, logout);
authRouter.get("/create", create);
authRouter.put("/verify", auth);

export default authRouter;
