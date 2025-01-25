import express from "express";
import ejs from "ejs";

const app = express();
const port = 3000;

let currentDate = new Date();
let dayOfWeek = currentDate.getDay();

app.get("/", (req, res) => {
  if (dayOfWeek === 6 || dayOfWeek === 0) {
    res.render("index.ejs", {
      weekType: "the weekend",
      advice: ", it's time to work",
    });
  } else {
    res.render("index.ejs", {
      weekType: "a weekday",
      advice: ", it's time to work",
    });
  }
});

app.listen(port, () => {
  console.log(`A port is live at ${port}`);
});
