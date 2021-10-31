const express = require("express");
//const { model } = require("mongoose");
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

//postRoute.js for config the display all the posts
router.route("/searchPosts").get((req, res) => {
    Post.find()
    .then(posts => res.json(posts))
    .catch(err => res.status(400).json("Error: "+ err));
});


//  export router
module.exports = router;