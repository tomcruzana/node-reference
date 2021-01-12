//how to make an http request

const http = require("http");
const url = "http://api.weatherstack.com/current?access_key=b0f4e786a4566c1b8e890b4c782bf4eb&query=-75.7088,44.1545&units=f";

const request = http.request(url, (res)=>{
    let data = "";

    res.on("data", (chunk)=>{
        data = data + chunk.toString();
    })

    res.on("end", ()=>{
        console.log(JSON.parse(data));
    })
});

request.on("error", (err)=>console.log(err));

request.end();