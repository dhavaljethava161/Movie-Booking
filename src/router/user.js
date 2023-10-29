import { create, login, logout } from "../controller/user";
import { model } from "../models";
import express from "express";

const userRouter = express.Router();


userRouter.get("/create", create);

export default userRouter;
