import { model } from "../models";

export const auth = async (req, res, next) => {
  // const token = req?.cookies.jwt;
  const token = req?.headers?.authorization.split(" ")[1];
  if (!token) res.send("You are'nt sign-in");
  else {
    const data = jwt.verify(token, "154rhqE");
    const userData = await model.User.findOne({ email: data.email });

    req.loginUser = userData;
    next();
  }
};
