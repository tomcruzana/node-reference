const fs = require("fs");

//Sync version
fs.writeFileSync("readme.txt", "Hello!");

const readfile = fs.readFileSync("readme.txt", "utf8");
console.log(readfile);

//Async version
fs.writeFile("readmez.txt", "Peace and love", (err) => { //this is how to write error handlers.
		(err) ? console.log(err + "error writing file") : console.log("write success!"); 
	});

fs.readFile("readmez.txt", "utf8", (err, data) =>{
	(err) ? console.log(err + "error writing file") : console.log(data);
});

//additional docs: https://nodejs.org/en/knowledge/file-system/how-to-write-files-in-nodejs/