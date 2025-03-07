import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
let postData = []; // Stores user posts in an array of objects.

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  let blogPost = "";
  res.render("index.ejs", {
    userComment: blogPost,
  });
});

app.post("/submit", (req, res) => {
  let blogPost = req.body.content;
  res.render("index.ejs", {
    userComment: blogPost,
  });
});

app.delete("/delete", (req, res) => {
  res.render("index.ejs", {});
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
