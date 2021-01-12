const http = require("http");

http.createServer((req, res) => {
	//console.log(req.url); //this will show the url request. This is not required
	res.writeHead(200, {"Content-Type": "text/plain"}); //define the header of the response
	res.end("Hello!"); //send the content as a response
}).listen(9000, "127.0.0.1"); //listen to port

console.log("Listening on port 9000");