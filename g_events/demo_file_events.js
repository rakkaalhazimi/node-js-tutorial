var fs = require("fs");

// Create file
fs.open("demofile.txt", "w", function (err, data) {
    if (err) throw err;
})

// Events when opening and closing file
var rs = fs.createReadStream("./demofile.txt")
rs.on("open", () => console.log("The file is open"));
rs.on("close", () => console.log("The file is closed"));
rs.close()