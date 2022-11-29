const fs = require("fs");
fs.readFile("./from.txt", "utf-8", function (err, data) {
  if (err) return console.log(err);
  fs.writeFile("./to.txt", data, (err) => {
    if (err) return console.log(err);
    console.log("done");
  });
});

