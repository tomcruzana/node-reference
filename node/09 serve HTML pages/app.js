const http = require("http");
const fs = require("fs");

http.createServer((req, res)=>{
	console.log("request is coming from " + req.url); //not required
	res.writeHead(200, {"Content-type" : "text/html"});
	const myReadableStream = fs.createReadStream(__dirname + "/index.html", "utf8");
	myReadableStream.pipe(res); //pipe the res stream for better performance
}).listen(9000, "127.0.0.1");