/*
    Title: JWT-Auth
    Description: We will verify a user by using token and give access to perform certain events in this system.
    Author: Md.Sakib Al Emran
    Date: 04/11/2021
*/

//dependencies
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userHandler = require('./routeHandlers/userHandler');
const checkHandler = require('./routeHandlers/checkHandler');

//app initilization
const app = express();
dotenv.config();
app.use(express.json());

//datbase connection through mongoose
mongoose.connect('mongodb://localhost/collections', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    })
    .then(() => console.log('database connection successful'))
    .catch(err => console.log(err))

//application routes
app.use("/user", userHandler);
app.use("/check", checkHandler);

//default error handler
const errorHandler = (err, req, res, next) => {
    if(res.headersSent){
        return next(err);
    }
    res.status(500).json({error : err});
};

app.use(errorHandler);

//port
const PORT = 3000;

app.listen(PORT, ()=> {
    console.log(`app is listening at port: ${PORT}`);
});
