const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/movieApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("コネクションおk");
  })
  .catch((err) => {
    console.log("コネクションエラー");
    console.log(err);
  });

const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  score: Number,
  rating: String,
});
const Movie = mongoose.model("Movie", movieSchema); //クラス大文字単数系
const amadeus = new Movie({
  title: "Amadeus",
  year: 1986,
  score: 9.2,
  rating: "R",
});

Movie.insertMany([
  {
    title: "Amelie",
    year: 2001,
    score: 8.3,
    rating: "R",
  },

  {
    title: "Alien",
    year: 1979,
    score: 88.1,
    rating: "R",
  },

  {
    title: "The Iron Giant",
    year: 1999,
    score: 7.5,
    rating: "PG",
  },

  {
    title: "Stand By Me",
    year: 1986,
    score: 8.6,
    rating: "R",
  },

  {
    title: "Moonrise Kingdom",
    year: 2012,
    score: 7.3,
    rating: "PG-13",
  },
]).then((data) => {
  console.log("成功");
  console.log(data);
});
