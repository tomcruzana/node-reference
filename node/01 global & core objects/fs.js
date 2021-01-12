const fs = require("fs")

// write file sync
fs.writeFileSync("sample.txt", "hello, world")

// write file async
fs.writeFile("./sample2.txt", "hello, universe", (err)=>{
	if(err){
		console.log("error writing async")
	}
})

console.log(fs.readFileSync("sample.txt").toString())

//delete file synchronously
try {
    fs.unlinkSync('./sample.txt');
    console.log('sample.txt successfully deleted');
} catch (err) {
    console.log('Error:', err);
}


//delete file asynchronously -- preferred way 
fs.unlink('./sample2.txt', function(err) {
    if (err) {
        console.log('Error:', err);
    } else {
        console.log('sample.txt successfully deleted');
    }
});