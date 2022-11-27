const fs = require("fs");


try {
    let data = fs.readFileSync('./test.json', "utf-8");
    data = JSON.parse(data);
    data.c = 'test c';
    data.d = { e: 'test e' };
    data.h = {name : 'samyar'}
    data = JSON.stringify(data);
    fs.writeFileSync('./test.json', data);
} catch (error) {
    console.log(error);
}






// let name = 'samyar'

// fs.readFile('test.json', "utf-8", (err, data) => {
//     if (err) return console.error(err);
//     console.log(data)
// })


// console.log(1);



// async function y() {

//     console.log('done');
// }
// y()


//Promise, async / await