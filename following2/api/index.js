const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const { MongoClient, MongoKerberosError } = require('mongodb');
const { short } = require('webidl-conversions');
const app = express();
const port = process.env.PORT || 8080

const corse=require("cors");

app.use(corse());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect("mongodb+srv://hans:lol@cluster0.hm6ga.mongodb.net/ShelterUp")

const database_uri = "mongodb+srv://hans:lol@cluster0.hm6ga.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(database_uri, { useNewUrlParser: true, useUnifiedTopology: true });
//create data schema 
const userLogin = {
  username:String,
   email:String,
  birthDate:Date,
 password:String
}
const user = mongoose.model("user", userLogin);


client.connect(err=>{
  console.log("connected to database");
  const bootcampdatabase = client.db("ShelterUp")
  const drinks = bootcampdatabase.collection("drinks")
  const rewards = bootcampdatabase.collection("rewards")
  const login = bootcampdatabase.collection("login")
  const cart = bootcampdatabase.collection("cart")
  const users = bootcampdatabase.collection("users")

  app.use("*", (req, res, next) => { 
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Methods", "GET,POST");
    res.set("Content-Type", "application/json");
    next();
  })

  app.post("/drinks/", (req, res) => {
    drinks.insertOne(req.body).then(result => {
      id = result.insertedId;
      res.status(200).json({id});
    });
  })

  app.post("/cart/", (req, res) => {
    cart.insertOne(req.body).then(result => {
      id = result.insertedId;
      res.status(200).json({id});
    });
  })

  app.post("/rewards/", (req, res) => {
    rewards.insertOne(req.body).then(result => {
      id = result.insertedId;
      res.status(200).json({id});
    });
  })

  app.post("/login/", (req, res) => {
    login.insertOne(req.body.title)
    login.insertOne(req.body.content)
  })

  app.get("/",function(req,res){
    // console.log("finds index and serves");
   res.sendFile("./following2/signup.html"); 
  })

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

  app.get("/drinks/", (req, res) => {
    // const drinks = {"drinks":["Cocktail", "Mojito", "Beer", "Beer"]}
    drinks.find().toArray().then((data) => {
      console.log(data); 
      res.send(JSON.stringify(data))
    })
  })

  app.get("/points/", (req, res) => {
    drinks.find().toArray().then((drinks) => {
      rewards.find().toArray().then((rewards) => {
          let points = drinks.map(a => a.points)
          let earned = 0
          for (let i = 0; i < points.length; i++) {
              earned += points[i]
          }
          console.log(earned)
          let spentpoints = rewards.map(a => a.points)
          let spent = 0
          for (let i = 0; i < spentpoints.length; i++) {
              spent += spentpoints[i]
          }
          console.log(spent)

          var balance = earned - spent
          let data={balance,earned,spent}
          res.send(JSON.stringify(data))
        });
    })
  })

  app.get("/rewards/", (req, res) => {
    rewards.find().toArray().then((data) => {
      console.log(data); 
      res.send(JSON.stringify(data))
    })
  })

  app.get("/cart/", (req, res) => {
    cart.find().toArray().then((data) => {
      console.log(data); 
      res.send(JSON.stringify(data))
    })
  })

  app.get("/users/", (req, res) => {
    users.find().toArray().then((data) => {
      console.log(data); 
      res.send(JSON.stringify(data))
    })
  })
  
  app.get("/drinks/:drinkid/", (req, res) => {
    console.log(req.params);
  })
  
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })

});


//create a server object:
/* const server = http.createServer((incoming, outgoing) => {
  outgoing.setHeader("Access-Control-Allow-Origin", "*");
  outgoing.setHeader("Content-Type", "application/json");
  outgoing.statusCode = 200;

  console.log(`Request on url ${incoming.url} with the method ${incoming.method}`);

  if(incoming.url == "/drinks/" && incoming.method == "GET")
  {
    outgoing.write("{\"drinks\": [\"Cocktail\", \"Mojito\", \"Beer\", \"Beer\"]}"); //write a response to the client
    outgoing.end(); //end the response
  }
  else
  {
    if(incoming.url == "/rewards/" && incoming.method == "GET")
    {
      outgoing.write("{\"rewards\": [\"Discount\", \"Drink\", \"Ticket\", \"Uber\"]}"); //write a response to the client
      outgoing.end(); //end the response
    } else {
        outgoing.statusCode = 404;
        outgoing.end();
    }
  }
});

server.listen(8080); */ 
