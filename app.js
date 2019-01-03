var express             = require("express"),
    app                 = express(),
    bodyParser          = require("body-parser"),
    mongoose            = require("mongoose");
    
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));


app.get("/", function(req, res){
    res.redirect("home");
});

app.get("/home", function(req, res){
    res.render("../pages/home");
})










app.listen(process.env.PORT, process.env.Id, function(req, res){
    console.log("Server Has Started...");
});