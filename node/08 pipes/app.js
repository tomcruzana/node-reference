/*
docs: https://nodejs.org/en/knowledge/advanced/streams/how-to-use-stream-pipe/
	 https://stackoverflow.com/questions/20085513/using-pipe-in-node-js-net
	 
The pipe() function reads data from a 
readable stream as it becomes available 
and writes it to a destination writable stream.

The res object is a writable stream.

It's that simple - you can pipe streams to as many places as you want.
*/

const http = require("http");
const fs = require("fs");

http.createServer((req, res)=>{
	console.log("request is coming from " + req.url); //not required
	res.writeHead(200, {"Content-type" : "text/plain"});
	const myReadableStream = fs.createReadStream(__dirname + "/sample.txt", "utf8");
	myReadableStream.pipe(res); //pipe the res stream
}).listen(9000, "127.0.0.1");

