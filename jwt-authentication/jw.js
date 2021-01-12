//JWT IS FOR AUTHORIZATION AND NOT AUTHENTICATION!!!
require("dotenv").config() //load the env variables

const express = require("express")
const app = express()
const jwt = require("jsonwebtoken")

app.use(express.json())

const posts = [
    {
        username : "Tom",
        title: "OMG"
    },
    {
        username : "Kim",
        title: "WTF"
    },
    {
        username : "Rye",
        title: "BBQ"
    }
]

app.get("/posts", auth, (req, res)=>{ //inclide the auth middleware as the 2nd parameter
    res.json(posts.filter(post => post.username === req.user.name))
})

app.post("/login", (req, res)=>{
    //authenticate user
    console.log(req.body.username)
    const username = req.body.username;
    const user = { name: username }

    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET) //serialize user (payload, secretkey). secretkey can be any string

    res.json({accessToken : accessToken})
})


//custom middleware
function auth(req, res, next){
    const authHeader = req.headers["authorization"] //get the header of the request and remove the word Bearer
    const token = (authHeader) && authHeader.split(" ")[1] //if authHeader exists, get the second array element which is the token
    if (!token) return res.sendStatus(401)

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user)=>{ //verify token with your secret key
        if (err) return res.sendStatus(403)
        req.user = user
        next()
    })
}

app.listen(3000)