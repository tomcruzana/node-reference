//tutorial: https://youtu.be/ZX3qt0UWifc

const express = require("express")
const app = express()

//mock data
const users = [
	{id: 1, name: "Thomas"},
	{id: 2, name: "David"},
	{id: 3, name: "Ramon"},
	{id: 4, name: "Mark"},
	{id: 5, name: "Tanner"},
	{id: 6, name: "Mike"},
	{id: 7, name: "Pedro"},
	{id: 8, name: "Tom"},
	{id: 9, name: "Peter"},
	{id: 10, name: "Tonny"},
	{id: 11, name: "Raul"},
	{id: 12, name: "Sidha"},
	{id: 13, name: "Janeth"},
	{id: 14, name: "James"},
	{id: 15, name: "Roy"},
	{id: 16, name: "Lubert"},
	{id: 17, name: "Jerome"},
	{id: 18, name: "Sisig"},
	{id: 19, name: "Llamar"},
	{id: 20, name: "Rey bert"},
	{id: 21, name: "Leo"},
	{id: 22, name: "Hopkins"},
	{id: 23, name: "Raqesh"},
	{id: 24, name: "Ramil"},
	{id: 25, name: "Soy"},
	{id: 26, name: "Traversy"},
	{id: 27, name: "Kieth"}
]

//here we create a function to make the pagination feature reusable
function paginatedResults(model){
	return (req, res, next) => {
		const page = parseInt(req.query.page)
		const limit = parseInt(req.query.limit)
		
		const startIndex = (page - 1) * limit
		const endIndex = page * limit
		
		const results = {}
		
		//for next and previous page
		if(endIndex < model.length){
			results.next = {
				page: page + 1,
				limit: limit
			}
		}
		
		if(startIndex > 0){
			results.previous = {
				page: page - 1,
				limit: limit
			}
		}
		
		//send the results to the client
		results.results = model.slice(startIndex, endIndex)
		
		//save it. this name can be whatever variable
		res.paginatedResults = results
		
		//goto the next middleware
		next()
	}
}

app.get("/users", paginatedResults(users),(req, res)=>{
	res.json(res.paginatedResults)
})

app.listen(3000, ()=>console.log("listening to port 3000"))

//query string: /users?page=1&limit=5
