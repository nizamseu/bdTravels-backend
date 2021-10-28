const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;


app = express();

app.get('/',(req,res)=>{
    res.json('hello')
})


app.listen(port,()=>{
    console.log("server Connected");
})