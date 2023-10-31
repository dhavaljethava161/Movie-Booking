import { model } from "../models";
import jwt from "jsonwebtoken";

export const auth = async (req, res, next) => {
  // const token = req?.cookies.jwt;
  const token = req?.headers?.authorization.split(" ")[1];
  console.log("token===>", token);
  if (!token) res.send("You are'nt sign-in");
  else {
    const data = await jwt.verify(token, "14986");
    console.log("data===>", data);
    const userData = await model.User.findOne({ email: data.email });
    console.log("userData===>", userData);

    req.loginUser = userData;
    next();
  }
};
