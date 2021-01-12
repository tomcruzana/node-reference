/*
 These are the basic syntax when performing HTTP methods
 
 GET - app.get("route", cb())
 POST - app.get("route", cb())
 DELETE - app.get("route", cb())

*/

//require express
const express = require("express");
const app = express();

app.set("view engine", "ejs"); //tell express that we will use ejs

//routes for http get requests
app.get("/", (req, res)=>{ //basic html. use sendFile()
	res.sendFile(__dirname + "/templates/index.html")
});

app.get("/contact", (req, res)=>{ //plain text. use send()
	res.send("This is the contact page")
});

app.get("/profile/:id", (req, res)=>{
	res.send("This is the page with an id of " + req.params.id) //access url with a parameter. The param is represented by a semicolon :
});

app.get("/employees/:id", (req, res)=>{
	res.render("index"); //access ejs template. By default, it will look at the View folder
});

app.get("/location/:store", (req, res)=>{
	let stores = {
		name: "Siomai House",
		address: "3440 NW ave, 90001, NY, USA"
	};
	res.render("location", {stores: stores, route: __dirname + "\\" +req.params.store}); //access a dynamic ejs template. By default, it will look at the view folder
});

app.listen(9000);

