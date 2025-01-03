const fs = require("fs");

/*fs.writeFile("message.txt", "Trust in the Lord!", (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});*/

fs.readFile("message.txt", "utf8", callback);

function callback(err, data) {
  if (err) throw err;
  console.log(data);
}
