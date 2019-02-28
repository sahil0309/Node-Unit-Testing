const express =  require('express');
const db = require('../db/db');

var app=express();

app.get('/',(req,res)=>{
    db.save('Sahil')
    .then((data)=>res.send(data))
    .catch((error)=>res.status(400).send(error));
    })


app.listen(3000,()=>console.log('Server Running on port 3000'));

module.exports.app=app;