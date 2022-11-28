const { count } = require('console');
const fs = require('fs');


// fs.readFile('names.txt','utf8',function(err,data){
//     let list = [] 
//     let list2 = []
//     if(err)console.log(err);
//     else{

//         data.toString()
//        // console.log(data);
//         list.push(data)

//         console.log(list);
//     }})


fs.readFile('numbers.txt', 'utf8', function (err, data2) {

    let text_ = data2.replace(/(\r)/gm, "");

    let textByline = text_.split("\n");
    textByline.pop();



    //split the id
    let array = []
    let ID = []
    let number = []
    let idAndNumber = {}
    let duplicate = {}
    for (let i = 0; i < textByline.length; i++) {
        //console.log(textByline[i]);
        let IdAndNumber = textByline[i].split("-")
        array.push(IdAndNumber)
        ID.push(array[i][0]);
        number.push(array[i][1]);
        ID.forEach((element, index) => {
            idAndNumber[element] = number[index]
        })
        // console.log(array[i][1]);
    }
    ID.forEach(function (x) { duplicate[x] = (duplicate[x] || 0) + 1; })

    console.log(duplicate);
    console.log(ID);
    console.log(number);
    console.log(idAndNumber);

    // console.log(array);

});


// console.log(text_num);
// let text_numByLine = text_num.split('\n')
// console.log(text_numByLine);



   // console.log(list);
   // console.log(list2);
