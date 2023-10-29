import { model } from "../models";

export const create = async (req, res) => {
  await model.User.create(req?.body)
    .then((resData) => res.send({ status: 200, result: resData }))
    .catch((err) => res.send({ status: 400, err: err.message }));
};

export const update = async (req, res) => {
  const { email } = req?.loginUser;
  await model.User.findOneAndUpdate({ email }, req?.body, {
    new: true,
    upsert: true,
  })
    .then((resData) => res.send({ status: 200, result: resData }))
    .catch((err) => res.send({ status: 200, err: err.message }));
};
