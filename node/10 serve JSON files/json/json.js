const foo ={
	name: "thomas",
	age: 30,
	hasAjob: false
}

// convert js obj to json formatted string
const json = JSON.stringify(foo)
console.log(json)
console.log(typeof json)

//convert json formatted string back to obj
const backToObj = JSON.parse(json)
console.log(backToObj)
console.log(typeof backToObj)