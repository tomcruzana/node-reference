/*
Buffer:
A buffer is a temporary memory that a stream takes to hold some data until it is consumed.
The Buffer class which provides instances to store raw data similar to an array of integers but corresponds to a raw memory allocation outside the V8 heap. Buffer class is a global class that can be accessed in an application without importing the buffer module.

Streams:
Streams can be readable, writable, or both. All streams are instances of EventEmitter. That's why you'll see we can access the .on method of the Event emitter.
Writable streams - allow node to write data to a stream
Readable streams - allow node to read data to from a stream
Duplex - can read and write to a stream
*/

const http = require("http");
const fs = require("fs");

//reading & writing via streams & buffers
const myReadStream = fs.createReadStream(__dirname + "/large_text_file.txt", "utf8"); //if you dont provide utf as character encoding, you will get raw data
const myWriteStream = fs.createWriteStream(__dirname + "/new_large_text_file.txt"); //no need to put the char encoding

myReadStream.on("data", (chunk)=>{ //data is a built-in event
	console.log("new chunk received:"); //this log will notify us whenever it reads a new buffered data
	console.log(chunk); //buffer
	myWriteStream.write(chunk); //buffered writing
});

//myWriteStream.write("test");

//up next, we can do this even better using pipes: myReadStream.pipe(myWriteStream);
