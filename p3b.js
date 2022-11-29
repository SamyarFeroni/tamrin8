const fs = require("fs");
function chek() {
  const path = "./newfile.txt";
  fs.writeFile(path, "hello world!", (err, data) => {
    if (err) return console.log("somtehing went wrong");
    fs.readFile(path, "utf-8", (err, data) => {
      if (err) return console.log("file not exist");
      console.log('file exists');
    });
  });
}
chek();
