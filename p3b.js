const fs = require('fs');

function chek(){
    const path = "./newfile.txt"
console.log(path);
if(fs.existsSync(path)){
    console.log("exists:", path);
}else{
    console.log("dose not exist:" , path);
}}
async function Makenewfile(err){
    if(err) console.log(err);
    else{
     await  fs.open('newfile.txt','w',function(err){
        if(err)console.log(err);
        console.log('done');
       }) 
    }
};
chek();
Makenewfile();
chek()