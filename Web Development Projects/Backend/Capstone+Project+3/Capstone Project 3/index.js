import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
let posts = [];

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  posts = [];
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

app.delete("/delete", (req, res) => {
  res.render("index.ejs", {});
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
