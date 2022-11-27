const fs = require('fs');

fs.readFile('names.txt','utf8',function(err,data){
    let list = [] 
    let list2 = []
    if(err)console.log(err);
    else{

        data.toString()
       // console.log(data);
        list.push(data)
   
        console.log(list);
    }
    fs.readFile('numbers.txt','utf8',function(err,data2){
        if(err)console.log(err);
        else{
            data2.toString();
            //console.log(data2);
            list2.push(data2);
            console.log(list2)
        }

    })

    console.log(list);
   // console.log(list2);
   
})
