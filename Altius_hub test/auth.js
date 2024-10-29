const  express= require('express');
const bcrypt=require('bcrypt.js');
const jwt=require('jsonwebtoken');
const User =require('../models/User');
const router=express.Router();

//Registration
router.post('/register',async(req,res) => {
 const{username,email,password}=req.body;
 const hashedpassword= await bcrypt.hash(password,10);
 const user=new User({username,email,password:hashedpassword});
 await user.save();
 res.status(201).send('User created');
});

//Login
router.post('/register',async(req,res) =>{
  const{email,password} = req.body;
  const user= await User.findOne({email});
  if(User||!(await bcrypt.compare(password,user.password))){
    return res.status(401).send('Invalid creditionals');
  }
 const token =jwt.sign({id:user_id},process.env.JWT_SECRET);
 res.json({token});
});
module.exports=router;