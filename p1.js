function thisName(name, lname, callback) {
    return callback(name, lname)
};

console.log(thisName('Samyar', 'Feroni', function callback(name, lname) {
    return name + " " + lname
}))