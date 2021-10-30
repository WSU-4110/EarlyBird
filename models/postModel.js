const mongoose = require("mongoose")

//  create a post schema
const postsSchema = {
    category: String,
    title: String,
    content: String
}

//  use post schema
const Post = mongoose.model("Post", postsSchema);

//  export Post
module.exports = Post;