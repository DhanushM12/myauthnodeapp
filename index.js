if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config;
}

 
const express = require('express');
const passport = require('passport');
const port = 8080;
const app = express();
const bcrypt = require('bcrypt');
const passport = require('passport');
const session = require('express-session');
const flash = require('express-flash');
const methodOverride = require('method-override');
const users = [];
const initializePassport = require('./passport-config');
initializePassport(passport, 
    email => users.find(user => user.email == email),
    id = users.find(user => user.id == id))


app.set('view-engine', 'ejs');
app.use(express.urlencoded({ extended: false}));
app.use(flash());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

app.use = (passport.initialize());
app.use = (passport.session());


function checkAuthenicated(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/login');
}

function checkNotAuthenicated(req, res, next){
    if(req.isAuthenticated()){
        return res.redirect('/');
    }
    next();
}

app.listen(port, function(err){
    if(err){
        console.log(`Error in running ther server: ${err}`);
    }
    console.log(`Server is running on port : ${port}`)
})