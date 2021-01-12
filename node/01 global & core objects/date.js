// Now
var now = new Date();
console.log('now is:', now);
// get sections of time
var milliseconds = now.getMilliseconds();
var seconds = now.getSeconds();
var hours = now.getHours();
var minutes = now.getMinutes();
var date = now.getDate();
var month = now.getMonth();
var year = now.getFullYear();
// detailed constructor for a date
var dateCopy = new Date(year, month, date,
hours, minutes, seconds,
milliseconds);
console.log('copy is:', dateCopy);
// Other dates
// year, month, date
console.log('1 jan 2014:', new Date(2014, 0, 1));
// year, month, date, hour
console.log('1 jan 2014 9am', new Date(2014, 0, 1,
9));

// serialization
var date = new Date(Date.UTC(2007, 0, 1));
console.log('Original', date);
// To JSON
var jsonString = date.toJSON();
console.log(jsonString); // 2007-01-01T00:00:00.000Z
// From JSON
console.log('Round Tripped',new Date(jsonString));

// TIP: use moment js npm. see page 141 of NodeJS Apress book for an example


