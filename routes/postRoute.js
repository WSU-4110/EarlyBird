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



//  export router
module.exports = router;