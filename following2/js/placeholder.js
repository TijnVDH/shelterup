const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const port = 8080

const database_uri = "mongodb+srv://hans:lol@cluster0.hm6ga.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(database_uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
  });