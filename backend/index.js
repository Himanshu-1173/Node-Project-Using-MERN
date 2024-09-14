const express=require('express');
const cors=require('cors');
require('./db/config');
const User = require('./db/users');
const Product =require('./db/product');
// const JWT=require('jsonwebtoken');
// const jwtkey='e-comm';
const app=express();

app.use(cors());
app.use(express.json());

app.post('/Signup',async(req,resp)=>{
    const user = new User(req.body);
    let result=await user.save();
    result=result.toObject();
    delete result.password;
    // JWT.sign({result},jwtkey,{expiresIn:"2h"},(err,token)=>{
    //     if(err){
    //         resp.send({result:"Something went wrong, Please try after sometime"})
    //     }
    //     resp.send({result,auth:token});
    // })
    resp.send(result);
    
});

app.post('/Login', async(req,resp)=>{
    console.log(req.body);
    if( req.body.password && req.body.email ){
    let user = await User.findOne(req.body).select("-password");
    // if(user){
    //     JWT.sign({user},jwtkey,{expiresIn:"2h"},(err,token)=>{
    //         if(err){
    //             resp.send({result:"Something went wrong, Please try after sometime"})
    //         }
    //         resp.send({user,auth:token});
    //     })
        resp.send(user);
        
    }
    // else{
    //     resp.send({result:"user not Found"})
    // }  
    
// }
//     else{
//         resp.send({result:"user not Found"})
//     }
    
});

app.post('/Add-product',async(req,resp)=>{
    const product=new Product(req.body);
    let result =await product.save();

    resp.send(result);
})

app.get('/products',async(req,resp)=>{
    const products=await Product.find();
    if(products.length>0){
        resp.send(products);
    }
    else{
        resp.send({result:"Not Found "} );
    }

    
})
app.delete("/product/:id", async(req,resp)=>{
const result=await Product.deleteOne({_id:req.params.id});
    resp.send(result);
})

app.get('/product/:id',async(req,resp)=>{
    let result=await Product.findOne({_id:req.params.id});
    result ? resp.send(result):resp.send("No Record Found");
    
})

app.put('/product/:id',async(req,resp)=>{
    let result =await Product.updateOne(
        {_id:req.params.id},
    {
        $set:req.body

    }
   
)
resp.send(result);
})

app.get('/Search/:key',async(req,resp)=>{
    let result= await Product.find({
        "$or":
        [
            {"name":{$regex:req.params.key}},
            {"company":{$regex:req.params.key}},
            {"category":{$regex:req.params.key}}
        ]
    })
    resp.send(result);
})

// function verifyToken(req,resp,next){
//     let token =req.headers['authorization'];
//     if (token){
//         token=token.split('')[1];
//         console.warn("middleware called",token);
//         JWT.verify(token,jwtkey,(err,valid)=>{
//             if(err){
//                 resp.status(403).send({result:"please provide valid token"})
//             }
//             else{
//                 next();
//             }
//         })
//     }
//     else{
//         resp.status(401).send({result:"Please add token with header"})
//     }
    
// next();

app.listen(5000);

