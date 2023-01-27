require("dotenv").config();
const express = require("express");
const ejs = require("ejs");
const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.set("view engine", "ejs");

let user = {
    id: "jckndwdwmdlwdwdw2l34",
    email: "12@gmail.com",
    password:"cececciodwhijtbtmbtrvevegsnxwkmckw5848r3h38"
}

app.get("/", function(req, res) {
    res.send("heyyyy");
});

app.get("/forgot-password", (req, res)=>{
    res.render("forgot-password");
});

app.post("/forgot-password", (req, res)=>{
    const {email} = req.body;

    //Make sure the user exists
    if (email!==user.email){
        res.send("User not found!");
        return;
    }

    //If the user exists then send them the one time link which is valid only for 15 mins
    const secret = process.env.JWT_SECRET + user.password;
    const payload ={
        email: user.email,
        id:user.id
    }
    const token = jwt.sign(payload, secret, {expiresIn:'15m'});
    const link = `https://localhost:300/reset-password/${user.id}/${token}`;
    console.log(link);
    res.send("Password reset link has been sent to the user");
});

app.get("/reset-password", (req, res)=>{
    const {id, token} = req.params;
    

    //Check if  this id exists in database 
    if (id!== user.id){
        res.send("Invalid Id");
        return 
    }

    //We have a valid user id, and we have a valid user with this id
    const secret = process.env.JWT_SECRET  +user.password;
    // try{
    //     const payload = jwt.verify(token, secret);
        
    // }
});

app.post("/reset-password", (req, res)=>{

});

app.listen(3000, function () {
    console.log("Server running on port 3000.");
})