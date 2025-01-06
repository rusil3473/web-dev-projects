const router=require("express").Router()


router.post("/foodData",(req,res)=>{
  try{
    res.send([global.food_item, global.food_catagoty])

  }
  catch(err){
    console.error(err);
  }
})

module.exports=router;