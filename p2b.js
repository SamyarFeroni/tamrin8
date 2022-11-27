const fs = require('fs')
console.log(1)
fs.readFile('./from.txt', 'utf-8', function (err, data) {
    //console.log(data)
    console.log(2)
    if (err) console.log(err)
    console.log(3)
    fs.writeFile('./append.txt', data, (err) => {
        console.log(4)
        if (err) console.log(err);

        else {
            console.log(5);
            console.log("done");
        };
    });
});
console.log(6);




