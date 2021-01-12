/*
	Messing around with the chalk npm package
	docs: https://60devs.com/npm-install-specific-version.html
*/

const chalk = require("chalk");

const success = chalk.bold.inverse.green;
const error = chalk.bold.inverse.red;

console.log(success("success"));
console.log(error("failed"));