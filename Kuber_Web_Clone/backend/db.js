const mongoose=require ("mongoose")
const URL="TAKE URI FROM MONGODB"
async function db(){
  try{
  await mongoose.connect(URL)
  console.log("Conncted to data base succesfully")
  
  }
  catch(err){
    console.log("Error while coonceting to database ")
  }
}

module.exports =db
