console.log("utils");

const name = "Thomas";

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

module.exports = {
	name, //es6 shorthand
	add: add,
	subtract: subtract,
	multiply: multiply,
	divide: divide
};