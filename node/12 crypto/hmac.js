/*
	HMAC stands for Hash-based Message Authentication Code. 
	It is a process for applying a hash algorithm to both 
	data and a secret key that results in a single final hash.

	Encrytion example using Hmac
*/

const crypto = require("crypto");

const secret = "abcdefg";

const hash = crypto.createHmac("sha256", secret)
							  .update("hello, world")
							  .digest("hex");

console.log(hash);