var fs = require("fs");

// Append content
fs.appendFile("mynewfile1.txt", " This is my text.", function (err) {
  if (err) throw err;
  console.log("Updated!");
});

// Replace content
fs.writeFile("mynewfile3.txt", " This is my text.", function (err) {
  if (err) throw err;
  console.log("Replaced!");
});