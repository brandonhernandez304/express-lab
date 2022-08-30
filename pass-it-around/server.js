//packages/dependencies
const response = require("express");
const express = require("express");
//initialize express app
const app = express();
//declare port
const port = 3000;
//INITIAL ROUTING
// app.get("/", (req, res) => {
//     res.send("99 Bottles of beer on the wall")
// });

//TAKE ONE DOWN AND PASS IT AROUND
app.get("/", (req, res) => {
    res.send(`<h1>99 bottles of beer on the wall</h1>
    <a href="/98">Take one down, pass it around</a>`);
});

app.get("/:number_of_bottles", (req, res) => {
    let bottleNumber = parseInt(req.params.number_of_bottles)
    if (bottleNumber > 0) {
        res.send(`<h1>${bottleNumber} bottle(s) of beer on the wall</h1>
    <a href="/${bottleNumber - 1}">Take one down, pass it around</a>`);/*doesnt need : before ${}*/
    }
    if (bottleNumber === 0){
        res.send(`<h1>Go buy some more beer!</h1>
        <a href="/">We got some IPA's this time!</a>`)
    }
    return;
});
//LISTEN
app.listen(port, () => {
    console.log(`tuning in live to beer port ${port}`)
});

