const express = reqiore("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

//  connect to mongoose
//mongoose.connect("", {userNewUrlParser:true})

//  require route


app.listen(3001, function(){
    console.log("Express server is running on port 3001.");
})