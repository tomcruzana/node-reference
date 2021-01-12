app.use((req, res, next)=>{
    if(req.method){
        res.status(503).send("Site Under Maintenance");
    }
});

//middleware for site maintenance mode
app.use((req,res,next)=>{
    if(req.method == "GET"){
        res.send("GET is disabled");
    }
    else{
        next();
    }
});