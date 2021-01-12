const express = require("express");
const app = express();

app.get("/", (req, res)=>{
	res.send("<h1>Rawr</h1>")
});

app.get("/products", (req, res)=>{
	//the query obj is part of the req obj. The format of the query string is route?name=value&name=value
	//tyr: http://localhost:9000/products?shit= or http://localhost:9000/products?shit=nope
	(!req.query.shit) ? res.send("You must provide a search term") : res.send("<h1>Yup</h1>");
});

app.get("*", (req, res)=>{
	res.send("<h1>Invalid URL</h1>")
});

app.listen(9000);