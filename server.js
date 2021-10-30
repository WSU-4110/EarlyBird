const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");


app.use(cors());
app.use(express.json());



 // connect to mongoose
mongoose.connect("mongodb+srv://EarlyBird-admin:CSCProject-EarlyBird@cluster0.lu0hw.mongodb.net/EarlyBirdDB", {useNewUrlParser: true,})



//  require route
app.use("/", require("./routes/postRoute"));



app.listen(3001, function(){
    console.log("Express server is running on port 3001.");
})  