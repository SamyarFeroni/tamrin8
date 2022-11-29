const fs = require("fs");

try {
  let names = fs.readFileSync("./names.txt", "utf-8");
  names = names
    .replace(/[\r\n]/gm, " ")
    .split(" ")
    .filter(function (entry) {
      return entry.trim() != "";
    });
  let numbers = fs.readFileSync("./numbers.txt", "utf-8");
  numbers = numbers
    .replace(/[\r\n]/gm, " ")
    .split(" ")
    .filter(function (entry) {
      return entry.trim() != "";
    });

  let namesArray = [];

  for (let name of names) {
    name = name.split("-");
    namesArray.push({
      id: name[0],
      name: name[1],
    });
  }

  let numbersArray = [];

  for (let number of numbers) {
    number = number.split("-");
    numbersArray.push({
      id: number[0],
      number: number[1],
    });
  }

  let contacts = [];

  namesArray.forEach((name) => {
    let numbers = numbersArray.filter((number) => number.id == name.id);
    numbers = numbers.map((item) => item.number);

    contacts.push({ contactName: name.name, numbers });
  });
  for(let i = 0 ;i<contacts.length;i++){
    if(contacts[i].numbers.length > 1){
      console.log(contacts[i].contactName +" phone numbers are "+ contacts[i].numbers );
    };
    if(contacts[i].numbers.length == 1){
      console.log(contacts[i].contactName +" phone number is "+ contacts[i].numbers );
    };
    if(contacts[i].numbers.length == 0){
      console.log(contacts[i].contactName +" hasn’t any phone number");
    };

  }
console.log(contacts);
  // do the rest...
} catch (error) {
  console.log(error);
}
