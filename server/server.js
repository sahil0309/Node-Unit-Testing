const express =  require('express');
const cryptr = require('cryptr');
const db = require('../db/db');

const mycryptr = new cryptr('password');
var app=express();

app.get('/',(req,res)=>{
    db.save('Sahil')
    .then((data)=>res.send(data))
    .catch((error)=>res.status(400).send(error));
    })

app.post('/savePassword',(req,res)=>{
    mycryptr.encrypt(req.body.password);
})

app.post('/login',(req,res)=>{
    mycryptr.decrypt(req.body.password);
})
app.listen(3000,()=>console.log('Server Running on port 3000'));

module.exports.app=app;