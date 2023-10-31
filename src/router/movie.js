import express from "express";
import { Delete, create, update } from "../controller/admin";
import { auth } from "../authentication";

const movieRouter = express.Router();

movieRouter.post("/create", auth, create);
movieRouter.put("/update", auth, update);
movieRouter.put("/delete", auth, Delete);

export default movieRouter;
