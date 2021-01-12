/*
	In cryptography, a cipher (or cypher) is an algorithm for performing encryption 
	or decryption—a series of well-defined steps that can be followed as a procedure. 
	... To encipher or encode is to convert information into cipher or code.
	
	https://nodejs.org/api/crypto.html#crypto_class_cipher
*/

const crypto = require("crypto");

const cipher = crypto.createCipher("aes192", "password123");

let encrypted = cipher.update("hello, world", "utf8", "hex");

encrypted += cipher.final("hex");

console.log(encrypted);