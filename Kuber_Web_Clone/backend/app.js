const express=require("express")
const app=express()
const db=require("./db")
const cors=require("cors")
app.use(cors(
  {
    origin: "http://localhost:5173", // Replace with your frontend's URL
    credentials: true, // Allow cookies
  }
))
const port=5000
const {router}=require("./routes/Login")

app.use("./login",express.static("./public/index.html"))

db()
app.use(express.json())
app.use("/",require("./routes/createUser"))
app.use("/",router)

app.listen(port,()=>{
  console.log(`Listing to port ${port}`)
})