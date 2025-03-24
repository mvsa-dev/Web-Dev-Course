import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
let posts = [];

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", {
    posts: posts,
    year: new Date().getFullYear(),
  });
});

app.post("/submit", (req, res) => {
  let post = req.body.ypost;
  posts.push(post);
  res.render("index.ejs", {
    posts: posts,
    year: new Date().getFullYear(),
  });
});

app.post("/modify", (req, res) => {
  let modPost = true;
  res.render("index.ejs", {
    posts: posts,
    year: new Date().getFullYear(),
    modPost: modPost,
  });
});

app.post("/modified", (req, res) => {
  const postMod = req.body.postMod;
  const index = parseInt(req.body.index, 10);
  let modPost = false;
  if (!isNaN(index) && index < posts.length) {
    posts.splice(index, 1, postMod);
  }

  res.render("index.ejs", {
    posts: posts,
    year: new Date().getFullYear(),
    modPost: modPost,
  });
});

app.post("/delete", (req, res) => {
  const index = parseInt(req.body.index, 10);
  if (!isNaN(index) && index < posts.length) {
    posts.splice(index, 1);
  }
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
