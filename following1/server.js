
const express = require('express') //Node.js framework used to facilitate the development of node based web applications
const mongoose = require('mongoose') //works with mongoDB (mongoDB connections, for example)
const bodyParser = require('body-parser') //give the submitted input values
const bcrypt = require("bcrypt");
const { MongoClient } = require('mongodb');
const app = express();
const port = 5500;

//Important for serving static files
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect("mongodb+srv://hans:lol@cluster0.hm6ga.mongodb.net/ShelterUp")

//create data schema 
const userLogin = {
   username:String,
    email:String,
   birthDate:Date,
  password:String
}


//data model
const user = mongoose.model("user", userLogin);


// //Route
// //"/"-> default route
// app.all("*",function(req,res,next){
//     console.log(req.method,req.url);
//     next();
//  })
 

app.get("/",function(req,res){
    // console.log("finds index and serves");
   res.sendFile("index.html"); 
})


//app post
app.post('/', function(req,res){
    let newUser = new user({
        username:req.body.username,
        email:req.body.email,    
        birthDate:req.body.birthday,
        password:req.body.password    
   });
   newUser.save();
  console.log(newUser,"adding user",req.body)
   res.redirect('/');
})



app.listen(port,function(){
    console.log('server is running on'+ " " + port);
})


//Connecting database to the application
const database_uri = "mongodb+srv://hans:lol@cluster0.hm6ga.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(database_uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
 console.log('connected to database');
});



