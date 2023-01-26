const express = require("express");
const ejs = require("ejs");
const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.send("heyyyy");
});

app.get("/forgot-password", (req, res)=>{
    res.render("forgot-password");
});

app.post("/forgot-password", (req, res)=>{
    const {email} = req.body;
    res.send(email);
});

app.get("/reset-password", (req, res)=>{

});

app.post("/reset-password", (req, res)=>{

});

app.listen(3000, function () {
    console.log("Server running on port 3000.");
})