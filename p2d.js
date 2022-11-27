const fs = require('fs');
console.log(1);
fs.readFile('./from.txt', 'utf-8', function (err, data) {
    console.log(2);
    if (err) console.log(err);
    else {
        console.log(3);
        fs.readFile('./append.txt', 'utf8', function (err, data2) {
            console.log(4);
            if (err) console.log(err);
            else {
                console.log(5);
                fs.appendFile('./to.txt', data, function (err) {
                    console.log(6);
                    if (err) console.log(err);
                });
                fs.appendFile('./to.txt', data2, function (err) {
                    console.log(7);
                    if (err) console.log(err);
                });
            }
        })
    }
    console.log(8);
    console.log('done')
});
console.log(9);
