const arrLengthCounter = (arr) =>{
	return `The arr is ${arr.length} long.`;
};

module.exports = arrLengthCounter;

/*
Other ways to export

module.exports.arrLengthCounter = (arr) =>{
	return `The arr is ${arr.length} long.`;
};

OR

module.exports = {
   arrLengthCounter: arrLengthCounter  
};
*/