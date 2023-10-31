import { create, login, logout } from "../controller/user";
import { model } from "../models";
import express from "express";

const userRouter = express.Router();

export default userRouter;
