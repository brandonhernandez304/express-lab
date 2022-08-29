//packages/dependencies
const { response } = require("express")
const express = require("express")
//initialize express app
const app = express()
//declare port
const port = 3000
//define routes
app.get("/greeting",(request, response)=>{
        response.send("Hello, stranger")
})

