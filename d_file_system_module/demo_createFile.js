var fs = require("fs");

// appendFile method
fs.appendFile("mynewfile1.txt", "Hello content!", function(err, file) {
    if (err) throw err;
    console.log("Saved!")
});


// open method
fs.open("mynewfile2.txt", "w", function(err, file) {
    if (err) throw err;
    console.log("Saved!")
});


// writeFile method
fs.writeFile("mynewfile3.txt", "Hello content!", function(err, file) {
    if (err) throw err;
    console.log("Saved!")
});