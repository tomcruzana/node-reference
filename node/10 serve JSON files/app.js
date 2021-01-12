const http = require("http");
const fs = require("fs");

const data = fs.readFileSync("./data.json", "utf8"); //synced file read of json file

http.createServer((req, res)=>{
	console.log("request is coming from " + req.url); //not required
	res.writeHead(200, {"Content-type" : "application/json"}); //json content
	res.end(data)
}).listen(9000, "127.0.0.1");

//remember if it's an object literal, you must use JSON.stringify before sending it as a response