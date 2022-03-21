// Create an HTTP server that listens to server ports and gives
// response back to client

var http = require("http");  // http is a built-in module
var url = require('url');

// Create a server object:
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});  // Add an HTTP Header

    let query = url.parse(req.url, true).query;
    res.write("Hello World!");                          // Write a response to the client
    res.write("<br> Your query is: " + req.url);        // Write query string
    res.write("<br> Your name is: " + query.name);
    
    res.end();                                          // End the response
}).listen(8080);

// go to localhost:8080 to access the server