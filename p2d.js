const fs = require("fs");

fs.readFile("./from.txt", "utf-8", function (err, data) {
  if (err) console.log(err);
  else {
    fs.readFile("./append.txt", "utf8", function (err, data2) {
      if (err) console.log(err);
      else {
        fs.appendFile("./to.txt", data + "\n" + data2, function (err) {
          if (err) console.log(err);
        });
      }
    });
  }

  console.log("done");
});
