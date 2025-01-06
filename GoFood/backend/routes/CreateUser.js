const User = require('../models/User');
const router = require('express').Router();
const { body, validationResult } = require('express-validator');
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")
const secret="RusilVARURRRRRRRRRRRRUUUUUU"



router.post('/createuser',body('email').isEmail(),body('name').isLength({ min: 3 }),body('password').isLength({ min: 5 }),
 async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const salt=await bcrypt.genSalt(10);
    const secPassword=await bcrypt.hash(req.body.password,salt);
    try {
      
      await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPassword,
        location: req.body.location
      });
      res.status(200).json('User created');
    }
    catch (err) {
      console.log(err);
    }
  });

router.get('/createuser', (req, res) => {
  res.send("USER CREATED");
});



router.post('/login', async (req, res) => {
  const email = req.body.email;
  try {
    const find = await User.findOne({ email });
    if (!find) {
      return res.status(400).json({ "error": "Enter correct email" })
    }
    const correct=bcrypt.compare(req.body.password,find.password);
    if (!correct)  {
      return res.status(400).json({ "error": "Enter correct password" })
    }
   const data={id:find.id}
    const authToken=jwt.sign(data,secret)
    return res.status(200).json({ "message": "User logged in successfully",token:authToken })
  }
  catch (err) {
    console.log(err);
  }

})














module.exports = router;