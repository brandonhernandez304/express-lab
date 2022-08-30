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
app.get("/", (request, response) => {
    response.send("Begin broadcast")
});
//general greeting. (specific request)
app.get("/greeting", (request, response) => {
    response.send("Hello, stranger")
});
//now assign user input specific. (non-specific request)
app.get("/greeting/:name", (request, response) => {
    // response.send(`"Hello, ${request.params.name} "`)
    //above returns like an api object did, oops
    response.send(`Hello ${request.params.name}.`)
});

//now to listen to the broadcast
app.listen(port, () => {
    console.log(`tuning in live to port ${port}`)
});

//////////////
//TIP CALCULATOR
//////////////

//route it
//put math inside the fxn
app.get("/tip/:total/:tipPercentage", (req, res) => {
    let tip = parseInt(req.params.total) * (parseInt(req.params.tipPercentage) * .01);
    res.send(`Tip will be ${tip}`);
});

//////////
//MAGIC 8 BALL
//////////

//array of responses

const ballResponses = [
    "It is certain", 
    "It is decidedly so", 
    "Without a doubt", 
    "Yes definitely", 
    "You may rely on it", 
    "As I see it yes", 
    "Most likely", 
    "Outlook good", 
    "Yes", 
    "Signs point to yes", 
    "Reply hazy try again", 
    "Ask again later", 
    "Better not tell you now",
    "Cannot predict now", 
    "Concentrate and ask again", 
    "Don't count on it", 
    "My reply is no", 
    "My sources say no", 
    "Outlook not so good", 
    "Very doubtful"
]

app.get("/magic/:question", (req, res) => {
    let ballResponse = ballResponses[Math.floor(Math.random()*ballResponses.length)];
    res.send(`<h1>${ballResponse}</h1>`);
});







