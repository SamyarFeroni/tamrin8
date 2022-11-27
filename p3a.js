const fs = require('fs')

function chek(){
    const path = "./newfile.txt"
console.log(path);
if(fs.existsSync(path)){
    console.log("exists:", path);
}else{
    console.log("dose not exist:" , path);
}



}
chek()
fs.open('./newfile.txt','w',function(err){
    if(err) throw err;
    console.log("done");
})
chek()
