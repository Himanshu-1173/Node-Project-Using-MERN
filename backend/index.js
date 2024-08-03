const express=require('express');
const cors=require('cors');
require('./db/config');
const user = require('./db/users');
const app=express();


app.use(cors());
app.use(express.json());

app.post('/Signup',async(req,resp)=>{
    const data = new user(req.body);
    let result=await data.save();
    resp.send(result);
})

app.listen(5000);

