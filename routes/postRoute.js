const express = require("express");
const router = express.Router();
const Post = require("../models/postModel");

//congigure the router
router.route("/postCreation").post((req, res) =>{
    const category = req.body.category;
    const title = req.body.title;
    const content = req.body.content;

    const newPost = new Post({
        category,
        title,
        content
    });

    newPost.save();
})

//Render input into Projects tab

    router.route("/proj").get((req,res) => {
     
       Post.find()
            .then(postFound => res.json(postFound))
          
     
     });



//  export router
module.exports = router;