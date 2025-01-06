const router=require("express").Router()
const User =require("../models/User")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const secret="Iscfo-9m85Kf9tJFQSjACA3p-nKK_dBPl5ialqGA7mg"

const a=()=>{
  router.get("/login",(req,res)=>{
    res.send("abc")
  })
}
router.post("/login",async (req,res)=>{
  try{
    a()
    const user=await User.findOne({email:req.body.email});
    
    if(!user){
     return res.status(400).json({mess:"NO user"})
    }
    const correct=await bcrypt.compare(req.body.password,user.password)
    if(!correct){
     return res.status(400).json({mess:"Password wrong"})
    }
    const data={email:user.email,name:user.name,_id:user._id}
    const token=jwt.sign(data,secret);

    
    res.cookie("token", token,{
      httpOnly: true,
      secure: false, 
      sameSite: "strict",
    })
    res.status(200).json({ message: "Login successful" ,token});
  }
  catch(err){
    console.log("Enter Valid Email & password",err)
  }
})


router.post("/logout",(req,res)=>{
  res.cookie("token", );
  res.status(200).json({ message: "Logged out successfully" });
})



const verifyJwt=async (req,res,next)=>{
  
    const token=req.cookies.token;
    if(!token){
      return res.status(401).json({ message: "Token missing" });
    }
    try{
      const correct=await jwt.verify(token,secret)
      if(!correct){
        return res.status(401).json({ message: "Incorrect Token" });
      }
      req.user=correct;
      next();
    }
    catch(err){
      console.log(err)
    }
  
}







module.exports ={router,verifyJwt};