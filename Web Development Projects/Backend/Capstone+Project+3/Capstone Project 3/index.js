import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", {
    year: new Date().getFullYear(),
  });
});

app.post("/submit", (req, res) => {
  let postData = req.body.ypost;
  res.render("index.ejs", {
    userPost: postData,
    year: new Date().getFullYear(),
  });
});

app.delete("/delete", (req, res) => {
  res.render("index.ejs", {});
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
