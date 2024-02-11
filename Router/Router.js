
const express = require('express');
const User = require('../models/userSchema');
const Router = express.Router()

Router.get('/',(req,res)=>{
 
  res.send("sever start sucessfully")

})





Router.post('/register', async (req, res) => {
  console.log("api working at");
    try {
      const { name, number, email, city, grade } = req.body;
  
      // Create a new user
      const newUser = new User({
        name,
        number,
        email,
        city,
        grade,
      });
  
      // Save the user to the database
      await newUser.save();
  
      // Respond with success message
      res.json({ message: 'User registered successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  });





module.exports = Router