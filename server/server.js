const express =  require('express');

var app=express();

app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.listen(3000,()=>console.log('Server Running on port 3000'));

module.exports.app=app;