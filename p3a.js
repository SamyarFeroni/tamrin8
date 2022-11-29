const fs = require("fs");

function chek() {
  const path = "./newfile3.txt";
  fs.writeFileSync(path, "hello world");
  if (fs.existsSync(path)) {
    console.log("exists:", path);
  } else {
    console.log("dose not exist:", path);
  }
}

chek();
