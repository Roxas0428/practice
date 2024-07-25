const path = require("path");
const express = require("express");
const app = express();
const redditData = require("./data.json");
app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "views")); //どこでもindexjsを基準にした実行を行える

app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  const data = redditData[subreddit];
  if (data) {
    res.render("subreddit", { ...data });
  } else {
    res.render("notfound", { subreddit });
  }
});

app.get("/rand", (req, res) => {
  const num = Math.floor(Math.random() * 10) + 1;
  res.render("random", { num });
});

app.get("/cats", (req, res) => {
  const cats = ["たま", "とら", "くろ", "もも", "じじ"];
  res.render("cats", { cats });
});
app.listen(3000, () => {
  console.log("待受中");
});
