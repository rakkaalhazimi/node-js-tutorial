var http = require("http");
var dt = require("./myfirst_module")

http.createServer(function (req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end("The date and time are currently: " + dt.myDateTime());
}).listen(8080);

// go to localhost:8080 to access the server