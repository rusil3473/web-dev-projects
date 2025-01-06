const mongoose=require ("mongoose")
const URL="mongodb+srv://rusilvaru555:HAMIRBHAI&4421v@cluster0.djrhg.mongodb.net/auth?retryWrites=true&w=majority&appName=Cluster0"
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