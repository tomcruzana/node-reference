const express = require("express");

const app = express();

app.get("/", (req, res)=>{
    res.send(`<h1>Home</h1>`);
});

app.get("/help", (req, res)=>{
    contact = {
        name : "Rotty",
        number: "333-333-3333"
    }
    res.send(
        contact
    );
});

app.get("/about", (req, res)=>{
    res.send("<h2>about route</h2>");
});

app.get("/weather", (req, res)=>{
    weather = {
        location : "Bellingshit",
        forecast: "50 degrees"
    }
    res.send(weather);
});


app.listen(9000, ()=>{
    console.log("server running..");
});