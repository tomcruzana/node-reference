const fs = require("fs");

//Note: you need to create a sample.txt file or else you'll get an error
fs.unlink("asdsad.txt", (err)=>{
	(err)? console.log(err) : console.log("File deletion success");
});

//sync version
fs.mkdirSync("newFolder"); //new dir

fs.rmdirSync("newFolder"); //remove dir

//async version
fs.mkdir("newFolder", cb())

fs.rmdir("newFolder/filename", cb()) //if the dir is not empty remove its contants first using fs.unlink, otherwise, just writedown the folder dir