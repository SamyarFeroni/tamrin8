const fs = require('fs');
console.log(1);
async function readingFile(err, data) {
    console.log(2);
    if (err) console.log(err)
    else {
        console.log(3);
        data = fs.readFileSync('./from.txt', 'utf-8');
        console.log(4);
        fs.appendFileSync('./to.txt', data);
        console.log(5);
        data = fs.readFileSync('./append.txt', 'utf-8');
        console.log(6);
        await fs.appendFileSync('./to.txt', data);
        console.log(7);
        console.log('done');
    }
    console.log(8);
}
console.log(9);
readingFile()