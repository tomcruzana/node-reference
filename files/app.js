const fs = require("fs");

const note = "hello, world!";
const append = "\nMy name is Tom, and Im a software engineer.";

fs.writeFileSync("file.txt", note);
fs.appendFileSync("file.txt", append);

