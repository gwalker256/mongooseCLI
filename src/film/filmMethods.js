const mongoose = require("mongoose");
const FilmModel = require("./filmModel");

exports.addMovie = async (newFilm) => {
  try {
    let movie = new FilmModel(newFilm);
    await movie.save();
    console.log("Movie created");
  } catch (error) {
    console.log(error);
  }
  mongoose.connection.close();
};

exports.list = async () => {
  try {
    console.log(await FilmModel.find({}));
  } catch (error) {}
  mongoose.connection.close();
};

exports.updateMovie = async (filter, change) => {
  try {
    await FilmModel.findOneAndUpdate(filter, change, {
      new: true,
    });
    console.log("Movie probably not updated but you never know");
  } catch (error) {
    console.log(error);
  }
  mongoose.connection.close();
};

// let doc = await Character.findOneAndUpdate(filter, update, {
//   new: true,
// });
