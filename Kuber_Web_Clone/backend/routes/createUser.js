const router=require("express").Router()
const bcrypt=require("bcrypt")
const User=require("../models/User.js")


router.post("/signup",async(req,res)=>{
  try{
    const salt=await bcrypt.genSalt(15);
    const secPass=await bcrypt.hash(req.body.password,salt)
    await User.create({
      name:req.body.name,
      phNo:req.body.phNo,
      email:req.body.email,
      password:secPass
    })
    res.status(200).json({message:true})
  }
  catch(err){
    console.log(err)
  }
})


module.exports=router