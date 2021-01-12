const http = require("http");
const fs = require("fs");

http.createServer((req, res) =>{
	if(req.url === "/" || req.url === "/home"){
		res.writeHead(200, {"Content-type" : "text/html"});
		fs.createReadStream(__dirname + "/index.html", "utf8").pipe(res); //pipe the res stream for better performance
	}
	else if(req.url === "/api"){
		res.writeHead(200, {"Content-Type" : "application/json"});
		var person = {
			name : "Thomas",
			title : "owner"
		};
		res.end(JSON.stringify(person));
	}
	else{ //note the else is important, or you routes will be broken
		res.writeHead(200, {"Content-Type" : "text/plain"});
		res.end("404 not found");
	}
}).listen(9000, "127.0.0.1");
