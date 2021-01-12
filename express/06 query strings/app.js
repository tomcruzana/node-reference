//require express
const express = require("express");
const app = express();

app.set("view engine", "ejs"); //tell express that we will use ejs as a template engine
app.use("/assets", express.static("assets")); //middleware for static files. If you remove this, static file wont show on the html

//routes for http get requests
app.get("/home", (req, res)=>{
	res.render("index"); //access ejs template. By default, it will look at the View folder
});

app.get("/contact", (req, res)=>{
	console.log(req.query); //get the query string from the address bar
	res.render("contact", {qs: req.query}); //access ejs template. By default, it will look at the View folder
});

app.listen(9000); //port of the server

