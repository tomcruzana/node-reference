//Buffers are global and you dont need to require it.
//this is an example to demonstrate buffers
const buf = new Buffer("Hello", "utf8")

console.log(buf) //stores in hex to make it look short but it's actually binary data behind the scense
console.log(buf.toString()) 
console.log(buf.toJSON()) 
console.log(buf[2]) 

buf.write("Wo") //since buffer is stored in the memory, u may override it
console.log(buf.toString()) 