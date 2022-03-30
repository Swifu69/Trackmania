const express = require("express");
const path = require('path')
const app = express();

app.set("view engine","ejs")
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function(req,res){
    res.render("index")
})

app.listen(3000, ()=>{
    console.log("Server opened on http://localhost:3000")
})
