function main(name, callback) {
    // doing some stuff...
    return callback(name);
};



console.log(main('alireza', function callback(name) {
    return `my name is: ${name}`
}));



