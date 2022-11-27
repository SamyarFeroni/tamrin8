const fs = require("fs");
console.log(1)
async function readingFile(err, data) {
    console.log(2)
    if (err) { }
    else {
        console.log(3);
        data = fs.readFileSync('./from.txt', 'utf-8');
        await fs.writeFileSync('./append.txt', data)
    }
    console.log(4)
    console.log("Done")
};
console.log(5)
readingFile()