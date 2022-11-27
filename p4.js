const fs = require('fs');

fs.readFile('names.txt','utf8',function(err,data){
    if(err)console.log(err);
    else{
        let list = [] ;
        data.toString()
        console.log(data);
        list.push(data)
        console.log(list);
    }
})
