//packages/dependencies
const response = require("express");
const express = require("express");
//initialize express app
const app = express();
//declare port
const port = 3000;

/////////////
//GREETINGS
////////////


//define routes
app.get("/",(request, response)=>{
    response.send("Begin broadcast")
});
//general greeting
app.get("/greeting",(request, response)=>{
        response.send("Hello, stranger")
});
//now assign user input specific
app.get("/greeting/:name",(request, response)=>{
    // response.send(`"Hello, ${request.params.name} "`)
    //above returns like an api object did, oops
    response.send(`Hello ${request.params.name}.`)
});

//now to listen to the broadcast
app.listen(port, ()=>{
    console.log(`tuning in live to port ${port}`)
});

//////////////
//TIP CALCULATOR
//////////////

//route it
app.get("/tip/:total/:tipPercentage",(request,response)=>{
    response.send(`Tip will be ${tipAmount}`)
});

//now for the math behind tipAmount




