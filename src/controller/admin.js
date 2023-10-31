import { model } from "../models";

export const create = async (req, res) => {
  try {
    const movie = await model.Movie.findOne({ name: req?.body?.name });
    if (req?.loginUser?.userType === "admin") {
      if (!movie) {
        await model.Movie.create(req?.body)
          .then((result) => res.send({ status: 200, result }))
          .catch((err) => res.send({ status: 400, err: err.message }));
      } else res.send("movie is already exists");
    } else res.send("movie can be create by admin only");
  } catch (error) {
    res.send({ status: 400, err: err.message });
  }
};

export const update = async (req, res) => {
  try {
    if (req?.loginUser?.userType === "admin") {
      await model.Movie.findOneAndUpdate({ name: req?.body?.name }, req?.body, {
        upsert: true,
        new: true,
      })
        .then((result) => res.send({ status: 200, result }))
        .catch((err) => res.send({ status: 400, err: err.message }));
    } else res.send("movie can be update by admin only");
  } catch (error) {
    res.send({ status: 400, err: err.message });
  }
};

export const Delete = async (req, res) => {
  if (req?.loginUser?.userType === "admin") {
    const movie = await model.Movie.findOne({ name: req?.body?.name });
    movie.isDeleted = true;
    await movie.save();
    res.send("Movie has been deleted");
  } else res.send("movie can be deleted by admin only");
};
