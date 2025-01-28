import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("./index.ejs", {
    showH: true,
    origin: "Enter your name below 👇",
  });
});

app.post("/submit", (req, res) => {
  //Add body input to variables
  let nameFirst = req.body.fName;
  let nameLast = req.body.lName;
  //Get number of chars in the input
  let charLength = nameFirst.length + nameLast.length;
  res.render("./index.ejs", {
    showH: false,
    num: charLength,
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
