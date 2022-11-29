const fs = require("fs");
function readingFile() {
  const dataFrom = fs.readFileSync("./from.txt", "utf-8");
  const dataAppend = fs.readFileSync("./append.txt", "utf-8");
  fs.appendFileSync("./to.txt", dataFrom + dataAppend);
}
readingFile();
