// dependencies
const express = require('express');
const mongoose = require('mongoose');
const checkLogin = require('../middlewares/checkLogin');
const movieSchema = require('../schemas/movieSchema');
const Movie = mongoose.model('Movie', movieSchema);
const userSchema = require("../schemas/userSchema");
const User = new mongoose.model("User", userSchema);

// different router
const router = express.Router();

//post a movie list
router.post('/insert', checkLogin, async (req, res) => {
  
  const newMovie = new Movie({
    ...req.body,
    user: req.userId
  });

  try{ 
    await newMovie.save();
    res.status(200).json({
        message: "movie list successfully created",
    });   
  }catch(err){
    console.log(err);
    res.status(500).json({
        message: "Error in creating movie data",
    });
  }
});



//get the movie list
router.get("/list", checkLogin, (req, res) => {
    Movie.find({user: req.userId})
    .exec((err, data) => {
      if (err) {
        res.status(500).json({
          error: "There was a server side error!",
        });
      } else {
        res.status(200).json({
          result: data,
          message: "Success",
        });
      }
    });
});

module.exports = router;
