const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

const app = express();
const port = 8000;
const cors = require("cors");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const jwt = require("jsonwebtoken");

//this way is deprecated 
// mongoose.connect("mongodb+srv://ecommerce:ecommercepw@cluster0.remmyxu.mongodb.net/", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }).then(() => {
//     console.log("Connected to Mongo Db");
//   })
//   .catch((err) => {
//     console.log("Error connecting to MongoDb", err);
//   });
// app.listen(port, "73.109.8.206", () => {
//   console.log("Server is running on http://youripadress");
// });




const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://ecommerce:ecommercepw@cluster0.remmyxu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
