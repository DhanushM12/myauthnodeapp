const express = require('express');
const port = 8080;
const app = express();


app.listen(port, function(err){
    if(err){
        console.log(`Error in running ther server: ${err}`);
    }
    console.log(`Server is running on port : ${port}`)
})