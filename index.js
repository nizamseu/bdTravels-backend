const express =require('express');
const { MongoClient } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;
const cors =require('cors');
require('dotenv').config();


const port = process.env.PORT || 5000;


app = express();
app.use(cors())
app.use(express.json())


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.tgh4y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


async function backendAPI(){

    try{
        await client.connect();
        console.log("mongo connected");
        app.get('/',(req,res)=>{
            res.json('home path')
        })

    }finally {
    
    await client.close();
  }
   
}





backendAPI().catch(console.dir);


app.listen(port,()=>{
    console.log("server Connected");
})