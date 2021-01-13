const express = require("express")
const app = express()
const router = express.Router()

router.get("/", (req, res)=>{
    res.send("Welcome!")
})

router.post("/", (req, res)=>{
    res.send("You've sent a post request")
})

router.get("/*", (req, res)=>{
    res.send("Oh no! Page not found.")
})

// note: sometimes route is imported from a diff module

// use the router middleware
app.use(router)

app.listen(3000, ()=>{
    console.log("now listening to port 3000")
})