import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", {
    showH: true,
  });
});

app.post("/submit", (req, res) => {
  let blogPost = req.body.content;
  res.render("./index.ejs", {
    showH: false,
    userComment: blogPost,
  });
});

app.delete("/delete");

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
