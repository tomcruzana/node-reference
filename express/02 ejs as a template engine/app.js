/*
	A template engine enables you to use static template files in your application. At runtime, 
	the template engine replaces variables in a template file with actual values, and transforms 
	the template into an HTML
	
	Some popular template engines that work with Express are Pug, Mustache, and EJS.
	EJS docs: https://ejs.co/#docs
*/

//require express
const express = require("express");
const app = express();

app.set("view engine", "ejs"); //tell express that we will use ejs as a template engine

//routes for http get requests
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

app.listen(9000); //port of the server

