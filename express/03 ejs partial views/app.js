//require express
const express = require("express");
const app = express();

app.set("view engine", "ejs"); //tell express that we will use ejs as a template engine

//routes for http get requests
app.get("/home", (req, res)=>{
	res.render("index"); //access ejs template. By default, it will look at the View folder
});

/* To view the partial template, go to the views and then partial folder.
   And look for this ejs code: <%- include("partials/navigation") %> <!--This is how you put a partial html component in ejs-->
   Basically, what happening is we are injecting another HTML component into another HTML for reuse. 
*/

app.listen(9000); //port of the server

