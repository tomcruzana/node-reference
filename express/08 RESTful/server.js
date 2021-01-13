const express = require('express');
const app = express();
const fs = require("fs");

let counter = 0;

//user factory
const createUser = (name, password, profession) => {
   counter++
   const userKey = "user" + counter.toString();

   var user = {
      userKey  : {
         "name" : "mohit",
         "password" : "password4",
         "profession" : "teacher",
         "id": 4
      }
   }
}



//write to file
const commitChanges = (filePath, data) => {
   fs.writeFile( filePath, JSON.stringify(data), (err) => { //this is how to write error handlers.
      (err) ? console.log(err + "error writing file") : console.log("write success!")
   });
}

//read file
const executeRead = (filePath) => {
   fs.readFile( filePath, 'utf8', (err, data) => {
      (err) ? console.log(err + "error reading file") : console.log(data)

   })
}


//routes
app.get('/listUsers', (req, res) => {
   executeRead(__dirname + "/" + "users.json")
   res.end()
})


//TODO generate a user dynamically
app.post('/listUsers', function(req, res){
	fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      data["user4"] = user["user4"]; //add user by adding the obj literal
      console.log( data );

      //write to file
      commitChanges( __dirname + "/" + "users.json", data)

      res.end( JSON.stringify(data));
   });
})

/*
app.get('/:id', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      var users = JSON.parse( data );
      var user = users["user" + req.params.id] 
      console.log( user );
      res.end( JSON.stringify(user));
   });
})

app.delete('/deleteUser/:id', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      delete data["user" + req.params.id];
       
      console.log( data );

      //write to file
      commitChanges( __dirname + "/" + "users.json", data)
      
      res.end( JSON.stringify(data));
   });
})
*/

app.listen(9000);
console.log("server running")