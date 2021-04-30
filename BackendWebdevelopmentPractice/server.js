const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));

function function1(req,res) {
    res.sendFile(__dirname + '/index.html');
}
app.post("/",function(req,res){
    res.send((parseInt(req.body.num1)+parseInt(req.body.num2)).toString());
});



app.get("/", function1);
app.get("/contact", function (req, res) {
  res.send("<h1> Contact details have been requestd</h1>");
});

function something() {
  console.log("Listening to port 3000");
}
app.listen(3000, something);
