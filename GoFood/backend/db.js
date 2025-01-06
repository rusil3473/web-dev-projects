const mongoose = require('mongoose');
const URL = "mongodb+srv://rusilvaru555:EeXuk62e5ObIKM6W@cluster1.23zpm.mongodb.net/gofood?retryWrites=true&w=majority";

async function connectToDB() {
  try {
    await mongoose.connect(URL)
    console.log("connected")

    // for fetching data from collection products 
    const data= await mongoose.connection.db.collection("products")
    const itemData=await data.find({}).toArray();
    global.food_item=itemData;

    //for fetching data from collection categories
    const Data=await mongoose.connection.db.collection("categories")
    const catagoryData=await Data.find({}).toArray()
    global.food_catagoty=catagoryData;
  }
  catch(err){
    console.log(err)
  }
}

module.exports = connectToDB;