const express = require("express")
const app = express()

//use a middleware
app.use((req, res, next)=>{

	//log date of the request to the console
	const date = new Date();
	console.log(date) 

	//store and pass resource to the next middleware
	res.locals.yourData = date

	next()
})

app.get("/", (req, res)=>{
	res.send(`<h1>Hello there! ${res.locals.yourData} </h1>`)
})

app.listen(9000)