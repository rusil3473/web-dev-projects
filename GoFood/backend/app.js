const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const productData = require("../Frontend/GoFood/src/assets/foodCategory.json"); // Ensure this is an array
const db=require('./db');




db()


app.use(express.json());
app.use("/api", require("./routes/CreateUser.js"));
app.use("/api",require("./routes/Display.js"));
app.get("/",(req,res)=>{
    res.send("Hello Node");
});




app.listen(5000, () => {
    console.log('Server is running on port 5000');
});

    































































































// Connect to MongoDB
    
    
    /* // Define product schema
    const productSchema = mongoose.Schema({
        CategoryName: { type: String, required: true }, // Fixed "string" to "String" and added required boolean
        
    });
    
    // Define the model
    const Product = mongoose.model('category', productSchema);
    
    // Express middleware
    app.use(express.json());
    
    // Insert products into MongoDB
    async function setProducts() {
        try {
            // Insert all products in the data array
            await Product.insertMany(productData); // Use insertMany for batch insertion
            console.log('Products added!');
        } catch (err) {
            console.log('Products not added!', err); // Log error in case of failure
        }
    }
    
     */
    
    // Start the server