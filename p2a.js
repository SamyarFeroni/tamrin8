const fs = require("fs");

function readingFile() {
  data = fs.readFileSync("./from.txt", "utf-8");
  fs.writeFileSync("./to.txt", data);
  console.log("Done");
};
readingFile();
